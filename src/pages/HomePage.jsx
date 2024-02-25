
import FollowUp from "../components/culture/FollowUp"
import "../style/HomePage.css"



function HomePage() {


  return (
    <div className="row">
    <div className="col">
      <div className="main">
        <div className="header">
          <h1>Oylama Sonuçları</h1>
        </div>
    </div>
    <FollowUp/>
    </div>
  </div>
   
  )
}

export default HomePage