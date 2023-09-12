import React, { Suspense } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import '@scss/index.scss'
import Layout from './pages/Layout'

const Login = React.lazy(() => import('@/pages/Login'))
const Home = React.lazy(() => import('../src/pages/Home'))
const QA = React.lazy(() => import('../src/pages/QA'))
const Video = React.lazy(() => import('../src/pages/Video'))
const Profile = React.lazy(() => import('../src/pages/Profile'))
const Editor = React.lazy(() => import('../src/pages/Profile/Edit'))

export default function App() {
  return (
    <Router>
      <div className="app">
       
      </div>

      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/home" element={<Layout/>}>
          <Route path="qa" element={<QA />}></Route>
          <Route path="video" element={<Video />}></Route>
          <Route path="profile" element={<Profile />}>
          </Route>
          
          </Route>
          <Route path='/home/profile/editor' element={<Editor/>} />
         
        </Routes>
      </Suspense>
    </Router>
  )
}
