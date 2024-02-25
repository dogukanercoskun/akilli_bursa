import { useState } from "react";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../style/DatabaseRemove.css"
import { removeDataFirestore } from "../../redux/removeDataSlice";

function DatabaseRemove() {
const [collectionName, setcollectionName] = useState("");
  const dispacth = useDispatch();


  const handleDataRemove=()=>{
    const response = dispacth(removeDataFirestore(collectionName));
      if (response.requestId) {
        toast(
          `${collectionName} adlı veri başarılı bir şekilde veri tabanından silindi`
        );
      }
  }
  return (
    <div className="databaseRemove">
    <span>Silinecek Veri Seti</span>
    <div className="checkGroup">
      <input
        className="form-check-input"
        type="radio"
        value="education"
        id="flexCheckChecked"
        name="datebase"
        onChange={(e) => {
          setcollectionName(e.target.value);
        }}
      />
      <label className="form-check-label" id="flexCheckChecked">
        Eğitim
      </label>
      <input
        className="form-check-input"
        type="radio"
        value="culture"
        id="flexCheckChecked"
        name="datebase"
        onChange={(e) => {
          setcollectionName(e.target.value);
        }}
      />
      <label className="form-check-label" id="flexCheckChecked">
        Kültürel
      </label>
      <input
        className="form-check-input"
        type="radio"
        value="transport"
        id="flexCheckChecked"
        name="datebase"
        onChange={(e) => {
          setcollectionName(e.target.value);
        }}
      />
      <label className="form-check-label" id="flexCheckChecked">
        Ulaşım
      </label>
      <input
        className="form-check-input"
        type="radio"
        value="PlannedEvent"
        id="flexCheckChecked"
        name="datebase"
        onChange={(e) => {
          setcollectionName(e.target.value);
        }}
      />
      <label className="form-check-label" id="flexCheckChecked">
      Planan Etkinlikler
      </label>
    </div>
   
    <button onClick={handleDataRemove}>Dosyayı Sil</button>
    <ToastContainer />
  </div>
  )
}

export default DatabaseRemove