import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '@/store/login'
export default configureStore({
  reducer: {
    login:loginReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
  
    serializableCheck: false,
  }),
})