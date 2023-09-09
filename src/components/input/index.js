import React from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
export default function Input({ extra, onExtraClick,className, ...rest }) {
 
 
  return (
    <div className={styles.root}>
      <input
        type="text"
        className={classNames('input',className)}
        {...rest}
      
      ></input>
      {!!extra && (
        <div className="extra" extra={extra} onClick={onExtraClick}>
          {extra}
        </div>
      )}
    </div>
  )
}
