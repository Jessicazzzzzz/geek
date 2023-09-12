import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import { Toast } from 'antd-mobile'
import { getTokenInfo } from './storage'
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
      const token = getTokenInfo().token
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
      (err) => {
        //401
        console.log("axio" ,err);
        if(err.response?.data){
          Toast.show({
            content: `log in failed`,
           maskClickable: false,
           })
        }

        return err
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
}
const MyRequest = new Request(BASE_URL, TIMEOUT)
export default MyRequest
