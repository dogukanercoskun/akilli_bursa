import { useState } from 'react'
import '../../style/Login.css'
import {auth,provider} from '../../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";


function Login() {
const[email,setEamil]=useState('');
const[password,setPassword]=useState('');


const signInWithGoogle= async ()=>{
  const reuslt =await signInWithPopup(auth,provider);

  console.log(reuslt)
}

const handleLogin= async()=>{
 await signInWithEmailAndPassword(auth,email,password)


}





  return (
    <div className="login">
        <img src="https://www.bursa.bel.tr/dosyalar/image/5B.png" alt="Resim Bulunamadı" />
        <input value={email} onChange={(e)=>setEamil(e.target.value)} type="email" placeholder=" Email" name="email" id="email" />
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Şifre" name="password" id="password" />
        <div className="buttonGroup">
        <button className='Signin'  onClick={handleLogin}>Giriş Yap</button>
        <button className='googleSign' onClick={signInWithGoogle}> <FaGoogle /> Google ile Giriş Yap</button>
        </div>
    </div>
  )
}

export default Login