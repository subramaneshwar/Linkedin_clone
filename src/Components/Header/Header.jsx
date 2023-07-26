import React from 'react'
import { ImSearch } from 'react-icons/im'
import { AiFillHome } from 'react-icons/ai'
import { AiFillMessage } from 'react-icons/ai'
import { MdSupervisorAccount } from 'react-icons/md'
import { MdWork } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import Headeroption from './Headeroption'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../app/userSlice'
import { auth } from '../../firebaseConfig'
function Header() {
  const dispath = useDispatch()
  const user = useSelector(selectUser)

  const logoutapp = () => {
    dispath(logout())
    auth.signOut()
  }

  return (
    <div className='header flex justify-evenly pt-[10px] pb-[10px] border-b-[0.1px] border-gray-200 sticky top-0 z-[999] w-full  bg-white'>
      <div className="header_left flex ">
        <img className="h-8 mr-[10px] object-contain" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
        <div className="header_search flex items-center p-[10px] rounded h-8 text-gray-600  md:bg-[#eef3f8] ">
          <ImSearch className='text-xl md:text-lg' />
          <input className='hidden md:block  bg-[#eef3f8] outline-none pl-2  border-none' type="search" placeholder='Search' />
        </div>
      </div>
      <div className="header_right flex items-center">
        <Headeroption title='Home' Icon={AiFillHome} />
        <Headeroption title='My Network' Icon={MdSupervisorAccount} />
        <Headeroption title='Jobs' Icon={MdWork} />
        <Headeroption title='Messaging' Icon={AiFillMessage} />
        <Headeroption title='Notifications' Icon={IoIosNotifications} />
        {/* <Headeroption title="Me" avatar={user && user.photoURL} user={user}
              onClick={logoutapp}/> */}
        <div className='headerOption flex flex-col items-center mr-5 text-gray-600 cursor-pointer hover:text-black'>
          {user ? (user.photoURL  ? (
            <img src={user.photoURL} className='w-7 h-7 rounded-full' alt='avatar' onClick={logoutapp} /> )
            : (<div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" onClick={logoutapp}>
              <span className="font-medium text-gray-600 dark:text-gray-300">{user.email.toUpperCase()[0]}</span>
            </div>))
            :
            <div className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg className="absolute w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </div>
          }
          <h3 className='header_title font-normal text-xs hidden md:block'>me</h3>

          {/* <img src= className='w-6 h-6 rounded-full' alt='avatar'/>   */}

        </div>
      </div>
    </div>
  )
}

export default Header