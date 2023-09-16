import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
export default function Input({ extra, onExtraClick,className,autoFocus ,...rest }) {
  const inputRef = useRef(null)
  
 useEffect(()=>{

   if(autoFocus){
    
    setTimeout(()=>{
      inputRef.current?.focus()
    },1000)
  
   }
  
 },[autoFocus])
 
  return (
    <div className={styles.root}>
      <input
        type="text"
        className={classNames('input',className)}
        {...rest}
        ref={inputRef}
      ></input>
      {!!extra && (
        <div className="extra" extra={extra} onClick={onExtraClick}>
          {extra}
        </div>
      )}
    </div>
  )
}
