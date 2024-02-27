import { useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';
import "../style/Post.css";
import { deleteDataFirestore } from '../redux/dataSlice';
import { ToastContainer, toast } from 'react-toastify';
import { FaTrashAlt } from "react-icons/fa";


function FavoriteEvent() {
  const [datas, setDatas] = useState([]);
  const data = useSelector((state) => state.data);
  const user = useSelector((state) => state.user.user);
  const dispacth=useDispatch()

const handleRemoveData=(id) => {
 dispacth(deleteDataFirestore(id))
 toast("Etkinlik başarıyla silindi!");
}

useEffect(() => {
 
  const filteredData=data.favoriteValue.filter(item => item.data.KullanacıAdi === user.email)

  setDatas(filteredData);
}, [data]);



  
  return (
    <div className="row">
      <div className="col">
      <div className="header">
      <h1>Takip Edilen Etkinlikler</h1>
      </div>
        <div className="post">
    {datas.length > 0 ? (datas.map((item,index)=>{
      return (
    <div key={index} className="post-container">
    <div className="post__header">
      <div>{item.data.Adi}</div>
    </div>
    <div className="post__image">
      <img
        src={item.data.Resim}
        alt=""
      />
    </div>
    <div className="post__footer">
  
      <div>{item.data.KisaAciklama}</div>
      <br />
      <div>{item.data.EtkinlikMerkezi}</div>
      <br />
      <div>{item.data.Tur}</div>
      <button onClick={()=>handleRemoveData(item.id)} className="button"> <FaTrashAlt /> Etkinliği Çıkar</button>
      <ToastContainer />
    </div>
    </div>)

    })

):(  <LoadingPage />  )}
     </div>
      </div>
      </div>
  )
}

export default FavoriteEvent

