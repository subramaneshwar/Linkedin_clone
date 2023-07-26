import React, { forwardRef } from 'react';
import InputOptions from './InputOptions'
import {BiLike} from 'react-icons/bi'
import {TfiCommentAlt} from 'react-icons/tfi'
import {BsShareFill} from 'react-icons/bs'
import {AiOutlineSend,AiTwotoneLike} from 'react-icons/ai'
import { useState } from 'react';
import { db } from '../../firebaseConfig';

const Post = forwardRef(({ name,description, message,photoUrl,image },ref) => {
  const [Likes, setLikes] = useState(false)
  const liked = ()=>{
      setLikes(!Likes)     
  }
  return (
    <div ref={ref} className='post bg-white p-4 mb-[10px] rounded-[10px]'>
      <div className="post__header flex mb-[10px] ">
        {/* <Avatar/> */}

        {
                    photoUrl ? <img class="sibebar_avatar  mb-3 w-10 h-10 rounded-full" src={photoUrl} alt="Rounded avatar" /> : 
                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{description.toUpperCase()[0]}</span>
                </div>

        }
        <div className="post_info ml-[10px]">
          <h2>{name}</h2>
          <p className='text-sm text-gray-700 '>{description}</p>
        </div>
      </div>
        <div className="post_body break-words">
          <p>{message}</p>
        </div>
        {
          image && <img src={image} alt="" className=' object-cover h-fit w-fit' />
        }
        <div className="post_buttons flex justify-evenly">
          <InputOptions Icon={!Likes ? BiLike : AiTwotoneLike} liked={liked} title="like" color='gray'/>
          <InputOptions Icon={TfiCommentAlt}  title="comment" color='gray'/>
          <InputOptions Icon={BsShareFill}  title="share" color='gray'/>
          <InputOptions Icon={AiOutlineSend}  title="send" color='gray'/>
        </div>
    </div>
  )
})

export default Post