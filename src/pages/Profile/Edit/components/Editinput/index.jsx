import React from 'react'
import styles from './index.module.scss'
import NavBar from '@/components/NavBar'
export default function EditorInput(props) {
  const {onClose} = props
  console.log(onClose);
  return (
    <div className={styles.root}>
     <NavBar extra={<span className='commit-btn'>submit</span>} onLeftClick={onClose}> edit info</NavBar>
     <div className="content">
     <h3>intro</h3>
     </div>
      
    </div>
  )
}
