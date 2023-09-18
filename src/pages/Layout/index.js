import React from 'react'
import Icon from '@/components/Icon'
import styles from './index.module.scss'
import { Outlet, useLocation} from 'react-router-dom'
import classNames from 'classnames'
// import Home from '../Home'
import AppBar from '@/components/AppBar'

// import QA from '../QA'
// import Video from '../Video'
// import Profile from '../Profile'


// const tabBar = [
//   { title: '首页', icon: 'icon-zhuye', path: '/home' },
//   { title: '问答', icon: 'icon-bangzhu', path: '/home/qa' },
//   { title: '视频', icon: 'icon-shipin_24', path: '/home/video' },
//   { title: '我的', icon: 'icon-user', path: '/home/profile' },
// ]

function Layout() {

 
  const loc = useLocation()
 
  return (
    <div className={styles.root}>
     
      <div className="tab-content">
       <Outlet/>
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

export default Layout