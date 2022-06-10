import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSpace, handleType, setInputValue, textInputSelector, timeSelector } from '../redux/wordsSlice'

export default function Input() {
  const textInput = useSelector(state=>textInputSelector(state))
  const time = useSelector(state=>timeSelector(state))
  const dispatch = useDispatch()

  const handleKeyDown = (e) => {
    if (e.keyCode === 32 && textInput.trim()) {
      dispatch(handleSpace())
    }else{
      dispatch(handleType())
    }
  }

  const handleChange = (e) => {
    dispatch(setInputValue(e.target.value))
  }

  return (
    <label>
      <input type="text" placeholder="Type for start" value={textInput||""} onChange={handleChange} onKeyDown={handleKeyDown} disabled={time<1} />
      <span>Show them how fast you write!</span>
    </label>
  )
}
