import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from "../config/firebase"


export const removeDataFirestore=createAsyncThunk(
  'removeData/removeDataFirestore',
  async (collectionName) => {
   
    
    const removeDataCollectionRef=collection(db, collectionName)

    const getremoveDataCollection=await getDocs(removeDataCollectionRef)

    for(var data of getremoveDataCollection.docs){
  
       await deleteDoc(doc(removeDataCollectionRef, data.id))

    }

  

    

    return []
  }
); 

const initialState = {
  value: [],
}

export const removeDataSlice = createSlice({
  name: 'removeData',
  initialState,
  extraReducers: (builder)=> {
   builder.addCase(removeDataFirestore.fulfilled,(state,action)=>{
      state.value= action.payload
   })
  },
})

// Action creators are generated for each case reducer function


export default removeDataSlice.reducer