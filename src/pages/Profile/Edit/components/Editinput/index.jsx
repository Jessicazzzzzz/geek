import React, { useState } from 'react'
import styles from './index.module.scss'
import NavBar from '@/components/NavBar'
import Textarea from '@/components/Textarea'
import Input from '@/components/input'
import { useSelector, shallowEqual } from 'react-redux'
export default function EditorInput(props) {
  const { onClose, type,onCommit } = props
  // console.log(onClose);
  // console.log("type",type);
  const { profileInfo } = useSelector(
    (state) => ({ profileInfo: state.user.getProfileInfo }),
    shallowEqual
  )

  const [value, setValue] = useState(type==='name'?profileInfo.name:(profileInfo.intro || ''))

  return (
    <div className={styles.root}>
      <NavBar
        extra={<span className="commit-btn" onClick={()=>onCommit(type,value)}>submit</span>}
        onLeftClick={() => onClose()}
      >
        {' '}
        edit {type === 'name' ? 'nickname' : 'intro'}
      </NavBar>
      <div className="content">
        <h3>{type === 'name' ? 'nickname' : 'intro'}</h3>
        {type === 'name' ? (
          <Input className={'input-wrap'} value={value} 
           autoFocus
           onChange={(e)=>{setValue(e.target.value)}}></Input>
        ) : (
          <Textarea
            maxLength={200}
            placeholder="please introduce yourself"
            value={value} onChange={(e)=>{setValue(e.target.value)}}
          ></Textarea>
        )}
      </div>
    </div>
  )
}
