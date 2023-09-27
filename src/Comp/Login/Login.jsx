import React, { useContext, useState } from 'react'
import { auth, provider } from '../../firebaseConfig'
import { useDispatch } from 'react-redux'
import { login, logout } from '../../app/userSlice'
// import firebase from 'firebase/compat/app';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator'
import { MyContext } from '../Api/UserApi';

function Login() {
    const {signInWithGoogle,loginWithEmailAndPassword,registerWithEmailAndPassword} = useContext(MyContext);

    const dispatch = useDispatch()
    const [Data, setData] = useState({
        email:"",
        pass:"",
        name:"",
        profile:"",

    })

    const handle = (e)=>{
        const {name,value} = e.target
        setData(
            (prev)=> ({
            ...prev,[name]:value
        })
        // {
        //     ...Data,[name]:value
        // }
        )

    }


    // const [email, setemail] = useState("")
    // const [pass, setpass] = useState("")
    // const [name, setname] = useState("")
    // const [profile, setprofile] = useState("")
    // const [reg, setreg] = useState(false)
    
    const navigate = useNavigate()

    async function googles() {
            try {
                const result = await signInWithGoogle(auth,provider)
                toast.success("account login sucessfully")

                navigate("/")

            } catch (error) {
                console.log(error);
                toast.error(error)
            }
                
    }   
   

    const logins = async (e) => {
        if(!validator.isEmail(Data.email)){
            return toast.error("please enter a Correct email")
          }
          if(!Data.pass){
            return toast.error("please enter a password")
          }
        try {
            const data = await loginWithEmailAndPassword(Data.email,Data.pass)
            console.log(data);
            dispatch(login({
                email: data.user.email,
                uid: data.user.uid,
                displayName: data.user.displayName,
                photoURL: data.user.photoURL
            }))
            toast.success("account login sucessfully")
            navigate('/')

        } catch (error){
            toast.error(error.message)

        }
    }
    return (
<div class="py-32 h-screen w-full bg-slate-200 ">
    <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div class="hidden lg:block lg:w-1/2 bg-cover"
            style={{backgroundImage:`url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')`}}>
        </div>
        <div class="w-full p-8 lg:w-1/2">
            <h2 class="text-2xl font-semibold text-gray-700 text-center">Social Media</h2>
            <p class="text-xl text-gray-600 text-center">Welcome back!</p>
            <Link href="#" class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100" onClick={googles} >
                <div class="px-4 py-3">
                    <svg class="h-6 w-6" viewBox="0 0 40 40">
                        <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#FFC107" />
                        <path
                            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                            fill="#FF3D00" />
                        <path
                            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                            fill="#4CAF50" />
                        <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#1976D2" />
                    </svg>
                </div>
                <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
            </Link>
            <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 lg:w-1/4"></span>
                <p href="#" class="text-xs text-center text-gray-500 uppercase">or login with email</p>
                <span class="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" onChange={handle}  />
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <a href="#" class="text-xs text-gray-500">Forget Password?</a>
                </div>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="pass" onChange={handle} />
            </div>
            <div class="mt-8">
                <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" onClick={logins}>Login</button>
            </div>
            <ToastContainer/>
            <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 md:w-1/4"></span>
                <Link to="/register" class="text-sm text-gray-500 uppercase">or <span className='hover:underline font-bold text-lg'>sign up</span></Link>
                <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
    </div>
</div>
        // <div className='login grid place-items-center mx-auto py-[100px]'>
        //     <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png" alt="" className="object-contain h-[70px] my-[20px]" />
        //     <div className='flex flex-col'>
        //         <input className='w-[350px] h-[50px] text-sm pl-2 mb-2 rounded-md border border-gray-500' type="email" name="email" placeholder='Email' onChange={handle} />
        //         <input className='w-[350px] h-[50px] text-sm pl-2 mb-2 rounded-md border border-gray-500' type="password" name="pass" placeholder='password' onChange={handle} />
        
        //             <button className='w-[350px] h-[50px] text-lg text-white bg-[#0074b1] rounded-md' onClick={logins}>Sign In</button>
        //     </div>
           
        //             <p className='mt-[20px]'>Not a member?{" "} <span className='login_register text-[#0074b1] cursor-pointer' onClick={() => {navigate('/register')}} >Register Now</span></p>
                    

        //     <p className='border-solid border-b-8 font-bold p-2'>---- or -----</p>
        //     <button className='w-[350px] h-[50px] text-lg text-white bg-[#b13200] rounded-md' type='submit' onClick={google}>Google</button>
        //     <ToastContainer />

        // </div>
    )
}

export default Login