import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getUserChannels,getAllChannels,delChannel, addChannel} from '../../utils/channel'
import { getLocalChannels, hasToken, setLocalChannels } from "@/utils/storage";

export  const getChannelsData = createAsyncThunk('getChannelsData',async (payload,{dispatch})=>{
  //user  login 
  if(hasToken()){
    const res =  await  getUserChannels()
    console.log('log',res.data.channels);
    dispatch(getHomeChannelAction(res.data.channels))
    return res.data
  }
  else {
    console.log('not login');
    const  channels = getLocalChannels()
    //user not login
    if(channels){
      console.log("channels",channels);
    const res = dispatch(getHomeChannelAction(channels))
    console.log("res",res);
      return res

    }
    else{
      const res =  await  getUserChannels() 
      dispatch(getHomeChannelAction(res.data.channels))
      setLocalChannels(res.data.channels)
      return res.data

    }
  }

})


export const getAllChannelsData = createAsyncThunk('getallchannels',async(payload,{dispatch})=>{
  const res =   await getAllChannels()
  dispatch(getAllChannelsAction(res.data.channels))
  return res.data
})

export const delChannelData= createAsyncThunk('delChannelData', async (payload,{dispatch,getState})=>{
  
  // console.log(userChannels);
  
  if(hasToken()){ 
    // user login
    const res =  await delChannel(payload)
    dispatch(getChannelsData())
     return res
  }else{
    const userChannels= getState().home.getHomeChannelInfo
    const res = userChannels.filter((item)=>item.id!==payload)
    setLocalChannels(res)
    dispatch(getHomeChannelAction(res))
    return res
  }
})
export const addChannelData= createAsyncThunk('addChannelData', async (payload,{dispatch,getState})=>{
  const addchannels = [...getState().home.getHomeChannelInfo,payload]

  if(hasToken()){
    console.log('has token');
    const res =   await addChannel({
      channels:[payload]
    })
   
    dispatch(getHomeChannelAction(addchannels))
     return addchannels
    }else {
    setLocalChannels(addchannels)
    dispatch(getHomeChannelAction(addchannels))
    return addchannels
  
    }
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
    getHomeChannelInfo:[],
    getAllChannelsInfo:[]
  },
  reducers:{
    getHomeChannelAction(state,action){
      state.getHomeChannelInfo = action.payload

    },
    getAllChannelsAction(state,action){
      state.getAllChannelsInfo = action.payload
    },
   
    
  }
})

export const {getHomeChannelAction,getAllChannelsAction} = homeSlice.actions

export default homeSlice.reducer
