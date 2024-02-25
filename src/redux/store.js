import { configureStore } from '@reduxjs/toolkit'
import  dataSlice  from './dataSlice';
import userSlice from "./userSlice";
import addDataSlice from './addDataSlice';
import removeDataSlice from './removeDataSlice';


export const store = configureStore({
    reducer: {
      data: dataSlice,
      user:userSlice,
      addData:addDataSlice,
      removeData:removeDataSlice
    },
  })