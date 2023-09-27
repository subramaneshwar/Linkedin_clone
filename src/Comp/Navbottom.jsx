import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import { PiFilmSlateBold } from 'react-icons/pi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../app/userSlice'

function Navbottom() {
  const user =  useSelector(selectUser)
  return (
    <div className='fixed w-full px-2 z-50 flex bg-white items-center justify-between shadow-xl bottom-0 md:hidden h-12'>
       <Link to="/" className='text-3xl p-2 cursor-pointer hover:bg-gray-300 hover:rounded-lg  '><AiFillHome/></Link>
       <Link to="/search" className='text-3xl p-2 cursor-pointer hover:bg-gray-300 hover:rounded-lg  ' ><FiSearch/></Link>
       <Link to="/" className='text-3xl p-2 cursor-pointer hover:bg-gray-300 hover:rounded-lg  ' ><PiFilmSlateBold/></Link>
       <Link to="/profile" className='text-3xl p-2 cursor-pointer hover:bg-gray-300 hover:rounded-lg  ' >{ 
       user?.photoURL ? <img class="w-8 h-8 rounded-full" src={user?.photoURL} alt="Rounded avatar"/>:

<div class="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
   <svg class="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
 </div>
 }</Link>
    </div>
  )
}

export default Navbottom