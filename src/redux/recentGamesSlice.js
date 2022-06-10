import { createSlice } from "@reduxjs/toolkit";

const recentGamesSlice = createSlice({
    name:"recentGames",
    initialState:{
        games:[],
    },
    reducers:{
        addFinishedGame:(state,action)=>{
            state.games.push(action.payload)
        }
    }
})

export const {addFinishedGame} = recentGamesSlice.actions
export default recentGamesSlice.reducer