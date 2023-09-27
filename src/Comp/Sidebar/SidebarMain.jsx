import React from 'react'
import SideProfile from './SideProfile'
import SidebarMenu from './SidebarMenu'

function SidebarMain() {
  return (
    <div className='fixed'>
        <SideProfile/>
        <SidebarMenu/>
    </div>
  )
}

export default SidebarMain