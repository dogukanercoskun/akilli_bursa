import { useDispatch, useSelector } from "react-redux";
import "../style/Header.css";
import { ImExit } from "react-icons/im";
import { auth } from "../config/firebase";
import { logOut, setLoading } from "../redux/userSlice";

function Header() {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const handleLogot = () => {
    dispatch(setLoading(true));
    auth.signOut().then(() => {
      dispatch(setLoading(false));
      dispatch(logOut());
    });
  };

  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://www.bursa.bel.tr/dosyalar/image/5B.png" alt="Resim Bulunamadı" />
          <h5 className="navbar-text">SOSYAL BURSA</h5>
          
        </a>
        <div className="username">
          {user ? `Hoşgeldin ${user.email}` : null}
        </div>

        {user && (
          <div onClick={handleLogot} className="exitIcon">
            <span>Çıkış</span>
            <ImExit />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
