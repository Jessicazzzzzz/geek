import React, { Suspense } from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AppBar from './components/AppBar'
import classNames from 'classnames'

import '@scss/index.scss'

const Login = React.lazy(() => import('@/pages/Login'))
const Layout = React.lazy(() => import('@/pages/Layout'))
const  Home = React.lazy(()=>import('../src/pages/Home'))
const QA = React.lazy(()=>import('../src/pages/QA'))
const  Video= React.lazy(()=>import('../src/pages/Video'))
const  Profile= React.lazy(()=>import('../src/pages/Profile'))

export default function App() {
  return (
    
    
      <Router >
        <div className="app">
          {/* <Link to={'/login'}>登录</Link>
      <Link to={'/home'}>首页</Link> */}
      <AppBar className='tabbar'/>
        </div>

        <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home/>} ></Route>
          
          <Route path="/home" element={<Home/>}></Route>
          <Route path='/home/qa' element={<QA/>}></Route>
          <Route path='/home/video' element={<Video/>}></Route>
          <Route path='/home/profile' element={<Profile/>}></Route>
        </Routes>
        </Suspense>
      </Router>
  
   
  )
}
