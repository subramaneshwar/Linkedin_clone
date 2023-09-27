import React, { useContext, useState } from 'react'
import { MyContext } from '../Api/UserApi'
import ProfleCard from '../Profile/ProfleCard'

function Search() {
 const {userData} = useContext(MyContext)
  const [AllUsers, setAllUsers] = useState([])
  const [Value, setValue] = useState([])
  const [Inp,setInp] = useState("")
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
    <div className='my-3 mx-4 h-screen bg-white'>
        <div className='p-4'>
            <input type="search" onChange={(e)=>{filter(e.target.value);setInp(e.target.value)}} placeholder='Search for user' className='bg-gray-200 w-full py-3 px-4 rounded-full' />

            {Value.length > 0 ?  <div >
                <p className='text-2xl p-4 font-bold'>Searching user</p>
                <div className='flex flex-wrap gap-4'>
                {
                    Value?.map((data)=>(
                        <ProfleCard user={data} />
                    ))
                }
                </div>
            </div>
           : Inp  ? <p className='text-left p-4 text-xl font-bold'>Not Found</p> :<div>
                <div>
                    <p className='p-4 text-2xl font-bold'>All Users</p>
                </div>
                <div className='flex flex-wrap  gap-2'>

                { 
                userData.map((data)=>(
                    <ProfleCard user={data}/>
                ))
            }
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default Search