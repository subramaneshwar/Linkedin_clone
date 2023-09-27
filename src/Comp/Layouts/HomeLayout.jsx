import React from 'react'
import NavBar from '../NavBar'
import SidebarMain from '../Sidebar/SidebarMain'
import Feed from '../Feed/Feed'
import LeftSidebar from '../Sidebar/LeftSidebar'
import Navbottom from '../Navbottom'

function HomeLayout() {
  return (
    <div className=''>

      <div className='flex flex-col'>
        <NavBar />
        <div className='md:flex justify-between relative mt-24  md:px-2 md:py-2 lg:mx-16'>
          <div className='flex-[0.3] lg:flex-[0.2] lg:px-2 md:block hidden '>
            <SidebarMain />
          </div>
          <div className='flex-[0.7] lg:flex-[0.6]'>
            <Feed />
          </div>
          <div className='lg:flex-[0.2] lg:block hidden '>
            <LeftSidebar />
          </div>
        </div>
      </div>
      <div>
        <Navbottom />
      </div>
    </div>
  )
}

export default HomeLayout