import "../style/SideNav.css";
import { FaHome } from "react-icons/fa";
import { BsCalendarEventFill } from "react-icons/bs";
import { BsNewspaper } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa6";
import { GiTheater } from "react-icons/gi";
import { MdOutlineFavorite } from "react-icons/md";
import { BsDatabaseAdd } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SideNav() {
  const user = useSelector((state) => state.user);

  return (
    <div className="sideNav">
      <img
        src="https://www.bursa.bel.tr/dosyalar/image/5B.png"
        alt="Resim Bulunamadı"
      />

      <div className="sideNav__buttons">
        <button className="sideNav__button">
          <Link className="link" to="/HomePage">
            {" "}
            <FaHome className="side__button__icon" />
            <span className="sideNav__button__text">Anasayfa</span>
          </Link>
        </button>
        <button className="sideNav__button">
          <Link className="link" to="/PlannedEvent">
            {" "}
            <BsCalendarEventFill className="side__button__icon" />
            <span className="sideNav__button__text">Planan Etkinlikler</span>
          </Link>
        </button>
        <button className="sideNav__button">
          <Link className="link" to="/Form">
            {" "}
            <FaWpforms className="side__button__icon" />
            <span className="sideNav__button__text">Talep Formu</span>
          </Link>
        </button>
        <button className="sideNav__button">
          <Link className="link" to="/CurrentEvent">
            {" "}
            <GiTheater className="side__button__icon" />{" "}
            <span className="sideNav__button__text">Güncel Etkinlikler</span>
          </Link>
        </button>
        <button className="sideNav__button">
          <Link className="link" to="/FavoriteEvent">
            {" "}
            <MdOutlineFavorite className="side__button__icon" />
            <span className="sideNav__button__text">Favoriler</span>
          </Link>
        </button>
        <button className="sideNav__button">
          <Link className="link" to="/FollowUp">
            <BsNewspaper className="side__button__icon" />
            <span className="sideNav__button__text">Oylama Sonçları</span>
          </Link>
        </button>

        {user.user != null && user.user.email == "bursasosyal@bursa.com" ? (
          <>
            <button className="sideNav__button">
              <Link className="link" to="/Database">
                <BsDatabaseAdd className="side__button__icon" />
                <span className="sideNav__button__text">Veri Ekleme/Silme</span>
              </Link>
            </button>
            <button className="sideNav__button">
              <Link className="link" to="/RequestList">
                <FaClipboardList className="side__button__icon" />
                <span className="sideNav__button__text">Talep Listesi</span>
              </Link>
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default SideNav;
