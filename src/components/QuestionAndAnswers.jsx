import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTimer, disableButton } from '../action';

let interval;

class QuestionAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isClicked: false,
    };
  }

  componentDidMount() {
    this.props.setTimer(30);
    interval = setInterval(() => this.props.setTimer(-1), 1000);
    disableButton(false);
  }

  handleClick() {
    this.setState({
      index: this.state.index + 1,
      isClicked: false,
    });
    this.props.disableButton(false);
    this.props.setTimer(30);
    interval = setInterval(() => this.props.setTimer(-1), 1000);
  }

  answerClick() {
    clearInterval(interval);
    return this.state.isClicked ? false :
    setTimeout(() => this.setState({ isClicked: true }), 5000);
  }

  clearIntervalTimer(interval) {
      // this.disableButtun();
      return clearInterval(interval);
  }

  render() {
    const { questions, timer, disabled, disableButton } = this.props;
    const { index, isClicked } = this.state;
    if (timer < 1 && timer !== null) {
      this.clearIntervalTimer(interval);
      disableButton(true);
    }
    return (
      
      <div>
        {questions[index] &&
          <div>
            <p data-testid="question-category">{questions[index].category}</p>
            <p data-testid="question-text">{questions[index].question}</p>
            <h2>{timer}</h2>
            {
            questions[index].answer.map((answer) =>
            (<div>
              <button disabled={disabled} onClick={() => this.answerClick()} style={isClicked ? answer.style : null} key={Math.random() * 100} data-testid={answer['data-testid']}>{answer.answer}</button>
            </div>
            ),
            )
            }
          </div>
        }
        {
          (isClicked || disabled) &&
          <button data-testid="btn-next" onClick={() => this.handleClick()}>Próxima</button>
        }
      </div>
    );
  }
}

QuestionAndAnswers.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setTimer: (e) => dispatch(setTimer(e)),
  disableButton: (e) => dispatch(disableButton(e)),
})

const mapStateToProps = (state) => ({
  questions: state.questionsReducer,
  timer: state.timerReducer.timer,
  disabled: state.timerReducer.disabled,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAndAnswers);
