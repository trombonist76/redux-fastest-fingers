import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { correctWordsSelector, currentIxSelector, textInputSelector, wrongWordsSelector } from '../redux/wordsSlice'
import classNames from 'classnames'


export default function Word({word,index}) {
  const wrongWords = useSelector(state=>wrongWordsSelector(state))
  const correctWords = useSelector(state=>correctWordsSelector(state))
  const currentIndex = useSelector(state=>currentIxSelector(state))
  const textInput = useSelector(state=>textInputSelector(state))
  
  const startsWith = word.targetWord.startsWith(textInput.trim())
  const isInWrongWords = wrongWords.includes(word.rank)
  const isInCorrectWords = correctWords.includes(word.rank)
  const isCurrent = currentIndex === index

  const currentWord = useRef()

  useEffect(()=>{
    if(isCurrent){
      currentWord.current.scrollIntoView()
    }
  },[currentIndex, isCurrent])

  return (
        <span
          ref={currentWord}
          className={classNames({
            current: isCurrent,
            highlightWrong: currentIndex === index && (!startsWith),
            wrong: isInWrongWords,
            correct: isInCorrectWords,
          })}
          
        >
        {word.targetWord}
      </span>
  )
}
