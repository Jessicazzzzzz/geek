import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '@/store/home'
export default configureStore({
  reducer: {
    homereducer:homeReducer
  }
})