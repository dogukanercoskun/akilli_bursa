import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { db } from "../config/firebase"


export const addDataFirestore=createAsyncThunk(
  'addData/addDataFirestore',
  async (userData) => {
   
    const { collectionName, ...data } = userData
    const addDataCollectionRef=collection(db, collectionName)

    const addDatas=await addDoc(addDataCollectionRef,data)

    

    const newData={id:addDatas.id,data}
    return newData
  }
); 

const initialState = {
  value: [],
}

export const addDataSlice = createSlice({
  name: 'addData',
  initialState,
  extraReducers: (builder)=> {
   builder.addCase(addDataFirestore.fulfilled,(state,action)=>{
      state.value=[...state.value, action.payload]
   })
  },
})

// Action creators are generated for each case reducer function


export default addDataSlice.reducer