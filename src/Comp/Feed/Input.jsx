import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/userSlice'
import { FcComments,FcPicture, FcVideoCall } from 'react-icons/fc' 
import { Link } from 'react-router-dom'

function Input({isOpen,setIsOpen}) {
    const user = useSelector(selectUser)

    return (
        <div className='lg:px-10 '>
            <div className='lg:mx-auto  bg-white rounded-xl shadow p-2 md:p-4 gap-2 border flex flex-col'>
                <div className='flex gap-1'>
                    <Link to="/profile">
                    {
                     user.photoURL ?  <img src={user.photoURL} alt="" className='w-8 h-8 md:w-12 md:h-12 rounded-full' /> :
                     <div className=" relative inline-flex items-center justify-center   w-12 h-12 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600">
                     <span className="font-medium text-gray-600 dark:text-gray-300"> <p >{user?.email.toUpperCase()[0]} </p> </span></div>
                    }
                    </Link>
                <div onClick={()=>setIsOpen(!isOpen)} type="text"  className='outline-none  cursor-pointer rounded-3xl pl-4 bg-gray-200 mx-auto p-1 md:p-2 w-full text-lg '/>
                </div>
                <div className='flex justify-evenly items-center'>
                <button onClick={()=>setIsOpen(!isOpen)}  className='flex items-center justify-center flex-1 gap-1 px-5 text-sm md:text-xl font-semibold hover:bg-slate-300 hover:rounded-lg  py-2 cursor-pointer '><span className='md:text-2xl'><FcPicture/></span>  Photos</button> 
                <button onClick={()=>setIsOpen(!isOpen)}  className='flex items-center justify-center flex-1 gap-1 px-5 text-sm md:text-xl font-semibold hover:bg-slate-300 hover:rounded-lg  py-2 cursor-pointer '> <span className='md:text-2xl'><FcVideoCall/></span>Videos</button>
                <button onClick={()=>setIsOpen(!isOpen)}  className='flex items-center justify-center flex-1 gap-1 px-5 text-sm md:text-xl font-semibold hover:bg-slate-300 hover:rounded-lg  py-2 cursor-pointer '> <span className='md:text-2xl'><FcComments/></span>Activity</button>
                </div>
            </div>
            
        </div>
    )
}

export default Input