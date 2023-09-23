import MyRequest from "./request";


export function getUserChannels(){
  return MyRequest.get({
    url:"/user/channels"
  })
}
export function getAllChannels(){
  return MyRequest.get({
    url:"/channels"
  })
}

export function delChannel(id){
  return MyRequest.delete({
    url:"user/channels/"+id
  })

}


export function addChannel(data){
  return MyRequest.patch({
    url:"user/channels",
    data


  })

}