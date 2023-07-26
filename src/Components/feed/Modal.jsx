import React, { useState } from 'react';
import { BsImage } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/userSlice';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage } from '@fortawesome/free-solid-svg-icons';
const Modal = ({ isOpen, onClose, onClick, Inp, setInp,selectedImage, setSelectedImage,videoFile, setVideoFile }) => {
    const user = useSelector(selectUser)

    // const [inp, setinp] = useState("")
    if (!isOpen) {
        return null;
    }
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     setSelectedImage(URL.createObjectURL(file));
    // };
    
	function handleImage(event) {
		let image = event.target.files[0];

		if (image === "" || image === "") {
			alert(`Not an image. This file is: ${typeof imageFile}`);
		}else{
            setSelectedImage(image);
        }
	}
    return (
        <div className="fixed inset-0 flex top-[100px]  justify-center z-50 ">
            <div className="bg-white p-4 rounded shadow-lg  flex  flex-col w-full mx-5 md:mx-0 md:w-[50%] md:h-[500px] h-[350px]">
                <div className='flex-[0.2]  flex justify-between'>

                    <div className='flex '>

                        {
                            user.photoURL ? <img class="sibebar_avatar  mb-3 w-10 h-10 rounded-full" src={user.photoURL} alt="Rounded avatar" /> :
                                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <span className="font-medium text-gray-600 dark:text-gray-300">{user.email.toUpperCase().slice(0, 2)}</span>
                                </div>

                        }
                        <div className='ml-2 '>
                            <h2 className='text-sm ' >{user.displayName}</h2>
                            <h4 className=' text-[#808080] text-sm'>Post to Anyone</h4>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className=" text-black ml-2  border-solid border-[1px] rounded-lg hover:bg-blue-600 w-[50px] h-[50px] font-bold bg-transparent "
                    >
                        x
                    </button>

                </div>


                <div className='flex-[0.6] flex  '>
                    <textarea
                        onChange={(e) => setInp(e.target.value)}
                        value={Inp}

                        placeholder="What do you want to talk"
                        className="border border-gray-300 p-2 mb-4  w-full text-xl  h-full outline-none border-none resize-none"
                    >
                    </textarea>



                </div>
                <div className='flex-[0.2] flex'>
                    <label htmlFor="imageInput" className="flex items-center justify-center cursor-pointer">
                        <BsImage className="mr-2" />
                        Select Image
                    </label>
                    <input
                        id="imageInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                        className="hidden"
                        
                    />
                    {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="mt-4 w-32 h-32" />}
                </div>
                <button className= {` rounded-sm border-sold border-1 bg-blue-500 w-fit p-2 font-bold text-white ${ (Inp === "" && selectedImage==="") ? "hidden" :"" } `} type='submit' onClick={onClick}>post</button>

            </div>
        </div>
    );
};

export default Modal;