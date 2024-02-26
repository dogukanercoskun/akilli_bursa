import TimeLine from "../components/culture/TimeLine"

function PlannedEvent() {
  return (
    <div className="row">
    <div className="col">
    <div className="header">
      <h1>Planan Etkinlikler</h1>
      </div>
      <TimeLine type={"PlannedEvent"}/>
    </div>
    
  </div>
  )
}

export default PlannedEvent