import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import UserReducer from './reducers/UserReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    UserReducer: UserReducer
  },
}) 