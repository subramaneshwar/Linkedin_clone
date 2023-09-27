import React from 'react'
import NavBar from '../NavBar'
import SidebarMain from '../Sidebar/SidebarMain'
import LeftSidebar from '../Sidebar/LeftSidebar'
import Profile from '../Profile/Profile'
import ProfileMain from '../Profile/ProfileMain'
import Navbottom from '../Navbottom'

function ProfileLayout() {
  return (
    <div className=''>
 
    <div className='flex flex-col'>
      <NavBar />
      <div className='md:flex justify-between relative mt-24  md:px-2 md:py-2 lg:mx-16'>
        <div className='w-0 md:w-[40%] lg:w-[20%]  lg:px-2 md:block hidden '>
          <SidebarMain />
        </div>
        <div className='w-full md:w-[60%] lg:w-[80%]  '>
            <ProfileMain/>  
        </div>
        
      </div>
    </div>
    <div>
      <Navbottom/>
    </div>
    </div>
  )
}

export default ProfileLayout