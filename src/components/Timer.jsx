import { useEffect} from "react";
import { useSelector } from "react-redux";
import { correctWordsSelector, isStartSelector, timeSelector } from "../redux/wordsSlice";  
import { BiTimer } from "react-icons/bi"
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

  }, [startingCondition, correctWords.length]);

  return (
      <div className="navbar__timer">
      <BiTimer/>
       {time}
      </div>
  );
}