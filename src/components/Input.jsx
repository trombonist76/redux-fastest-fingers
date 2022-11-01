import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { textInputSelector, timeSelector } from '../redux/wordsSlice'
import { handleSpace, handleText } from '../utils/actions'

export default function Input() {
  const textInput = useSelector(state=>textInputSelector(state))
  const time = useSelector(state=>timeSelector(state))
  const isDisabled = time < 1

  const handleKeyDown = (e) => {
    if (e.keyCode === 32 && textInput) {
      handleSpace()
    }
  }

  const handleChange = (e) => {
    handleText(e.target.value.trim())
  }

  return (
    <label>
      <input type="text" placeholder="Type for start" value={textInput} onChange={handleChange} onKeyDown={handleKeyDown} disabled={isDisabled} />
      <span>Show them how fast you write!</span>
    </label>
  )
}
