import TextArea from './components/TextArea';
import Navbar from "./components/Navbar.jsx"
import Input from './components/Input';
import Result from './components/Result';
import { useSelector } from "react-redux";
import { correctWordsSelector, timeSelector } from "./redux/wordsSlice";  
import { saveResult } from "./utils/actions";
import { useEffect } from 'react';

function App() {
  const time = useSelector((state) => timeSelector(state))
  const correctWords = useSelector((state) => correctWordsSelector(state))

  useEffect(() => {
    if(time > 0) return

    saveResult(correctWords.length)
  }, [time, correctWords.length])
  return (
    <div className="App">
      <Navbar/>
      <TextArea/>
      <Input/>
      <Result/>
    </div>
  );
}

export default App;
