import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { correctWordsSelector, currentIxSelector, textInputSelector, wrongWordsSelector } from '../redux/wordsSlice'
import classNames from 'classnames'

export default function Word(props) {
  const wrongWords = useSelector(state=>wrongWordsSelector(state))
  const correctWords = useSelector(state=>correctWordsSelector(state))
  const currentIndex = useSelector(state=>currentIxSelector(state))
  const textInput = useSelector(state=>textInputSelector(state))
  
  const startsWith = props.word.targetWord.startsWith(textInput.trim())
  const isInWrongWords = wrongWords.includes(props.word.rank)
  const isInCorrectWords = correctWords.includes(props.word.rank)
  const isCurrent = currentIndex === props.index

  const currentWord = useRef()

  useEffect(()=>{
    if(isCurrent){
      currentWord.current.scrollIntoView()
    }
  },[currentIndex, isCurrent])

  return (
        <span
          ref={currentWord}
          className={classNames("word",{
            current: isCurrent,
            highlightWrong: currentIndex === props.index && (!startsWith),
            wrong: isInWrongWords,
            correct: isInCorrectWords,
          })}
          
        >
        {props.word.targetWord}
      </span>
  )
}
