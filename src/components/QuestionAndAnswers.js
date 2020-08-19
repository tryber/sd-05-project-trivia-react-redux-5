import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class QuestionAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
  }

  handleClick() {
    this.setState({ index: this.state.index + 1 });
  }

  render() {
    const { questions } = this.props;
    const { index } = this.state;
    return (
      <div>
        {questions[index] &&
          <div>
            {questions[index].category}
          </div>
        }
        <button onClick={() => this.handleClick()}>Próxima</button>
      </div>
    );
  }
}

QuestionAndAnswers.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.questionsReducer,
});

export default connect(mapStateToProps)(QuestionAndAnswers);
