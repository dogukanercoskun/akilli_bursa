import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Auth from './pages/auth/Auth'
import HomePage from "./pages/HomePage"
import "./style/App.css"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { auth } from './config/firebase';
import { loginUser, setLoading } from "./redux/userSlice"
import { getData,plannedData,favoriteData,requestListData } from "./redux/dataSlice"
import { useGetData } from "./service/getData"
import RequestForm from './pages/RequestForm';
import Database from './pages/datebase_add_remove/Database';
import PlannedEvent from './pages/PlannedEvent';
import CurrentEvent from './pages/CurrentEvent';
import FollowUp from "./components/culture/FollowUp"
import FavoriteEvent from './pages/FavoriteEvent';
import ReguestList from './pages/ReguestList';



function App() {

  const user=useSelector((state)=>state.user)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 790);
  const dispatch=useDispatch();
  const cultureData=useGetData('culture')
  const plannedVoteData=useGetData('PlannedEvent')
  const favoriteDatas=useGetData('favoriteEvent')
  const requestListDatas=useGetData('requestForm')

  useEffect(()=>{
   
    auth.onAuthStateChanged((authUser)=>{
      if (authUser) {
        dispatch(loginUser({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email

        }
        ))
        dispatch(setLoading(false))
      } 
    })
  },[])


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 790);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(()=>{
    dispatch(plannedData(plannedVoteData))
  },[plannedVoteData])

  useEffect(()=>{
    dispatch(getData(cultureData))
  },[cultureData])

  useEffect(()=>{
    dispatch(favoriteData(favoriteDatas))

  },[favoriteDatas])

  useEffect(()=>{
    
    dispatch(requestListData(requestListDatas))

  },[requestListDatas])

  return (
    <>
      <Router>
        <Header/>
        
        <div className="app">
        {user.user != null && (
        <div className={`col-3 ${isMobile ? "sideNavOpen" : ""}`}>
          <SideNav />
        </div>
      )}
          <Routes>
          <Route path="/" element={user.user != null ? <HomePage /> : <Auth />} />
          <Route path="/HomePage" element={user.user != null ? <HomePage /> : <Auth />} />
          <Route path="/Form" element={user.user != null ? <RequestForm /> : <Auth />} />
          <Route path="/PlannedEvent" element={user.user != null ? <PlannedEvent/> : <Auth />} />
          <Route path="/CurrentEvent" element={user.user != null ? <CurrentEvent/> : <Auth />} />
          <Route path="/FollowUp" element={user.user != null ? <FollowUp/> : <Auth />} />
          <Route path="/FavoriteEvent" element={user.user != null ? <FavoriteEvent/> : <Auth />} />
          <Route path="/Database" element={user.user != null && user.user.email=='bursasosyal@bursa.com' ? <Database /> : <Auth />} />
          <Route path="/RequestList" element={user.user != null && user.user.email=='bursasosyal@bursa.com' ? <ReguestList /> : <Auth />} />
        </Routes>
        </div>
      </Router>
       
       
    </>
  )
}

export default App
