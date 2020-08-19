import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class QuestionAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleClick() {
    this.setState({ index: this.state.index + 1 });
  }

  randomAnswers(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      const a = array[i];
      array[i] = array[j];
      array[j] = a;
    }
    return array;
  }

  answers(questions) {
    const { correct_answer, incorrect_answers } = questions;
    const correct = {
      answer: correct_answer,
      isCorrect: true,
      'data-testid': 'correct-answer',
    };
    const incorrect = incorrect_answers.map((answer, i) => ({
      answer,
      isCorrect: false,
      'data-testid': `wrong-answer-${i}`,
    }));
    
    const answers = [...incorrect, correct]

    const randomAnswers = [...answers];
    
    return this.randomAnswers(randomAnswers);
  }

  render() {
    const { questions } = this.props;
    const { index } = this.state;
    return (
      <div>
        {questions[index] &&
          <div>
            <p data-testid="question-category">{questions[index].category}</p>
            <p data-testid="question-text">{questions[index].question}</p>
            {
            this.answers(questions[index]).map((answer) =>
            (<button data-testid={answer["data-testid"]}>{answer.answer}</button>)
            )
            /* <button data-testid="correct-answer">{questions[index].correct_answer}</button>
            {questions[index].incorrect_answers.map((answer, i) => <button data-testid={`wrong-answer-${i}`}>{answer}</button>)} */}
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
