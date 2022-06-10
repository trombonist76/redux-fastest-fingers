import { useSelector } from "react-redux";
import {wordsSelector } from "../redux/wordsSlice";
import Word from "./Word";

export default function TextArea() {
  const wordList = useSelector((state) => wordsSelector(state))
 
  return (
    <div className="textarea">
      <div className="inner">
      {wordList.map((word, index) => (
        <Word word={word} index={index} key={index}/>
      ))}
      </div>
    </div>
  );
}
