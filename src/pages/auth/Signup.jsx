import { useState } from 'react';
import '../../style/Signup.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../config/firebase';

function Signup() {
  const[email,setEamil]=useState('');
const[password,setPassword]=useState('');
const handeleSingnup=async ()=>{
  await createUserWithEmailAndPassword(auth,email,password).
  then(signInWithEmailAndPassword(auth,email,password).
  then(updateProfile(auth.currentUser,{displayName:email}))).catch((error)=>{
    alert('Hata Mesajı:', error)
  })
}
  return (
    <div className="signup">
       <img src="https://www.bursa.bel.tr/dosyalar/image/5B.png" alt="Resim Bulunamadı" />
        <input value={email} onChange={(e)=>setEamil(e.target.value)} type="email" placeholder=" Email" name="email" id="email" />
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder="Şifre" name="password" id="password" />
        <button onClick={handeleSingnup}>Üye ol</button>
    </div>
    
  )
}

export default Signup