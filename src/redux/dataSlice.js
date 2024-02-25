/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-labels */
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs,getDoc,updateDoc,query,onSnapshot } from 'firebase/firestore';
import { db } from "../config/firebase"
import { doc } from 'firebase/firestore';


export const getDataFirestore=createAsyncThunk(
  'getData/getDataFirestore',
  
  async () => {

   
   
    const collectionName = 'PlannedEvent'
    const getDataCollectionRef=collection(db, collectionName)

    
    try {
      const querySnapshot = await getDocs(query(getDataCollectionRef));

      const PlannedEvent = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return PlannedEvent; 
    } catch (error) {
      console.error('Veri alım hatası:', error);
      throw error; 
    }
   
  
  }
); 

export const updateDataFirestore=createAsyncThunk(
  'updateData/updateDataFirestore',
  async (plannedData) => {
    const { id, data,type } = plannedData
    
    const collectionName = 'PlannedEvent'
    const updateDataCollectionRef=doc(db, collectionName,id)

    let updatedData
   try {
      const qurySnapshot= await getDoc(updateDataCollectionRef)

      if (qurySnapshot.exists()) {
        const qurySnapshotData=qurySnapshot.data()
         updatedData = qurySnapshotData.data.map(item => {

          if (type==='Like') {
            if (item.Id === data.Id) {
              const LikeSayısı=data.LikeSayısı+1
            
             return { ...item, LikeSayısı: LikeSayısı };
           }
          } else {
            if (item.Id === data.Id) {
              const DislikeSayısı=data.DislikeSayısı+1
            
             return { ...item, DislikeSayısı: DislikeSayısı };
           }
          }
          return item;
        });

        
        try {
         
        
          await updateDoc(updateDataCollectionRef, { data: updatedData });
        } catch (error) {
          console.log(error);
        }
       

       
        
        
      } else {
        throw new Error('Belge bulunamadı.');
      }
      
    } catch (error) {
      console.error('Veri güncelleme hatası:', error);
      throw error;
    }

   
    const datas={ data: updatedData }

    return datas
  }
);

const initialState = {
  currentValue: [],
  plannedValue: [],
  PlannedVoteValue:[],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData: (state,action) => {
     
      state.currentValue=action.payload
    },
    PlannedData:(state,action) => {

      state.PlannedVoteValue=action.payload
    }
  },
  extraReducers: (builder)=> {
    builder.addCase(getDataFirestore.fulfilled,(state,action)=>{
       state.plannedValue= action.payload
    })
    .addCase(updateDataFirestore.fulfilled,(state,action)=>{
      state.plannedValue= action.payload
    })
   },
})

// Action creators are generated for each case reducer function
export const { getData,PlannedData} = dataSlice.actions

export default dataSlice.reducer