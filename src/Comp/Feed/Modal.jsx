import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FcComments, FcPicture, FcVideoCall } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai'
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF"];

function Modal({ isOpen, setIsOpen,setSelectedImage,selectedImage,Inp,setInp,sendpost }) {
    const [imgOpen, setimgOpen] = useState(false)
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={()=>setInp(isOpen)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 "
                                    >
                                        <div className='flex justify-between items-center pb-2'>

                                            <p className='text-center w-full text-xl font-semibold'>Create post</p>
                                            <button onClick={() => { setIsOpen(!isOpen); setimgOpen(false);setSelectedImage(null) }}><AiOutlineClose /></button>
                                        </div>

                                    </Dialog.Title>
                                    <div className='border-t-2'>


                                        <div className="my-3">
                                            <form>
                                                <textarea class="rounded-lg no-resize appearance-none block w-full outline-none py-2 px-2 h-48 resize-none bg-gray-100 md:text-xl  " id="message" placeholder="What's on your mind, Reddy?" onChange={(e)=>setInp(e.target.value)}></textarea>
                                            </form>

                                        </div>
                                        <div className={`${!imgOpen ? 'hidden' : 'block'}`}>
                                        <button onClick={() => {setSelectedImage(null);setimgOpen(!imgOpen) }} className='flex items-end w-full justify-end rounded-full ' ><AiOutlineClose /></button>
                                            <div class="file_upload p-5  border-4 border-dotted border-gray-300 rounded-lg" >
                                                <svg class="text-indigo-500 w-20 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                                <div class="input_field flex flex-col w-max mx-auto text-center">
                                                    <label>
                                                        <input class="text-sm cursor-pointer w-36 hidden" type="file" multiple onChange={(e)=>setSelectedImage(e.target.files[0])} />
                                                        <div class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                                                    </label>
                                                    {/* <div class="title text-indigo-500 uppercase"> </div> */}
                                                </div>
                                                    <p className='truncate'>{selectedImage ? `File name: ${selectedImage.name}` : <div class="title text-indigo-500 text-center uppercase">upload image </div>}</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-evenly items-center border-2  rounded-lg'>
                                            <button onClick={() => setimgOpen(!imgOpen)} className='flex items-center justify-center flex-1 gap-1 md:px-5 text-sm md:text-xl font-semibold hover:bg-slate-300 hover:rounded-lg  py-2 cursor-pointer '><span className='md:text-2xl'><FcPicture /></span>  Photos</button>
                                            <button className='flex items-center justify-center flex-1 gap-1 md:px-5 text-sm md:text-xl font-semibold hover:bg-slate-300 hover:rounded-lg  py-2 cursor-pointer '> <span className='md:text-2xl'><FcVideoCall /></span>Videos</button>
                                            <button className='flex items-center justify-center flex-1 gap-1 md:px-5 text-sm md:text-xl font-semibold hover:bg-slate-300 hover:rounded-lg  py-2 cursor-pointer '> <span className='md:text-2xl'><FcComments /></span>Activity</button>
                                        </div>

                                    </div>
                                    <div className="mt-4 w-full ">
                                        <button onClick={sendpost} className={`bg-blue-400 w-full flex items-center justify-center rounded-lg text-xl font-semibold text-white py-1  ${!selectedImage && !Inp ? 'hidden' : 'flex'} ` }>Post</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>

    )
}

export default Modal