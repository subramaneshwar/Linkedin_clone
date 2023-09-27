import React, { forwardRef, useContext, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/userSlice'
import { BsBookmark, BsHeart } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { FiShare2 } from 'react-icons/fi'
import { FcLike } from 'react-icons/fc'
import { AiOutlineSend } from 'react-icons/ai'
import { MyContext } from '../Api/UserApi'
import moment from "moment/moment";

const Posts = forwardRef(({ data }, ref) => {
  const user = useSelector(selectUser)

  const [liked, setliked] = useState(false)
  const [LikesCount, setLikesCount] = useState(0)
  const { LikePost, GetLikes, PostComment, GetComments } = useContext(MyContext)
  const [commentinp, setCommentinp] = useState("");
  const [comments, setComments] = useState([]);
  const [openComment, setopenComment] = useState(false)
  const getCurrentTimeStamp = (timeFormat) => {
    return moment().format(timeFormat);
  };

  const handleLike = () => {
    LikePost(user?.uid, data.documentId, liked)
  }
  const addcomment = () => {
    PostComment(data.documentId, commentinp, user?.displayName, user.photoURL)
    setCommentinp("")
  }
  console.log(comments);
  useMemo(() => {
    GetLikes(user?.uid, data.documentId, setliked, setLikesCount);
    GetComments(data.documentId, setComments)

  }, [data.userId, data.documentId])
  return (
    <div className='lg:px-10 py-2 '>
      <div className='lg:mx-auto bg-white rounded-lg shadow p-2 border'>
        <div>
          <div className='flex justify-between'>
            <div className='flex'>
              {
                data.photoUrl ? <img src={data?.photoUrl} alt="" className='w-12 h-12 rounded-full' />
                  : <div className="relative inline-flex items-center justify-center   w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{data?.email.toUpperCase()[0]}</span>                </div>

              }
              <div className='flex flex-col pl-2 justify-center'>
                <p className=' text-sm  md:text-lg font-semibold'>{data.name}</p>
                <p className=' font-light text-xs md:text-sm '>{data.email}</p>
              </div>
            </div>
          </div>
          <div className='py-3 pl-2 '>
            <p>{data.message}</p>
          </div>
          <div className=''>
            {
              data?.image ? <img src={data.image} alt="" style={{ height: '600px' }} className="bg-red-500 w-full object-cover rounded-2xl" /> : ""
            }
          </div>
          <div className='but flex gap-2 justify-between py-2 pl-2'>
            <div className='flex gap-2 items-center'>
              <button className=' text-2xl' onClick={handleLike}>
                {liked ? <FcLike /> : <BsHeart />}
              </button>
              <button onClick={()=>setopenComment(!openComment)} className=' text-2xl'>
                <FaRegComment />
              </button>
              <button className=' text-2xl'>
                <FiShare2 />
              </button>
            </div>
            <div className='flex items-center'>
              <button className=' text-2xl'><BsBookmark /></button>
            </div>
          </div>
          <div className='flex items-center  w-full pl-2'>
            <p className='text-sm'>{LikesCount} likes </p>
            <p className='pl-2 text-sm'>{comments.length} comments </p>
          </div>
          <div className={`flex-col ml-2 pt-2 gap-2 ${ openComment ? 'flex':'hidden'}`}>
            <div className='flex flex-col gap-2 max-h-20 overflow-auto'>
              {
                comments.map((data, ind) => (
                  <div className='  rounded-lg py-1 bg-gray-200'>
                    <div className='flex gap-2 '>

                      {data?.photoURL ? <img src={data?.photoURL} alt="" className='w-6 h-6 rounded-full' />
                        : (<div className="relative inline-flex items-center justify-center   w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                          <span className="font-medium text-gray-600 dark:text-gray-300">{data?.name.toUpperCase()[0]}</span>
                        </div>)}
                      <p className='text-xs'>{data.name}</p>
                    </div>
                    <div>
                      <p className='pl-8 truncate w-full'>{data.comment}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className={`flex items-center gap-2 mt-2`}>

              {
                user?.photoURL ? <img src={user?.photoURL} alt="" className='w-8 h-8 rounded-full' />
                  : <div className="relative inline-flex items-center justify-center   w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{user?.email.toUpperCase()[0]}</span>                </div>

              }
              <input type="text" placeholder='comment' value={commentinp} onChange={(e) => setCommentinp(e.target.value)} className='bg-gray-200 py-1 w-full px-2 rounded-lg ' />
              <button className={`${commentinp === "" ? 'hidden' : "text-3xl"}`} onClick={addcomment}><AiOutlineSend /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Posts