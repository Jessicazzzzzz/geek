import MyRequest from "./request";

export function getCodeData(mobile){
  return MyRequest.get({
    url:"/sms/codes/"+mobile
  })
}