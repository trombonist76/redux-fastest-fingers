import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { textInputSelector, timeSelector } from '../redux/wordsSlice'
import { handleSpace, handleText } from '../utils/actions'

export default function Input() {
  const textInput = useSelector(state=>textInputSelector(state))
  const time = useSelector(state=>timeSelector(state))
  const isDisabled = time < 1
  const [text, setText] = useState("")

  const handleKeyDown = (e) => {
    if (e.keyCode === 32 && textInput) {
      handleSpace()
    }
  }

  const handleChange = (e) => {
    setText(e.target.value.trim())
  }

  //debounce
  useEffect(() => {
    const to = setTimeout(() => {
      handleText(text)
    }, 10)

    return () => {
      clearTimeout(to)
    }

  },[text])

  return (
    <label className='type'>
      <input className='type__input' type="text" placeholder="Type for start" value={textInput} onChange={handleChange} onKeyDown={handleKeyDown} disabled={isDisabled} />
      <span className='type__placeholder'>Show them how fast you write!</span>
    </label>
  )
}
