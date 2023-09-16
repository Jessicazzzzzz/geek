import React, { useState,useRef,useEffect } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'


export default function Textarea({ maxLength, className, ...rest }) {
 
  const [value, setValue] = useState(rest?.value)
  const onChange=(e)=>{
setValue(e.target.value)

  rest.onChange?.(e)


  }

  const textRef = useRef(null)
  useEffect(()=>{
    // input focus is async 
    setTimeout(()=>{
      textRef.current.focus()
      textRef.current.setSelectionRange(-1,-1)
    },1000)
   
  },[])
  
  return (
    <div className={styles.root}>
      <textarea
        className={classNames('textarea', className)}
        maxLength={maxLength}
        {...rest}
        value={value}
        onChange={onChange}
        ref={textRef}
      ></textarea>
      <div className="count">
        {value?.length?value.length:'0'}/{maxLength}
      </div>
    </div>
  )
}
