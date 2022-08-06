import { configureStore } from '@reduxjs/toolkit'
import eventReducer from '../slice/eventSlice'

export const store = configureStore({
  reducer: {
    counter: eventReducer,
  },
})