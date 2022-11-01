import { addFinishedGame } from "../redux/recentGamesSlice"
import store from "../redux/store"
import { decreaseTime, replay, setText, space } from "../redux/wordsSlice"

export const handleSpace = () => {
  store.dispatch(space())
}

export const handleText = (text) => {
  store.dispatch(setText(text))
}

export const reduceTime = () => {
  store.dispatch(decreaseTime())
}

export const handleReplay = () => {
  store.dispatch(replay())
}

export const saveResult = (totalCorrectWords) => {
  store.dispatch(addFinishedGame({point:totalCorrectWords}))
}