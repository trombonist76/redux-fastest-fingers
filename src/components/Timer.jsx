import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {BiTimer} from "react-icons/bi"
import { addFinishedGame } from "../redux/recentGamesSlice";
import { correctWordsSelector, decreaseTime, isStartSelector, timeSelector } from "../redux/wordsSlice";


export default function Timer() {
  const time = useSelector((state) => timeSelector(state))
  const isStart = useSelector(state=>isStartSelector(state))
  const correctWords = useSelector((state) => correctWordsSelector(state))
  const dispatch = useDispatch();

  useEffect(() => {
    let interval
    const startingCondition = isStart && time > 0

    if (startingCondition) {
      interval = setInterval(() => {
        if(time > 0){
          dispatch(decreaseTime())
        }
      }, 1000)

    }else{
        dispatch(addFinishedGame({point:correctWords.length}))
    }
    return () => {
      clearInterval(interval);
    }

  }, [time, dispatch, correctWords, isStart]);

  return (
      <div className="timer">
      <BiTimer/>
       {time}
      </div>
  );
}