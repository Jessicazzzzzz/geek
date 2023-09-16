import React, { useState, useEffect, useRef } from 'react'
import styles from './index.module.scss'
import NavBar from '@/components/NavBar'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/Icon'
import Input from '@/components/input'
import { useSelector, shallowEqual,useDispatch } from 'react-redux'
import { io } from 'socket.io-client'
import { getTokenInfo } from '@/utils/storage'
import { getProfileData, getUserData } from '@/store/profile'

export default function Chat() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const profileInfo = useSelector((state) => state.user.getUserInfo)
  const clientRef = useRef('')
  const dispatch  = useDispatch()
  const [messageList, setmessageList] = useState([
    { type: 'robot', text: 'hi there,how can i help you' },
    { type: 'user', text: 'hi' },
  ])
  const listRef= useRef(null)
  // console.log(profileInfo);
  // connect to io
  useEffect(() => {
    // get user info ,otherwise they are {},can not render img after refresh
  dispatch(getUserData())
    clientRef.current = io('http://geek.itheima.net/', {
      query: {
        token: getTokenInfo().token,
      },
      transports: ['websocket'],
    })
    clientRef.current.on('connect', () => {
      console.log('连接成功')
      setmessageList((messageList) => {
        return [...messageList, { type: 'robot', text: 'hi,i am here' }]
      })
    })
    // receive from server
    clientRef.current.on('message', (e) => {
      console.log(e)
      setmessageList((messageList) => {
        return [...messageList, { type: 'robot', text: e.msg }]
      })
    })
    return () => {
      clientRef.current.close()
    }
  }, [dispatch])

  useEffect(()=>{
   // when messageList change
 listRef.current.scrollTop = listRef.current.scrollHeight-listRef.current.offsetHeight
  },[messageList])



  const handleKeyUp = (e) => {
    // console.log(e.key);
    if (e.key !== 'Enter') return
    if (!message) return
    // send message to server
    setmessageList([...messageList, { type: 'user', text: message }])
    //clear input message
    setMessage('')
    clientRef.current.emit('message', {
      msg: message,
      timestamp: Date.now(),
    })
  }
  return (
    <div className={styles.root}>
      <NavBar className="fixed-header">小智同学</NavBar>

      <div className="chat-list" ref = {listRef}>
        {messageList.map((item, index) => {
          return item.type === 'robot' ? (
            <div className="chat-item" key={index}>
              <Icon type={'icon-jiqirentoubu'} />
              <div className="message">{item.text}</div>
            </div>
          ) : (
            <div className="chat-item user" key={index}>
              <img src={profileInfo?.photo} alt=""></img>
              <div className="message">{item.text}</div>
            </div>
          )
        })}
      </div>

      <div className="input-footer">
        <Input
          className="no-border"
          placeholder="请描述您的问题"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <Icon type="icon-xiaoxi_48" />
      </div>
    </div>
  )
}
