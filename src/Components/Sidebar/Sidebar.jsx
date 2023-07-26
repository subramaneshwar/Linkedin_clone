import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/userSlice'

function Sidebar() {
    const user = useSelector(selectUser)

    const recentitems = (topic) => (
        <div className="sidebar_recentitem flex text-sm text-[#808080] cursor-pointer mb-1 p-1 hover:bg-[#F5F5F5] hover:rounded-[10px] hover:cursor-pointer hover:text-black ">
            <span className="sidebar_hash mr-2 ml-1" >#</span>
            <p>{topic}</p>
        </div>)

    return (
        <div className='sidebar md:sticky md:top-2 flex-[0.2] md:text-center md:h-fit  rounded-lg mx-1 md:mx-3'>
            <div className="sidebar_top  flex flex-col items-center border-solid border-2  border-[#D3D3D3] border-b-0 rounded-tr-[10px] rounded-tl-[10px] bg-white pb-3 ">
                <img className='mb-[-20px] rounded-tr-[10px] rounded-tl-[10px] object-cover' src="https://media.geeksforgeeks.org/wp-content/uploads/20210724024414/135deg2-660x322.png" alt="" />
                {
                    user.photoURL ? <img class="sibebar_avatar  mb-3 w-10 h-10 rounded-full" src={user.photoURL} alt="Rounded avatar" /> :
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600 dark:text-gray-300">{user.email.toUpperCase()[0]}</span>
                        </div>

                }
                <h2 className='text-sm ' >{user.displayName}</h2>
                <h4 className=' text-[#808080] text-sm'>{user.email}</h4>
            </div>
            <div className=" sidebar_stats p-3 mb-3 border-2  border-[#D3D3D3] bg-white rounded-br-[10px] rounded-bl-[10px] ">
                <div className="sidebar_stats mt-3 flex justify-between">
                    <p className=' text-gray-700 text-sm font-[600]'>who viewed you</p>
                    <p className='sidebar_statNumber font-bold text-[#0a66c2] '>2,453</p>
                </div>
                <div className="sidebar_stats mt-3 flex justify-between">
                    <p className=' text-gray-700 text-sm font-[600]' >viewed on post</p>
                    <p className='sidebar_statNumber font-bold text-[#0a66c2]'>2,344</p>
                </div>
            </div>
            <div className="sidebar_bottom hidden md:block text-left p-3 mt-3 border-2 border-solid border-[#D3D3D3] rounded-[10px] bg-white">
                <p className=' text-sm pb-2 font-bold'>Recent</p>
                {recentitems(`reactjs`)}
                {recentitems(`programming`)}
                {recentitems(`software engineering`)}
                {recentitems(`design`)}
                {recentitems(`developer`)}
            </div>


        </div>
    )
}

export default Sidebar