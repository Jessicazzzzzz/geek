import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '@/store/login'
import userReducer from '@/store/profile'
import homeReducer from '@/store/home'

export default configureStore({
  reducer: {
    login:loginReducer,
    user:userReducer,
    home:homeReducer
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
  
    serializableCheck: false,
  }),
})