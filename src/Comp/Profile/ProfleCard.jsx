import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/userSlice'
import { Link } from 'react-router-dom';

function ProfleCard({ user }) {
    // const user = useSelector(selectUser)
    // console.log(user);

    return (

        <div className='w-[14rem]   bg-white border shadow-xl rounded-xl'>
            <div>
                <div style={{ width: "200px", height: "200px" }} className=''>
                    {
                        user?.photoURL ? <img src={user?.photoURL} alt="" className='h-full  w-full rounded-xl p-2' />
                            :
                            <div className='h-full p-2'>
                                <div className="  relative inline-flex items-center justify-center  w-full  h-full overflow-hidden bg-blue-800 rounded-lg dark:bg-gray-600">
                                    <span className="font-medium  text-gray-600 dark:text-gray-300"><p className='text-5xl text-white'>{user?.email.toUpperCase()[0]}</p></span>
                                </div>
                            </div>

                    }
                </div>
                <div className='flex flex-col items-center justify-center py-2 '>
                    <Link to={`/profile/${user.uid}`} className='text-sm font-bold py-2'>{user.displayName}</Link>
                </div>
                <div className='w-full flex items-center justify-center py-2'>
                    <button className='text-white font-semibold rounded-lg bg-blue-600 px-4 py-2'>follow</button>
                </div>
            </div>
        </div>
    )
}

export default ProfleCard