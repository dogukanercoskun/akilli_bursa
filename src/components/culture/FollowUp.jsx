import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingPage from "../../pages/LoadingPage";
import "../../style/Followup.css";

function FollowUp() {
  const [datas, setDatas] = useState([]);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    setDatas(data.PlannedVoteValue);
  }, [data]);

  return (
    <div className="row">
    <div className="col">
    <div className="header">
      <h1>Oylama Sonuçları</h1>
      </div>
    <div className="container">
     
      {datas.length > 0 ? (
        <table className="table table-striped table-warning table-hover">
          <thead>
            <tr>
              <th scope="col">Etkinliğin Adı</th>
              <th scope="col">Etkinliğin Türü</th>
              <th scope="col">Açıklama</th>
              <th scope="col">Olumlu Görüş</th>
              <th scope="col">Olumsuz Görüş</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item) => {
              return item.data.map((value) => {
                return (
                  <tr key={value.Id}>
                    <td>{value.Adi}</td>
                    <td>{value.Tur}</td>
                    <td>{value.KisaAciklama}</td>
                    <td>{value.LikeSayısı}</td>
                    <td>{value.DislikeSayısı}</td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      ) : (
        <LoadingPage />
      )}
    </div>
    </div>
    </div>
  );
  
}

export default FollowUp;
