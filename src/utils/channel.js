import MyRequest from "./request";


export function getUserChannels(){
  return MyRequest.get({
    url:"/user/channels"
  })
}