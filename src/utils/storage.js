const TOKEN_KEY = 'geek'
export const getTokenInfo=()=>{
 return JSON.parse(localStorage.getItem(TOKEN_KEY)) ||{}
}

export const setTokenInfo=(tokenInfo)=>{
 localStorage.setItem(TOKEN_KEY,JSON.stringify(tokenInfo))
 
 }
export const removeTkoneInfo=()=>{
  localStorage.removeItem(TOKEN_KEY)
}

export const hasToken=()=>{
  return !!getTokenInfo().token
}
