import React from 'react'
import './Button.sass'
import { useDispatch } from 'react-redux'
import { setInputValue } from '../../redux/nameProfileSlice';

export default function Button(props) {
  const dispatch = useDispatch();
  
  console.log('props:', props.value)
  return (
    <button className="btn" onClick={() => dispatch(setInputValue(props.value))}>ИСКАТЬ</button>
  )
}
