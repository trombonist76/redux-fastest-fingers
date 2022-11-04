import { createSlice } from "@reduxjs/toolkit"
import { getInitialState } from "../utils"

const wordsSlice = createSlice({
  name: "words",
  initialState: getInitialState(),
  reducers: {

    space: (state) => {
      const word = state.wordList[state.currentIndex]
      const isEqual = state.textInput === word.targetWord
      if (isEqual) {
        state.correctWords.push(word.rank)
      }
      else {
        const wrongChars = state.textInput.split("").filter((char, index) => (char !== word.targetWord[index]))
        state.wrongChars += wrongChars.length
        state.wrongWords.push(word.rank)
      }
      state.currentIndex++
      state.textInput = ""
    },

    decreaseTime: (state) => {
      state.time -= 1
    },

    replay: () => ({
      ...getInitialState(),
    }),

    setText: (state, action) => {
      if (!state.isStart) {
        state.isStart = true
      }

      state.keyPress++
      state.textInput = action.payload.trim()
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

export const { decreaseTime, replay, setText, space } = wordsSlice.actions
export default wordsSlice.reducer