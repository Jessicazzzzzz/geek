import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import { Toast } from 'antd-mobile'
class Request {
  constructor(baseURL, timeout) {
    // 如果传入url ,自动加在baseURL后面
    this.instance = axios.create({
      baseURL,
      timeout,
    })

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
