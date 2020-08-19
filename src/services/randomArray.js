// ref: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export default function randomAnswers(answersArray) {
  const array = [...answersArray];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = array[i];
    array[i] = array[j];
    array[j] = a;
  }
  return array;
}
