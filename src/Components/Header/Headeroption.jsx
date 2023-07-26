import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../app/userSlice'

function Headeroption({title,Icon}) {
  return (
    
    <div className='headerOption flex flex-col items-center mr-5 text-gray-600 cursor-pointer hover:text-black'>
        {Icon && <Icon className='header_icon text-2xl'  />}
        <h3 className='header_title font-normal text-xs hidden md:block'>{title}</h3>
    </div>
  )
}

export default Headeroption