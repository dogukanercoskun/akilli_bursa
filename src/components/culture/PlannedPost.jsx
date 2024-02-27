/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import "../../style/Post.css";
import { useEffect, useState } from "react";
import LoadingPage from '../../pages/LoadingPage';
import { BiBook } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { updateDataFirestore } from "../../redux/dataSlice";
import { addDataFirestore } from '../../redux/addDataSlice';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
function PlannedPost({data,id}) {
    const [datas,setdatas]=useState([])
    const dispacth=useDispatch();
    const user = useSelector((state) => state.user.user);


    const hadleLike=(item)=>{
      const plannedData = {id:id,data:item,type:'Like'}
    

      dispacth(updateDataFirestore(plannedData))
    
    }
    
    const hadleDisLike=(item)=>{
      const plannedData = {id:id,data:item,type:'DisLike'}
    

      dispacth(updateDataFirestore(plannedData))
    
    }

    const handleFavotireEvent=(item)=>{
      const adduserFavoriteData={...item,KullanacıAdi:user.email}
      const favoriteData={collectionName:'favoriteEvent',data:adduserFavoriteData}
      dispacth(addDataFirestore(favoriteData))

    }

    useEffect(()=>{
      setdatas(data.data)
    },[data,hadleLike,hadleDisLike,handleFavotireEvent])
    
    return (
      <div className="post">
        {
        datas.length > 0 ?(
  
          datas.map((item,index)=>{
            return(
            <div key={index} className="post-container">
            <div className="post__header">
              <div>{item.Adi}</div>
            </div>
            <div className="post__image">
              <img
                src={item.Resim}
                alt=""
              />
            </div>
            <div className="post__footer">
            <BiBook className="icon" />
              <div>Etkinlik Yeri: {item.EtkinlikMerkezi}</div>
              <br />
              <div>Etkinlik Tarihi: 2025 </div>
              <br />
              <div>Etkinlik Açıklaması: {item.KisaAciklama}</div>
            </div>
            <div className="post__icon">
           <BiSolidLike className="icon" onClick={() => hadleLike(item)} />
          <BiSolidDislike className="icon" onClick={() => hadleDisLike(item)} />
          <MdFavorite  onClick={() => handleFavotireEvent(item)} className="icon" />
            
              
              
            </div>
            </div>)
          })
        ):
        (  <div><LoadingPage /> </div>)}
        
      </div>
    );
  }

export default PlannedPost