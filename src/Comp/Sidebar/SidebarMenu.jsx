import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {FaUserFriends} from 'react-icons/fa'
import {PiFilmSlateBold} from 'react-icons/pi'
import {MdOutlineExplore} from 'react-icons/md'
import {BsFillBookmarkCheckFill, BsFillCalendarCheckFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function SidebarMenu() {
  return (
    <div className='px-2 py-2 rounded-3xl mt-4 border-2 shadow-xl bg-white'>
        <ul className='flex flex-col gap-2'>
            <Link to='/' className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> <AiFillHome/>Home</Link >
            <Link to="/search" className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> <FaUserFriends/>Search</Link >
            <Link className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> <PiFilmSlateBold/>Reels</Link>
            <Link className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> <BsFillBookmarkCheckFill/>Saved</Link>
            <Link className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> <MdOutlineExplore/>Explore</Link>
            <Link className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> <BsFillCalendarCheckFill/>Events</Link>
        </ul>
    </div>
  )
}

export default SidebarMenu