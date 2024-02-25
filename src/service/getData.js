import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import { query,collection, onSnapshot } from "firebase/firestore"




export const useGetData=(collectionName) =>{
    const [data,setData]=useState([])

    const dataColletionRef=collection(db,collectionName)

    const getData=async()=>{
        let unsubscribe;
    try {

        const queryData=query(dataColletionRef)
        unsubscribe=onSnapshot(queryData,(snapshot)=>{

            let docs=[];
            snapshot.forEach((doc)=>{

                const data=doc.data();
                const id=doc.id;
                docs.push({...data,id})
            });
            setData(docs)

        });
        
    } catch (error) {
        console.log(error)
        
    }
    return()=>unsubscribe();
    }


    useEffect(()=>{
        getData()
    },[])
    
    return data;
}