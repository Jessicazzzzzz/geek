import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {getCodeData} from '../../utils/login'
export const fetchData = createAsyncThunk("fetchData", (payload,{dispatch})=>{
   getCodeData(payload).then(res=>{
        dispatch(getMobileDataAction(res))
   }).catch(err=>{
    dispatch(getMobileDataAction(err.response.data.message))

   })
  
})

export const counterSlice = createSlice({
  name: 'login',
  initialState: {
    getCodeInfo:{}
  },
  reducers: {
    getMobileDataAction(state,action){
      state.getCodeInfo =action.payload
    }
  }
})

export const {  getMobileDataAction } = counterSlice.actions

export default counterSlice.reducer