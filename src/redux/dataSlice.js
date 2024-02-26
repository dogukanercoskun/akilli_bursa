/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-labels */
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs,getDoc,updateDoc,query,deleteDoc } from 'firebase/firestore';
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

export const deleteDataFirestore=createAsyncThunk(
  'deleteData/deleteDataFirestore',
  async (id) => {
    const collectionName = 'favoriteEvent'
    const deleteDataCollectionRef=doc(db, collectionName,id)

    try {
      await deleteDoc(deleteDataCollectionRef);
    } catch (error) {
      console.error('Veri silme hatası:', error);
      throw error;
    }
  }
)

const initialState = {
  currentValue: [],
  plannedValue: [],
  PlannedVoteValue:[],
  favoriteValue:[],
  requestList: [],
  
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData: (state,action) => {
     
      state.currentValue=action.payload
    },
    plannedData:(state,action) => {
      state.PlannedVoteValue=action.payload
    },favoriteData:(state,action) => {
      state.favoriteValue=action.payload
    },requestListData:(state,action) => {
      state.requestList=action.payload
    },
    
  },
  extraReducers: (builder)=> {
    builder.addCase(getDataFirestore.fulfilled,(state,action)=>{
       state.plannedValue= action.payload
    })
    .addCase(updateDataFirestore.fulfilled,(state,action)=>{
      state.plannedValue= action.payload
    })
    .addCase(deleteDataFirestore.fulfilled,()=>{
     
    })
   },
})

// Action creators are generated for each case reducer function
export const { getData,plannedData,favoriteData,requestListData} = dataSlice.actions

export default dataSlice.reducer