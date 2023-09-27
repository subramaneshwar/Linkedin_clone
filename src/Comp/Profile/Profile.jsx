import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/userSlice'
import ProfleCard from './ProfleCard'

function Profile() {
  const user = useSelector(selectUser)
  return (
    <div className='bg-white my-3 border-2 flex flex-col w-full'>
      <div className='flex flex-col '>
        <img src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000" alt="" className='h-80 w-full rounded-lg ' />
        {
           user?.photoURL ? 
           <img src={user.photoURL} alt="" className='mx-3 -my-24 h-40 w-40 rounded-lg shadow-xl  ' />
           : 
           <div className="relative inline-flex items-center justify-center -my-24  w-[200px] h-[200px] overflow-hidden bg-gray-100 rounded-lg  dark:bg-gray-600">
           <span className="font-medium text-gray-600 dark:text-gray-300">{user?.email.toUpperCase()[0]}</span>
       </div>
        }
      </div>
      <div className='pt-28 pb-2'>
        <p className='text-3xl font-bold px-4 py-2'>{user.displayName}</p>
        <p className='text-sm px-4'>{user.email}</p>
      </div>
      <div className='pb-4'>
                    <p className='px-4 text-xl font-bold'>About Me</p>
                    <p className='px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis quia iure accusamus perspiciatis nihil alias minus? Sint dicta tempora deleniti quidem, cumque, cupiditate rem consectetur veritatis voluptates possimus animi eius quam veniam, neque ipsa aspernatur quae quis! Cum animi deleniti expedita quos corporis est sapiente ducimus vitae velit nesciunt?</p>
                </div>
     
    </div>
  )
}

export default Profile