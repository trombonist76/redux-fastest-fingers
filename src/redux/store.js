import { configureStore } from "@reduxjs/toolkit"
import recentGamesSlice from "./recentGamesSlice"
import wordsSlice from "./wordsSlice"

const store = configureStore({
  reducer:{
    words:wordsSlice,
    recent:recentGamesSlice
  }
})

export default store