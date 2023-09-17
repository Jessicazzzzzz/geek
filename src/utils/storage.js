const TOKEN_KEY = 'geek'
export const getTokenInfo=()=>{
  if(localStorage.getItem(TOKEN_KEY)=== 'undefined')   return {}
 return JSON.parse(localStorage.getItem(TOKEN_KEY)) ||{}
}

export const setTokenInfo=(tokenInfo)=>{
 localStorage.setItem(TOKEN_KEY,JSON.stringify(tokenInfo))
 
 }
export const removeTokenInfo=()=>{
  localStorage.removeItem(TOKEN_KEY)
}

export const hasToken=()=>{
  return !!getTokenInfo().token &&  !!getTokenInfo().refresh_token 
}
