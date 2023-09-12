import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '@/store/login'
import userReducer from '@/store/profile'
export default configureStore({
  reducer: {
    login:loginReducer,
    user:userReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
  
    serializableCheck: false,
  }),
})