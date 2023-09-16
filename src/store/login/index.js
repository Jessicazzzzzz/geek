import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {getCodeData,getLoginAuth, logout} from '../../utils/login'
import {setTokenInfo,getTokenInfo, removeTokenInfo} from '../../utils/storage'
export const fetchData = createAsyncThunk("fetchData", (payload,{dispatch})=>{
   getCodeData(payload).then(res=>{
        dispatch(getMobileDataAction(res))
   }).catch(err=>{
    dispatch(getMobileDataAction(err.response.data.message))

   })
  

  
})
export const fetchAuthData = createAsyncThunk("fetchAuthData",async  (payload,{dispatch})=>{
 

const res =   await getLoginAuth(payload)
  console.log(res);
   dispatch(getLoginAuthAction(res))
  return res
  }
  
  )
  export const logoutData= createAsyncThunk('logoutData',(payload,{dispatch})=>{
    // const res = await logout()
    dispatch(logoutAction())
  })



export const counterSlice = createSlice({
  name: 'login',
  initialState: {
    getCodeInfo:{},
    getAuthInfo:getTokenInfo()
  },
  reducers: {
    getMobileDataAction(state,action){
      state.getCodeInfo =action.payload
    },
    getLoginAuthAction(state,action){
      state.getAuthInfo = action.payload
      console.log("action.payload",action.payload.data);
      setTokenInfo(action.payload.data)
    },
    logoutAction(state,action){
      state.getAuthInfo = {}
      removeTokenInfo()

    }
  }
})

export const {  getMobileDataAction , getLoginAuthAction,logoutAction} = counterSlice.actions

export default counterSlice.reducer