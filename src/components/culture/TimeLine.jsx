/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import Post from "./Post";
import LoadingPage from "../../pages/LoadingPage";
import { useEffect, useState } from "react";
import PlannedPost from './PlannedPost';
import { getDataFirestore } from '../../redux/dataSlice';

function TimeLine({type}) {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const data = useSelector((state) => state.data);
  const dispatch=useDispatch()
 
  useEffect(() => {
    if (type !== "PlannedEvent") {
      setDatas(data.currentValue);
      setLoading(false); 
    } else {
      dispatch(getDataFirestore()).then(() => {setDatas(data.plannedValue); setLoading(false)}) 
      .catch(() => setLoading(false)); 

    }
  }, [type, data.currentValue, data.plannedValue, dispatch]);

  useEffect(() => {
    if (type === "PlannedEvent") {
      setLoading(false);
    }
  }, [type, data.plannedValue]);


  



  
  return (
    <div className="row">
        <div className="col">
            {loading ? (
                <LoadingPage />
            ) : (
                datas.map((item) => {
                
                    return type !== "PlannedEvent" ? (
                      
                        <Post key={item.id} data={item.data} />
                    ) : (
                        <PlannedPost key={item.id} data={item} id={item.id} />
                    );
                })
            )}
        </div>
    </div>
);

}

export default TimeLine;
