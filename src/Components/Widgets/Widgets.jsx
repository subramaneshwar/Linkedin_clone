import React from 'react'
import {AiFillInfoCircle, AiTwotoneInfoCircle} from 'react-icons/ai'
function Widgets() {
 const newsArticle = (heading,subtitle)=>(
    <div className="widget_article   flex p-[10px] cursor-pointer w-fit items-center justify-between hover:bg-[#F5F5F5]">
        <div className="widget_articleleft text-[#0177b7] mr-1 mb-3 ">
            <AiTwotoneInfoCircle className='text-[12px]'/>
        </div>
        <div className="widget_articleright flex-1">
            <h2 className='text-[14px] md:text-xs text-gray-700 font-bold'>{heading}</h2>
            <h4 className='text-[12px] md:text-xs text-gray-700'>{subtitle}</h4>
        </div>
    </div>)

 

  return (
    <div className='widgets hidden lg:block sticky top-2 flex-[0.2] h-fit   bg-white border-solid border-2  border-[#D3D3D3]  rounded-[10px] pb-[10px]'>

        <div className="widgets_header flex items-center justify-between p-[10px]">
            <h2 className='text-2xl font-normal md:text-xl'>Linkedin News</h2>
            <AiFillInfoCircle/>
        </div>
            {newsArticle("Reactjs Technology","code news - 886 readers" )}
            {newsArticle("Bitcoin breaks $22k","Crpto news - 886 readers" )}
            {newsArticle("Tesla hits highs","Cars news - 886 readers" )}
            {newsArticle("corona virus updates","Top news - 886 readers" )}
            {newsArticle("Startups updates","technology news - 886 readers" )}
    </div>
  )
}

export default Widgets