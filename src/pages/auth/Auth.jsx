
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Laudantium voluptate aspernatur reiciendis magni eaque ex non hic,
           enim eum, quis aliquam veniam aliquid perspiciatis sit 
           maxime architecto. Vero, ab! Eligendi?</p>
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