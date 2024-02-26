import TimeLine from "../components/culture/TimeLine"
function CurrentEvent() {
  return (
    
        <div className="row">
        <div className="col">
        <div className="header">
      <h1>Güncel Etkinlikler</h1>
      </div>
          <TimeLine type={"CurrentEvent"}/>
        </div>
        
      </div>
       
      )
  
}

export default CurrentEvent