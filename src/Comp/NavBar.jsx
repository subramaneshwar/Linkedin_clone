import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout, selectUser } from '../app/userSlice'
import { auth } from '../firebaseConfig'
import { MyContext } from './Api/UserApi'

function NavBar() {
  const [Hover, setHover] = useState(false)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const signout = () => {
    dispatch(logout)
    auth.signOut()

  }
  const { userData } = useContext(MyContext)
  const [AllUsers, setAllUsers] = useState([])
  const [Value, setValue] = useState([])
  const [Inp, setInp] = useState('')
  const filter = (e) => {
    if (e) {
      const val = userData.filter((item) => item.displayName.startsWith(e))
      console.log(val);
      setValue(val)
    } else {
      setValue([])
    }
  }
  return (

    <nav className='w-full fixed  border-2 flex top-0 z-50 justify-between items-center h-20 px-8 mx-auto bg-white  '>
      <div className=' inline-flex'>
        <Link to='/'>
          <p className=' font-extrabold text-2xl py-2'>Social Media</p>
        </Link>
      </div>
      <div className='relative hidden sm:block flex-grow-0 flex-shrink'>
        <input type="text" className=' bg-purple-white bg-gray-200 rounded-lg border-0 p-3 w-full' style={{ minWidth: "400px" }} onChange={(e) => { setInp(e.target.value); filter(e.target.value) }} />
        <div class="absolute top-0 right-0 p-4 pr-3 text-purple-lighter">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <div className=' absolute w-full bg-white mt-2'>
          {
            Value.length > 0 && Inp ? <div>
              {
                Value.map((data, i) => (
                  <Link to={`/profile/${data.uid}`} className='flex items-center text-xl gap-2' key={i}>
                    {
                      data?.photoURL ? <img src={data?.photoURL} alt="" className='h-10  w-10 rounded-xl p-2' />
                        :
                        <div className='h-full p-2'>
                          <div className="  relative inline-flex items-center justify-center  w-10  h-10 overflow-hidden bg-blue-800 rounded-lg dark:bg-gray-600">
                            <span className="font-medium  text-gray-600 dark:text-gray-300"><p className='text-2xl text-white'>{data?.email.toUpperCase()[0]}</p></span>
                          </div>
                        </div>

                    }
                    <p>{data.displayName}</p>
                  </Link>
                ))
              }
            </div> : Inp && <p className='bg-white w-full z-50 mt-1 text-xl font-semibold'>Not Found</p>
          }
        </div>
      </div>
      <div className='flex'>

        <div className=''>
          <div className=' relative group cursor-pointer' onClick={() => { setHover(!Hover) }}>

            {user?.photoURL ? <img class="w-10 h-10 rounded-full" src={user?.photoURL} alt="Rounded avatar" /> :

              <div className="relative inline-flex items-center justify-center   w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{user?.email.toUpperCase()[0]}</span>

              </div>
            }
            <div class={`absolute right-0 z-10 mt-2  w-48  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${Hover ? "block" : "hidden"} `} >
              <Link to="/profile" class="block px-4 py-2 text-sm text-gray-700" >Your Profile</Link>
              {/* <Link class="block px-4 py-2 text-sm text-gray-700" >Settings</Link> */}
              <Link class="block px-4 py-2 text-sm text-gray-700" onClick={signout} >Sign out</Link>
            </div>
          </div>

        </div>


        {/* --- */}

      </div>

    </nav>

  )
}
export default NavBar



