import React, { Suspense } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Login = React.lazy(() => import('@/pages/Login'))
const Home = React.lazy(() => import('@/pages/Home'))

export default function App() {
  return (
    
    
      <Router >
        <div className="app" >
          {/* <Link to={'/login'}>登录</Link>
      <Link to={'/home'}>首页</Link> */}
        </div>
        <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
        </Suspense>
      </Router>
  
   
  )
}
