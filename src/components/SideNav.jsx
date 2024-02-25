import "../style/SideNav.css"
import { FaHome } from "react-icons/fa";
import { BsCalendarEventFill } from "react-icons/bs";
import { BsNewspaper } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa6";
import { GiTheater } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { BsDatabaseAdd } from "react-icons/bs";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

function SideNav() {
  const user=useSelector((state)=>state.user)


  return (
    <div className="sideNav">
    <img className="sideNav__logo" src="../..//public/Bursa Büyükşehir Belediyesi.png" alt="" />

    <div className="sideNav__buttons">
      <button className="sideNav__button">
        <FaHome className="side__button__icon" />
        <Link className="link" to="/HomePage"><span className="sideNav__button__text">Anasayfa</span></Link>
      </button>
      <button className="sideNav__button">
        <BsCalendarEventFill className="side__button__icon" />
        <Link className="link" to="/PlannedEvent"><span className="sideNav__button__text">Planan Etkinlikler</span></Link>
      </button>
      <button className="sideNav__button">
        <FaWpforms className="side__button__icon" />
        <Link className="link" to="/Form"><span className="sideNav__button__text">Talep Formu</span></Link>
    
      </button>
      <button className="sideNav__button">
        <GiTheater className="side__button__icon" />
        <Link className="link" to="/CurrentEvent"> <span className="sideNav__button__text">Güncel Etkinlikler</span></Link>
      </button>
      <button className="sideNav__button">
        <MdOutlineCastForEducation className="side__button__icon" />
        <span className="sideNav__button__text">Eğitim Merkezleri</span>
      </button>
      <button className="sideNav__button">
        <BsNewspaper className="side__button__icon" />
      
        <Link className="link" to="/FollowUp"><span className="sideNav__button__text">Oylama Sonçları</span></Link>
      </button>

      {user.user != null && user.user.email=='bursasosyal@bursa.com' ?(
      <button className="sideNav__button">
        <BsDatabaseAdd className="side__button__icon" />
        <Link className="link" to="/Database"><span className="sideNav__button__text">Veri Ekleme/Silme</span></Link>
      </button>) : (null)}
      
    </div>
    
    </div>
  )
}

export default SideNav