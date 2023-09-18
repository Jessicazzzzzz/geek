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

export function updateProfile(data){
  return MyRequest.patch({
    url:"/user/profile",
    data
  })
}
export function updatePhoto(data){
  return MyRequest.patch({
    url:"/user/photo",
    // headers:{'Content-Type': 'multipart/form-data'},
    data
  })
}
export function getUserChannels(){
  return MyRequest.get({
    url:"/user/channels"
  })
}