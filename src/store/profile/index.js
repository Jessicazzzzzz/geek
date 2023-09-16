import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getUser,getProfile,updateProfile, updatePhoto} from '@/utils/profile'
export const getUserData = createAsyncThunk('getUserInfo',async (payload,{dispatch})=>{
   const res = await  getUser()
  //  console.log(res);
   dispatch(getUserInfoAction(res.data))
   return res
})
export const getProfileData = createAsyncThunk('getUserInfo',async (payload,{dispatch})=>{
  const res = await  getProfile()
  // console.log(res);
  dispatch(getProfileInfoAction(res.data))
  return res
})

export const updateProfileData = createAsyncThunk('updateProfile', async (payload,{dispatch})=>{
  const res = await updateProfile(payload)
  console.log(res);
  dispatch(getProfileData())
  return res
})
export const updatePhotoData = createAsyncThunk('updatephoto',async (payload,{dispatch})=>{
  const res = await updatePhoto(payload)
  console.log(res);
  dispatch(getProfileData())
  return res
})

export const userSlicer = createSlice({
  name:"user", 
  initialState:{
    getUserInfo:{

    },
    getProfileInfo:{

    }
  }
  ,
  reducers:{
    getUserInfoAction(state,action){
      state.getUserInfo = action.payload
    },
    getProfileInfoAction(state,action){
      state.getProfileInfo = action.payload
    }
  }
})

export const{getUserInfoAction,getProfileInfoAction} = userSlicer.actions
export default userSlicer.reducer