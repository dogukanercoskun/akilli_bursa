import { useState } from "react";
import DatabaseAdd from "./DatabaseAdd";
import DatabaseRemove from "./DatabaseRemove";

function Database() {
    const [datebaseChange,setDatebaseChange]=useState(true)

    const handledatebaseActiveted=()=>{
        setDatebaseChange(prev=>!prev)
     }
   

  return (
    <div className="database">
      <div className="form-check form-switch form-check-reverse">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckReverse"
          onChange={handledatebaseActiveted}
        />
        <label className="form-check-label"> {datebaseChange ? 'Veri Sil' : 'Veri Ekle'}</label>
      </div>

      {datebaseChange ? <DatabaseAdd /> : <DatabaseRemove />}
    </div>
  )
}

export default Database