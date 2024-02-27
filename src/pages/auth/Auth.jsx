
import "../../style/Auth.css"
import Login from './Login';
import { useState } from 'react';
import Signup from './Signup';

function Auth() {

  const[active,setActive]=useState('login')


const hanleAcitve=()=>{
    setActive((prev)=>{
      return prev==='login'?'signup':'login'
    })
}  


  return (
    <>
  <div className="auth-container">
      <div className="auth__left">
        <p>Code 16 Programı İleri Seviye React Kursu Çerçevesinde Bursa Akıllı Şehir Teması ile Yaptığım Bitirme Projem <br />@Doğukan Ercoşkun  </p>
      </div>
      <div className="auth__right">

        {active==='login'? ( <Login/>):(<Signup/>)}
       
        <div className="auth__more">
          {active==='login'?(<> <span>Henüz hesabınız yok mu?<button onClick={hanleAcitve} >Üye Ol!</button></span> </>):(<> <span>Hesabınız var mı?<button onClick={hanleAcitve}>Giriş Yapın!</button></span></>)}
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Auth