
import "../../style/Post.css";
import { useEffect, useState } from "react";
import LoadingPage from '../../pages/LoadingPage';
import { BiBook } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function Post({ data }) {

  const [datas,setdatas]=useState([])

  useEffect(()=>{
  
    setdatas(data)
  },[data])
  
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
          <BiBook />
            <div>{item.KisaAciklama}</div>
            <br />
            <div>{item.EtkinlikMerkezi}</div>
            <br />
            <div>{item.Tur}</div>
          </div>
          </div>)
        })
      ):
      (<LoadingPage/>)}
      
    </div>
  );
}

export default Post;
