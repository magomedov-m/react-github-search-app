import React, { useState } from 'react'
import './Input.sass'
import Button from '../Button/Button'

export default function Input() {
  const [value, setValue] = useState('')
  console.log('value:', value);
  return (
    <>
    <input placeholder='Введите поисковой запрос' className='input' onChange={(e) => {setValue(e.target.value)}} />
    <Button value={value} />
    </>
  )
}
