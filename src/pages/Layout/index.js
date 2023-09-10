import React from 'react'
import Icon from '@/components/Icon'
import styles from './index.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
// import Home from '../Home'
import AppBar from '@/components/AppBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import QA from '../QA'
// import Video from '../Video'
// import Profile from '../Profile'


// const tabBar = [
//   { title: '首页', icon: 'icon-zhuye', path: '/home' },
//   { title: '问答', icon: 'icon-bangzhu', path: '/home/qa' },
//   { title: '视频', icon: 'icon-shipin_24', path: '/home/video' },
//   { title: '我的', icon: 'icon-user', path: '/home/profile' },
// ]

export default function Layout() {
  const nav = useNavigate()
 
  const loc = useLocation()
  console.log(loc)
  return (
    <div className={styles.root}>
      我是layout
      <div className="tab-content">
       
      </div>
      {/* <div className="tabbar">
        {tabBar.map((item) => (
          <div
            className={classNames(
              'tabbar-item',
              loc.pathname === item.path ? 'tabbar-item-active' : ' '
            )}
            key={item.title}
            onClick={() => {
              // nav(item.path)
            }}
          >
            <Icon type={loc.pathname === item.path ?item.icon+"-copy":item.icon}></Icon>
            <span>{item.title}</span>
          </div>
        ))}
      </div> */}
      <AppBar className='tabbar'/>
    </div>
  )
}
