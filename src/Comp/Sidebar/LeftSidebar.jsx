import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../Api/UserApi';

function LeftSidebar() {
  const {userData} = useContext(MyContext)
  const [AllUsers, setAllUsers] = useState([])
  const [Value, setValue] = useState([])
  const filter = (e) => {
    if (e.target.value) {

      const val = userData.filter((item) => item.displayName.startsWith(e.target.value))
      console.log(val);
      setValue(val)
    } else {
      setValue([])
    }
  }
  
  console.log(Value)
  return (
    <div className='border-2 fixed w-72 my-3 h-full bg-white'>
      <div className='p-2'>

        <input type="search" className=' bg-gray-200 border w-full rounded-full text-lg py-2 px-4' placeholder="search"  onChange={filter} />

      </div>
      {
        Value.length > 0 ? Value.map((value)=>(
          <li className='flex items-center gap-2 px-5 text-sm font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '>
          {
            value?.photoURL ? <img class="rounded-full border-solid border-white border-2  md:h-8 md:w-8  w-8 h-8 " src={value?.photoURL} alt="" />
              : <div className="relative inline-flex items-center justify-center   w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{value?.email.toUpperCase()[0]}</span>
              </div>

          }
          <p>{value.displayName}</p>
        </li>
        )) 
         : (<ul>
          {
            userData?.map((data, id) => (
              <Link to={`/profile/${data.uid}`} className='flex items-center  gap-2 px-2 text-sm font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer  '>
                {
                  data?.photoURL ? <img class="rounded-full  border-solid  border-white border-2 md:h-8 md:w-8  w-8 h-8 " src={data?.photoURL} alt="" />
                    : 
                    <div className="relative inline-flex items-center justify-center   w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <span className="font-medium text-gray-600 dark:text-gray-300">{data?.email.toUpperCase()[0]}</span>
                    </div>

                }

                <p className='flex items-center'>{data.displayName}</p>
              </Link >
            ))
          }
        </ul>)
      }

    </div>

  )
}

export default LeftSidebar
{/* <ul className='flex flex-col gap-2 '>
            <li className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> Home</li>
            <li className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> Friends</li>
            <li className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> Reels</li>
            <li className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> Saved</li>
            <li className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> Explore</li>
            <li className='flex items-center gap-2 px-5 text-xl font-semibold hover:bg-slate-300 hover:rounded-lg py-2 cursor-pointer '> Events</li>
        </ul>  */}