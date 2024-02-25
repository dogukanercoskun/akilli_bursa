import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingPage from '../../pages/LoadingPage';



function FollowUp() {
  const [datas,setDatas]=useState([])
  const data = useSelector((state) => state.data);


  useEffect(() =>{
    setDatas(data.PlannedVoteValue)

  },[data])



  return (
    <>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Etkinliğin</th>
      <th scope="col">Adı</th>
      <th scope="col">Açıklaması</th>
      <th scope="col">Türü</th>
      <th scope="col">Beğeni Sayısı</th>
      <th scope="col">Beğenmeyen Sayısı</th>
    </tr>
  </thead>
  <tbody>
  {datas.length > 0 ? (
  datas.map((item, index) => (
    
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{item.Adi}</td>
      <td>{item.KisaAciklama}</td>
      <td>{item.Tur}</td>
      <td>{item.LikeSayısı}</td>
      <td>{item.DislikeSayısı}</td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="6"><LoadingPage /></td>
  </tr>
)}
   
  </tbody>
</table>

    </>
  )
}

export default FollowUp