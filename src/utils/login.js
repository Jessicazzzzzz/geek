import MyRequest from "./request";

export function getCodeData(mobile){
  return MyRequest.get({
    url:"/sms/codes/"+mobile
  })
}
/**
 * login in 
 * @param {*} data 
 * @returns 
 */
// export const getLoginAuth =(data)=>{
//   return async (dispatch)=>{
//   const resauth= await  MyRequest.post({
//       url:"/authorizations",
//       data
//     })
//     console.log("resauth",resauth);
//   }
  
// }
export function getLoginAuth(data){
  return  MyRequest.post({
      url:"/authorizations",
      data
    })
    
  
  
  }
