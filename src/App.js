import React, { Suspense } from 'react'
import ProtectedRoute from '@/components/AuthRoute'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import history from '@/utils/history'
import '@scss/index.scss'
import Layout from './pages/Layout'

const Login = React.lazy(() => import('@/pages/Login'))
const Home = React.lazy(() => import('../src/pages/Home'))
const QA = React.lazy(() => import('../src/pages/QA'))
const Video = React.lazy(() => import('../src/pages/Video'))
const Profile = React.lazy(() => import('../src/pages/Profile'))
const Editor = React.lazy(() => import('../src/pages/Profile/Edit'))
const Chat = React.lazy(()=>import('@/pages/Profile/Chat'))
const NotFound = React.lazy(()=>import('@/pages/NotFound'))

export default function App() {
  return (
    <Router history={history}>
      <div className="app"></div>

      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/chat" element={<ProtectedRoute><Chat/></ProtectedRoute>}></Route>
          <Route path="/home" element={<Layout/>}>

            <Route path="qa" element={<QA />}></Route>
            <Route path="index" element={<Home/>}></Route>
            <Route path="video" element={<Video />}></Route>
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
          </Route>
          <Route path="/home/profile/editor" element={<ProtectedRoute><Editor /></ProtectedRoute>} />
            <Route path='/*' element={<NotFound/>}></Route>
        </Routes>
      </Suspense>
    </Router>
  )
}
