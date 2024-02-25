import { useState } from "react";
import '..//style/RequestForm.css'
import { useDispatch} from "react-redux";
import {addDataFirestore} from '../redux/addDataSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function RequestForm() {
  const [data, setData] = useState([]);
  const dispacth=useDispatch()
  
  
  const handleSubmit=  (e)=>{

    const userData = {collectionName:'requestForm',data:data}
     const response =dispacth(addDataFirestore(userData))
    e.preventDefault()

    if (response.requestId) {
      toast("Form başarıyla gönderildi!");
     
    }
     

  }



 

  return (
    <>
      <div className="form" >
        <span className="mainTopic">TALEP FORMU</span>
        
        <div className="inputGroup">
          <span>Gönderenin Adı Soyadı: </span>
          <input

            type="text"
            name="nameSurname"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />

          <span>Gönderinin Başlığı: </span>
          <input
            type="text"
            name="sendingTitle"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />

          <span>Gönderinin Kısa Açıklaması: </span>
          <textarea
            type="text"
            name="sendingTopic"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div> 
        <span>Gönderinin İçeriği: </span>
        <div className="checkGroup">
          <input
            className="form-check-input"
            type="checkbox"
            value="Eğitim"
            id="flexCheckChecked"
            name="requestCheckEducation"
            onChange={(e) => {
              setData({...data, [e.target.name]: e.target.checked});
            }}
          />
          <label className="form-check-label" id="flexCheckChecked">Eğitim</label>
          <input
            className="form-check-input"
            type="checkbox"
            value="Kültürel Etkinlik"
            id="flexCheckChecked"
           
            name="requestCheckCulture"
            onChange={(e) => {
              setData({...data, [e.target.name]: e.target.checked });
            }}
          />
          <label className="form-check-label" id="flexCheckChecked">Kültürel Etkinlik</label>
          <input
            className="form-check-input"
            type="checkbox"
            value="Ulaşım"
            id="flexCheckChecked"
            name="requestCheckTransport"
            onChange={(e) => {
              setData({...data, [e.target.name]: e.target.checked });
            }}
          />
          <label className="form-check-label" id="flexCheckChecked">Ulaşım</label>
          <input
            className="form-check-input"
            type="checkbox"
            value="Diğer"
            id="flexCheckChecked"
            name="requestCheckOther"
            onChange={(e) => {
              setData({...data, [e.target.name]: e.target.checked });
            }}
          />
          <label className="form-check-label" id="flexCheckChecked">Diğer</label>
        </div>
        <button onClick={handleSubmit}  className="button">Gönder</button>
        <ToastContainer />
      </div>
      
    </>
  );
}

export default RequestForm;
