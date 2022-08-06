import { configureStore } from '@reduxjs/toolkit'
import eventReducer from '../slice/eventSlice'

const store = configureStore({
  reducer: eventReducer,
  devTools: true,
});

export default store;