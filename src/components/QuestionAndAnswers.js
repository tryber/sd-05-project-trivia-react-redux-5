import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import randomAnswers from '../services/randomArray';


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

    const answers = [...incorrect, correct];

    return randomAnswers(answers);
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
            (<button key={Math.random() * 100} data-testid={answer['data-testid']}>{answer.answer}</button>),
            )
            }
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
