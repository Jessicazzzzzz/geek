const TOKEN_KEY = 'geek'
const CHANNEL_KEY = 'geek-channels'
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

// save  channels to localStorage
export  const setLocalChannels=(channels)=>{
  localStorage.setItem(CHANNEL_KEY,JSON.stringify(channels))
}

export const getLocalChannels=()=>{
  return JSON.parse(localStorage.getItem(CHANNEL_KEY)) 
}
export const removeLocalChannes=()=>{
  localStorage.removeItem(CHANNEL_KEY)
}