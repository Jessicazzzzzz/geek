import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import Input from '@/components/input'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import classNames from 'classnames';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchData,fetchAuthData} from '../../store/login/index'
import {  Toast } from 'antd-mobile'
import { useState,useEffect } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import { createBrowserHistory } from "history";
// ...
// import {getLoginAuth} from '../../utils/login'
export default function Login(props) {

  const navigate = useNavigate()
  const location = useLocation()
  let history = createBrowserHistory()
  const [time,setTime]=useState(0)
  const { getCodeInfo,getAuthInfo} = useSelector((state)=>({getCodeInfo:state.login.getCodeInfo,getAuthInfo:state.login.getAuthInfo}),shallowEqual)


  const dispatch = useDispatch()
  
  const onExtraClick =async () => {
    if(time>0) return
    if(!/^1[3-9]\d{9}/.test(mobile)){
      formik.setTouched({
        mobile:true
      })
      return
    }
    
    
   await dispatch(fetchData(mobile))
   
    
    if(getCodeInfo?.data?.message){
      console.log('123');
      Toast.show({
        icon: 'success',
        content: 'get code succeed',
       })
       setTime(5)
       // make sure get correct time
       let timeId=  setInterval(()=>{
          setTime(time=>{
            if(time===1){
              clearInterval(timeId)
             }

    return time-1
          })
            
        },1000)

     }else if(Object.keys(getCodeInfo).length!==0){
      
     
      Toast.show({
        content: `${getCodeInfo}`,
       maskClickable: false,
       })
     }else if(Object.keys(getCodeInfo).length===0){
      
     
      Toast.show({
        content: `serve busy try it later`,
       maskClickable: false,
       })
     }
   
   
    
   
  }

  const formik = useFormik({
    initialValues: {
      mobile: '14566787899',
      code: '246810',
    },
    validationSchema:Yup.object({
    mobile:Yup.string().required("phone number is not allowed empty").matches(/^1[3-9]\d{9}$/,'format is wrong'),
    code:Yup.string().required('code must have').matches(/^\d{6}/,'wrong code')
    }),
   async onSubmit(values){
    //  await dispatch(getLoginAuth(values))
     await dispatch(fetchAuthData(values))
     console.log("getLoginAuthInfo",getAuthInfo);
      Toast.show({
            content: `登录成功`,
           maskClickable: false,
           })

      // navigate to home 
      
      history.back()
     
      //  navigate('/home')
    },
    
  })

  const {
    values: { mobile, code },
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    errors,
    isValid
    
  } = formik
 const handlelftClick=()=>{
  navigate('/home')
 }
  return (
    <div className={styles.root}>
      <NavBar onLeftClick={handlelftClick}>首页</NavBar>
      {/* login form  */}
      <div className="content">
        <h3>短信登录</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-item">
            <Input
              placeholder="please input your username"
              type="mobile"
              name="mobile"
              autoComplete="off"
             onBlur={handleBlur}
             
              onChange={handleChange}
              value={mobile}
            />
           { touched.mobile&&errors.mobile ? (
              <div className="validate">{errors.mobile}</div>
            ) : null}
          </div>
          <div className="input-item">
            <Input
              placeholder="please input your code"
              extra={time===0?'get code':time+'s later get'}
              name="code"
              autoComplete="off"
              value={code}
              onBlur={handleBlur}
              onChange={handleChange}
              onExtraClick={onExtraClick}
            />
            {touched.code&&errors.code ? (
              <div className="validate">{errors.code}</div>
            ) : null}
          </div>

          <button type="submit" className={classNames("login-btn",{disabled:!isValid})} disabled={!isValid}>
            登录
          </button>
        </form>
      </div>
    </div>
  )
}
