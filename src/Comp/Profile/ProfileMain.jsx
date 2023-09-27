import React, { useContext } from 'react'
import Profile from './Profile'
import ProfleCard from './ProfleCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { MyContext } from '../Api/UserApi'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/userSlice'

function ProfileMain() {
  const { userData } = useContext(MyContext)
  const user = useSelector(selectUser)

  
  return (
    <div className='w-full flex flex-col'>
      <div className='bg-white my-3 border-2 flex flex-col w-full'>
        <div className='flex flex-col '>
          <img src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000" alt="" className='h-80 w-full rounded-lg ' />
          {
            user?.photoURL ?
              <img src={user.photoURL} alt="" className='mx-3 -my-24 h-40 w-40 rounded-lg shadow-xl  ' />
              :
              <div className="relative  inline-flex items-center justify-center -my-24 mx-3 w-[200px] h-[200px] overflow-hidden bg-blue-800 rounded-lg  dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300"><p className='text-5xl text-white'>{user?.email.toUpperCase()[0]}</p></span>
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
      <div className='flex flex-col w-full '>
      <p className='px-4 text-2xl font-semibold'>Suggetion Friends</p>
        <div className='flex gap-4 w-full overflow-x-auto pb-14 md:pb-4'>
          {
            userData.map((data) => {
              if (data.uid !== user.uid) return (<ProfleCard user={data} />)
            })
          }
        </div>
      </div>

    </div>
  )
}

export default ProfileMain