import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './index.scss'
import { SET_PRINT_PAGE } from '@src/redux/types/index.js'

export default function SizeA4({ children }) {
  const printA4 = useRef(null)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: SET_PRINT_PAGE, payload: printA4.current })
    return () => {}
  }, [dispatch])
  return (
    <div ref={printA4} className='page'>
      {children}
    </div>
  )
}
