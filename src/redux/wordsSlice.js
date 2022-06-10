import { createSlice } from "@reduxjs/toolkit"
import wordList from "../words.json"
import shuffle from "../shuffle"

const wordsSlice = createSlice({
  name: "words",
  initialState: {
    wordList: wordList.words,
    currentIndex: 0,
    textInput: "",
    isStart: false,
    time: 60,
    keyPress: 0,
    wrongWords: [],
    correctWords: [],
    wrongChars: 0
  },
  reducers: {

    handleSpace: (state) => {
      const word = state.wordList[state.currentIndex]
      const isEqual = state.textInput.trim() === word.targetWord
      if (isEqual) {
        state.correctWords.push(word.rank)
      }
      else {
        const wrongChars = state.textInput.trim().split("").filter((char, index) => (char !== word.targetWord[index]))
        state.wrongChars += wrongChars.length
        state.wrongWords.push(word.rank)
      }
      state.currentIndex++

      state.textInput = ""
    },

    handleType: (state) => {
      if (!state.isStart) {
        state.isStart = true
      }
      state.keyPress++
    },

    decreaseTime: (state) => {
      state.time -= 1
    },

    replay: (state) => {
      state.currentIndex = 0
      state.textInput = ""
      state.isStart = false
      state.time = 60
      state.keyPress = 0
      state.wrongWords = []
      state.correctWords = []
      state.wrongChars = 0
      state.wordList = shuffle(state.wordList)
    },

    setInputValue: (state, action) => {
      state.textInput = action.payload
    }
  }

})


export const wrongWordsSelector = state => state.words.wrongWords
export const correctWordsSelector = state => state.words.correctWords
export const textInputSelector = state => state.words.textInput
export const currentIxSelector = state => state.words.currentIndex
export const wordsSelector = state => state.words.wordList
export const timeSelector = state => state.words.time
export const isStartSelector = state => state.words.isStart
export const keyPressSelector = state => state.words.keyPress
export const wrongCharsSelector = state => state.words.wrongChars

export const { decreaseTime, replay, setInputValue, handleSpace, handleType } = wordsSlice.actions
export default wordsSlice.reducer