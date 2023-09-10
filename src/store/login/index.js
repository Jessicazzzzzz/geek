import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {getCodeData,getLoginAuth} from '../../utils/login'
import {setTokenInfo,getTokenInfo} from '../../utils/storage'
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
    }
  }
})

export const {  getMobileDataAction , getLoginAuthAction} = counterSlice.actions

export default counterSlice.reducer