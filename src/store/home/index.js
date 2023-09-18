import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getUserChannels} from '../../utils/channel'
export  const getChannelsData = createAsyncThunk('getChannelsData',async (payload,{dispatch})=>{
 const res =  await  getUserChannels()
 console.log(res.data);
 dispatch(getHomeChannelAction(res))
 return res.data
})

// export const getChannelsData = createAsyncThunk("getChannelsData", (payload,{dispatch})=>{
//   getUserChannels(payload).then(res=>{
//       // console.log(res);
//        dispatch(getHomeChannelAction(res))
//   }).catch(err=>{
//    dispatch(getHomeChannelAction(err.response.data.message))

//   })
 
 
// })

export const homeSlice = createSlice({
  name:'home',
  initialState:{
    getHomeChannelInfo:{}
  },
  reducers:{
    getHomeChannelAction(state,action){
      state.getHomeChannelInfo = action.payload
    }
  }
})

export const {getHomeChannelAction} = homeSlice.actions

export default homeSlice.reducer
