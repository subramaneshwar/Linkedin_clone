import React, { useState } from 'react'
import { auth, provider } from '../firebaseConfig'
import { useDispatch } from 'react-redux'
import { login, logout } from '../app/userSlice'
import firebase from 'firebase/compat/app';

function Login() {
    const dispatch = useDispatch()
    const [users, setUsers] = useState(null);

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [name, setname] = useState("")
    const [profile, setprofile] = useState("")
    const [reg, setreg] = useState(false)
    function google(){
        auth.signInWithPopup(provider)
  .then((result) => {
    const user= result.user
    setUsers(user)
    // /** @type {firebase.auth.OAuthCredential} */
    // var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    // var token = credential.accessToken;
    // The signed-in user info.
    // var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error);
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // The email of the user's account used.
    // var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;

    // ...
  });

    }
    const register = () => {
        if (!name) {
            return alert("please enter a full name")
        }
        auth.createUserWithEmailAndPassword(email, pass).then((userauth) => {
            userauth.user.updateProfile({
                displayName: name,
                Photourl: profile,
            }).then(() => {
                dispatch(login({
                    email: userauth.user.email,
                    uid: userauth.user.uid,
                    displayName: name,
                    photoURL: profile
                }))

            })
        }).catch((error) => alert(error.messeage))

    }

    const logins = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, pass).then((userauth) => {
            dispatch(login({
                email: userauth.user.email,
                uid: userauth.user.uid,
                displayName: userauth.user.displayName,
                photoURL: userauth.user.photoURL
            }))
        }).catch((error) => alert(error.messeage))

    }

    return (
        <div className='login grid place-items-center mx-auto py-[100px]'>
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png" alt="" className="object-contain h-[70px] my-[20px]" />
            <form action="" className='flex flex-col'>
                <input className='w-[350px] h-[50px] text-sm pl-2 mb-2 rounded-md border border-gray-500' type="text" name="" id="" placeholder='Full Name' onChange={(e) => setname(e.target.value)} />
                <input className='w-[350px] h-[50px] text-sm pl-2 mb-2 rounded-md border border-gray-500' type="text" placeholder='profile pic URL' onChange={(e) => setprofile(e.target.value)} />
                <input className='w-[350px] h-[50px] text-sm pl-2 mb-2 rounded-md border border-gray-500' type="email" placeholder='Email' onChange={(e) => setemail(e.target.value)} />
                <input className='w-[350px] h-[50px] text-sm pl-2 mb-2 rounded-md border border-gray-500' type="password" placeholder='password' onChange={(e) => setpass(e.target.value)} />
                {reg ? <button className='w-[350px] h-[50px] text-lg text-white bg-[#0074b1] rounded-md' type='submit' onClick={register}>Register</button>:
                <button className='w-[350px] h-[50px] text-lg text-white bg-[#0074b1] rounded-md' type='submit' onClick={logins}>Sign In</button>}
            </form>
            {
                !reg ? 
            <p className='mt-[20px]'>Not a member?{" "} <span className='login_register text-[#0074b1] cursor-pointer' onClick={()=>setreg(!reg)} >Register Now</span></p>
            :
            <p className='mt-[20px]'>Alreadey a member?{" "} <span className='login_register text-[#0074b1] cursor-pointer' onClick={()=>setreg(!reg)} >Login Now</span></p>
            }

            <p className='border-solid border-b-8 font-bold p-2'>---- or -----</p>
            <button className='w-[350px] h-[50px] text-lg text-white bg-[#b13200] rounded-md' type='submit' onClick={google}>Google</button>

        </div>
    )
}

export default Login