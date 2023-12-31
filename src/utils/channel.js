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

export function getArticles(params){
  return MyRequest.get({
    url:"/articles",
    params


  })

}
export function dislikeArticles(data){
  return MyRequest.post({
    url:"/article/dislikes",
    data


  })

}