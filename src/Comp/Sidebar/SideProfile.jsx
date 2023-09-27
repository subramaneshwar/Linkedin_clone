import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/userSlice'
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function SideProfile() {
    const user =  useSelector(selectUser)
    console.log(user);
    console.log(user.photoURL);
  return (
    
<div class="rounded-3xl overflow-hidden shadow-xl md:w-56 lg:max-w-xs my-3 bg-blue-500">
  	<img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
    <div class="flex justify-center -mt-8">
        {
                    user?.photoURL ? <img class="rounded-full border-solid border-white border-2 -mt-3 md:h-16 md:w-16  w-20 h-20 " src={user?.photoURL} alt=""/> 
                    : <div className="relative inline-flex items-center justify-center   w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{user?.email.toUpperCase()[0]}</span>

                </div>
                        
            }
    </div>
	<div class="text-center px-3 pb-6 pt-2">
		<Link to='/profile' class="text-white text-sm bold font-sans">{user.displayName}</Link >
		<Link to='/profile' class="mt-2 text-xs  font-sans font-light text-white flex items-center justify-center gap-2"><AiOutlineMail/> {user.email}</Link>
	</div>
  	<div class="flex justify-center pb-3 text-white">
      <div class="text-center mr-3 border-r pr-3">
        <h2>34</h2>
        <span>Photos</span>
      </div>
      <div class="text-center">
        <h2>42</h2>
        <span>Friends</span>
      </div>
  	</div>
</div>

    // <div class="bg-white shadow rounded-xl py-2 border">
    //         <div class="flex flex-col gap-1 text-center items-center">
    //             {
    //                 user?.photoURL ? <img class="h-28 w-28 bg-white p-2 rounded-full shadow mb-4" src={user?.photoURL} alt=""/> 
    //                 : <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    //                 <span className="font-medium text-gray-600 dark:text-gray-300">{user?.email.toUpperCase()[0]}</span>

    //             </div>
                        
    //             }
    //             <p class="font-semibold">{user.displayName}</p>
    //             <div class="text-sm leading-normal text-gray-400 flex gap-2 justify-center items-center">
    //             <AiOutlineMail/> 
    //             <p>{user?.email}</p>
    //             </div>
    //         </div>
    //         <div class="flex justify-center items-center gap-2 my-3">
    //             <div class="font-semibold text-center mx-4">
    //                 <p class="text-black">102</p>
    //                 <span class="text-gray-400">Posts</span>
    //             </div>
    //             <div class="font-semibold text-center mx-4">
    //                 <p class="text-black">102</p>
    //                 <span class="text-gray-400">Followers</span>
    //             </div>
    //             <div class="font-semibold text-center mx-4">
    //                 <p class="text-black">102</p>
    //                 <span class="text-gray-400">Folowing</span>
    //             </div>
    //         </div>
    //     </div>
  )
}

export default SideProfile