import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import { Toast } from 'antd-mobile'
import { getTokenInfo, setTokenInfo } from './storage'
import history from './history'
import store from '@/store'
import { getRefreshTokenAction,logoutData} from '@/store/login'
class Request {
  constructor(baseURL, timeout) {
    // 如果传入url ,自动加在baseURL后面
    this.instance = axios.create({
      baseURL,
      timeout,
    })
    this.instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      // before request what you can prepared 
      const token = getTokenInfo()?.token
      if(token){
        config.headers.Authorization='Bearer '+token
      }
      return config;
    }, function (error) {
      // 对请求错误做些什么
      // what you can do for wrong request 
      return Promise.reject(error);
    });

    // 响应拦截
    this.instance.interceptors.response.use(
      (res) => {
           
        return res.data
      },
     async (err) => {
        //401
        // console.log("axio" ,err);
        //  console.log(history)
        if(!err.response){
          Toast.show({
            content: `network busy ,try it later`,
           maskClickable: false,
           })
           return Promise.reject(err)
        }
        // console.log(err.response)
        if(err.response?.status!==401){
          Toast.show({
            content: `${err.response?.data.message}`,
           maskClickable: false,
           })
          
           return Promise.reject(err)
        }
          //401 token  失效
        const  {token,refresh_token} = getTokenInfo()
        if(!token || !refresh_token){
          history.push({
            pathname:'/login',
            state:{
              from:history.location.pathname
            }
          })
          return Promise.reject(err)
        }
        // request put ,refresh token 
       try {
        const res= await axios({
          method:'put',
          url:BASE_URL+'/authorizations',
          headers:{
           Authorization:'Bearer '+refresh_token
          }

        })
        const tokenInfo={
          token:res.data.data.token,
          refresh_token:refresh_token
        }
      // console.log(res);
      // console.log(tokenInfo);
      //save token to localstorage
      setTokenInfo(tokenInfo)
      //save to redux
      store.dispatch( getRefreshTokenAction(tokenInfo))
      //request again
     return  this.instance.request({...err.config,method:'get'})

       } catch (err) {
        //refresh token is expired
        store.dispatch(logoutData())
        history.push({
          pathname:'/login',
          state:{
            from:history.location.pathname
          }
        })
        return Promise.reject(err)
       }
          
       
      

        // return err
      }
    )
  }

  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
  patch(config) {
    return this.request({ ...config, method: 'patch' })
  }
}
const MyRequest = new Request(BASE_URL, TIMEOUT)
export default MyRequest
