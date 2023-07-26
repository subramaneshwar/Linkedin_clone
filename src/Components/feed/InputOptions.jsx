import React from 'react'

function InputOptions({Icon, title,color,liked,inps}) {
  return (
    
        liked ? (
          <div className='Input_option flex text-lg items-center mt-4 p-[10px] cursor-pointer hover:bg-[#F5F5F5] hover:rounded-[10px]' onClick={liked}>
          <Icon style={{color:color}}  /> 
          <h3 className='ml-1'>{title}</h3>
          </div>)
        :
        (<div className='Input_option flex text-lg items-center mt-4 p-[10px] cursor-pointer hover:bg-[#F5F5F5] hover:rounded-[10px]' onClick={inps}>
        <Icon style={{color:color}}  />
        <h3 className='ml-1'>{title}</h3>
        </div>)
        
  )
}

export default InputOptions