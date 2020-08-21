import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTimer, disableButton, addScore } from '../action';
import Timer from './Timer';

export let interval;

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
    const player = {
      player: {
        name: this.props.name,
        assertions: 0,
        score: 0,
        gravatarEmail: this.props.email,
      }
    }
    localStorage.setItem('state', JSON.stringify(player));
    this.props.addScore(player.player.score);
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

  answerClick(event) {
    const { questions, addScore } = this.props;
    const timer = document.getElementById('timer').innerHTML;
    console.log(questions[this.state.index]);
    clearInterval(interval);
    const player = JSON.parse(localStorage.getItem('state'));
    let difficulty = 0;
    switch (questions[this.state.index].difficulty) {
      case 'hard':
        difficulty = 3;
        break;
      case 'medium':
        difficulty = 2;
        break;
      case 'easy':
        difficulty = 1;
        break;
      default:
        difficulty = 0;
        break;
    }

    if (event.target.name === 'correct-answer') {
      player.player.assertions += 1;
      player.player.score += (10 + (timer * difficulty))
    }
    console.log(player);

    localStorage.setItem('state', JSON.stringify(player));
    addScore(player.player.score);
    return this.state.isClicked ? false :
    setTimeout(() => this.setState({ isClicked: true }), 5000);
    
  }

  render() {
    const { questions, disabled, disableButton } = this.props;
    const { index, isClicked } = this.state;
    // if (timer < 1 && timer !== null) {
    //   this.clearIntervalTimer(interval);
    //   disableButton(true);
    // }
    console.log('render')
    return (
      <div>
        {questions[index] &&
          <div>
            
            <Timer />
            <p data-testid="question-category">{questions[index].category}</p>
            <p data-testid="question-text">{questions[index].question}</p>
            {/* <h2>{timer}</h2> */}
            
            {
            questions[index].answer.map((answer) =>
            (<div>
              <button disabled={disabled} onClick={(event) => this.answerClick(event)} name={answer['data-testid']} style={isClicked ? answer.style : null} key={Math.random() * 100} data-testid={answer['data-testid']}>{answer.answer}</button>
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
  addScore: (e) => dispatch(addScore(e)),
})

const mapStateToProps = (state) => ({
  questions: state.questionsReducer,
  // timer: state.timerReducer.timer,
  disabled: state.timerReducer.disabled,
  name: state.userReducer.name,
  email: state.userReducer.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAndAnswers);
