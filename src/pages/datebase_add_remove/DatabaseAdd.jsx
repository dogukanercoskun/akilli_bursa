import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDataFirestore } from "../../redux/addDataSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../style/DatabaseAdd.css";

function DatabaseAdd() {
  const [file, setFile] = useState(null);
  const [collectionName, setcollectionName] = useState("");
  const dispacth = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };


  const handleFileUpload = () => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);

      const userData = { collectionName: collectionName, data: data };
      // Firebase Firestore'a veri ekleme fonksiyonu
      const response = dispacth(addDataFirestore(userData));
      if (response.requestId) {
        toast(
          `Veri ${collectionName} adı ile başarılı bir şekilde veri tabanına kayıt edildi!`
        );
      }
    };
    reader.readAsText(file);
  };
  return (
    <div className="databaseAdd">
      <span>Veri Setinin İçeriği </span>
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
      <input className="inputFile" type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Dosyayı Yükle</button>
      <ToastContainer />
    </div>
    
  );
}

export default DatabaseAdd;
