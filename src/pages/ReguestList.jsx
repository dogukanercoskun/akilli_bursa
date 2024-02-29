import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';
import '../style/RequestList.css'


function ReguestList() {
const [datas, setDatas] = useState([]);
const data = useSelector((state) => state.data);

useEffect(() => {
    console.log(data.requestList)
    setDatas(data.requestList);
  }, [data]);

  return (
    <div className="row">
    <div className="col">
    <div className="header">
      <h1>Talep Listesi</h1>
      </div>
    <div className="cntner">
     
      {datas.length > 0 ? (
        <table className="table table-striped table-warning table-hover">
          <thead>
            <tr>
              <th scope="col">Gönderenin Adı Soyadı</th>
              <th scope="col">Gönderinin Başlığı</th>
              <th scope="col">Gönderinin Açıklaması</th>
              <th scope="col">Gönderi Talebinin Türü</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item) => {
              
                return (
                  <tr key={item.id}>
                    <td>{item.data.nameSurname}</td>
                    <td>{item.data.sendingTitle}</td>
                    <td>{item.data.sendingTopic}</td>
                    <td>
                    {[
                        item.data.requestCheckEducation && "Eğitim",
                        item.data.requestCheckCulture && "Kültürel Etkinlik",
                        item.data.requestCheckTransport && "Ulaşım",
                        item.data.requestCheckOther && "Diğer"
                        ].filter(Boolean).join(', ')}
                                        </td>
                  </tr>
                );
             
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

export default ReguestList