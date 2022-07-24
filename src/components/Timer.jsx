import { useEffect} from "react";
import { useSelector } from "react-redux";
import {BiTimer} from "react-icons/bi"
import { correctWordsSelector, isStartSelector, timeSelector } from "../redux/wordsSlice";
import { reduceTime, saveResult } from "../utils/actions";


export default function Timer() {
  const time = useSelector((state) => timeSelector(state))
  const isStart = useSelector(state=>isStartSelector(state))
  const correctWords = useSelector((state) => correctWordsSelector(state))
  const startingCondition = isStart && time > 0

  useEffect(() => {
    let interval

    if (startingCondition) {
      interval = setInterval(() => {
        reduceTime()
      }, 1000)

    }else{
        saveResult(correctWords.length)
    }
    return () => {
      clearInterval(interval);
    }

  }, [time, correctWords, startingCondition]);

  return (
      <div className="timer">
      <BiTimer/>
       {time}
      </div>
  );
}