import MyRequest from './request'
/**
 * 
 * @returns user personal info 
 */
export function getUser(){
  return MyRequest.get({
    url:"/user"
  })
}
export function getProfile(){
  return MyRequest.get({
    url:"/user/profile"
  })
}