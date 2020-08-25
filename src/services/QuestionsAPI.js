import fetchToken from './TokenAPI';
import randomAnswers from './randomArray';
import decodeEntities from './DecodeEntities';

const QUESTIONS_URL = 'https://opentdb.com/api.php?amount=5&token=';

function answers(questions) {
  const allQuestionsRandomized = questions.map((question) => {
    const { correct_answer, incorrect_answers } = question;
    const correct = {
      answer: decodeEntities(correct_answer),
      'data-testid': 'correct-answer',
      style: {
        border: '3px solid rgb(6, 240, 15)',
      },
    };
    const incorrect = incorrect_answers.map((answer, i) => ({
      answer: decodeEntities(answer),
      'data-testid': `wrong-answer-${i}`,
      style: {
        border: '3px solid rgb(255, 0, 0)',
      },
    }));

    const allAnswers = [...incorrect, correct];

    return {
      question: decodeEntities(question.question),
      category: question.category,
      answer: randomAnswers(allAnswers),
      difficulty: question.difficulty,
      type: question.type,
    };
  });
  return allQuestionsRandomized;
}

function fetchQuestions() {
  return fetchToken().then((token) =>
    fetch(QUESTIONS_URL + token)
      .then((response) => response.json())
      .then((data) => answers(data.results)),
  );
}

export default fetchQuestions;
