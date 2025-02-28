import React from 'react'

function InputData({setText}) {
  return (
    <textarea name="" id="" onChange={(e) => setText(e.target.value)} ></textarea>
  )
}

export default InputData