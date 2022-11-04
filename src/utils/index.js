import wordList from "../assets/words.json"

export function shuffle(array) {
  const sortedArray = [...array.sort(() => Math.random() - 0.5)]

  return sortedArray;
}

export const getInitialState = () => ({
  wordList: shuffle(wordList.words),
  currentIndex: 0,
  textInput: "",
  isStart: false,
  time: 5,
  keyPress: 0,
  wrongWords: [],
  correctWords: [],
  wrongChars: 0
})