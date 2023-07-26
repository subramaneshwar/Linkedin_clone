import React, { useEffect, useState } from 'react'
import { BsPencilFill } from 'react-icons/bs'
import InputOptions from './InputOptions'
import { AiFillPicture } from 'react-icons/ai'
import { MdEventAvailable } from 'react-icons/md'
import { RxVideo } from 'react-icons/rx'
import { MdArticle } from 'react-icons/md'
import Post from './Post'
import { db, storage } from '../../firebaseConfig'
import FlipMove from 'react-flip-move';
import { serverTimestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/userSlice'
import Modal from './Modal'

function Feed() {

  const [posts, setposts] = useState([])
  const [Inp, setInp] = useState("")
  const [selectedImage, setSelectedImage] = useState("");
  const user = useSelector(selectUser)
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  // console.log(Inp);
  const closeModal = () => {
    setModalOpen(false);
    setInp("")
    setSelectedImage("")
  };

  // ------
  
  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      setposts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })
      ))
    });
    // console.log(user);
  }, [posts])
  const sendpost = () => {

    console.log(selectedImage);
    console.log(Inp);

    if (selectedImage !== "") {
      console.log("image is there");
      const upload = storage.ref(`images/${selectedImage.name}`).put(selectedImage);
      upload.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      }, (err) => alert(err),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: Inp,
            photoUrl: user.photoURL || "",
            timestamp: serverTimestamp(),
            image: downloadURL,
          })
        })
    }
    else if (selectedImage === "") {
        console.log("image is null")
      db.collection("posts").add({
        name: user.displayName,
        description: user.email,
        message: Inp,
        photoUrl: user.photoURL || "",
        timestamp: serverTimestamp(),
        image: '',
      })
    }
    setInp("")
    setSelectedImage("")
    closeModal()
  }
  // console.log(selectedImage);
  return (
    <div className='feed md:flex-[0.8] lg:flex-[0.6]  md:mx-5 md:w-full  mx-1'>
      <div className="feed_inputcontainer bg-white p-[10px] pb-[10px] rounded-xl mb-5 ">
        <div className="feed_input flex p-[10px] text-gray-500 pl-4 border-solid border-[1px] border-[#D3D3D3] rounded-[30px]">
          <BsPencilFill />
          <form className='flex'>
            {/* onChange={e => setInp(e.target.value)} */}
            <input onClick={openModal} value={Inp} type="text" className="flex-1 ml-[10px] outline-[0] font-semibold" />
            {/* <button className=' hidden' type='submit' onClick={sendpost}>Send</button> */}
          </form>


          {/* <!-- Button trigger modal --> */}
        </div>
        <div>
          {/* <button onClick={openModal}>Open Modal</button> */}
          <Modal isOpen={isModalOpen} onClose={closeModal} onClick={sendpost} setInp={setInp} Inp={Inp}
            selectedImage={selectedImage} setSelectedImage={setSelectedImage}
          />
        </div>
        <div className="feed_inputOptions flex justify-evenly">
          <InputOptions Icon={AiFillPicture} title='Photo' color='#70b5f9' inps={openModal}   />
          <InputOptions Icon={RxVideo} title='Video' color='#e7a33e'   inps={openModal}  />
          <InputOptions Icon={MdEventAvailable} title='Event' color='#cocbcd'  inps={openModal}  />
          <InputOptions Icon={MdArticle} title='Write article' color='#7fc15e'   inps={openModal}  />
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {
          posts.map(({ id, data: { name, description, message, photoUrl, image, likes } }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              image={image}
              likes={likes}
            />
          ))
        }

      </FlipMove>
      {/* <Post name='sonn sanghe' description='this is a test' message="wow worked" /> */}
    </div>
  )
}
export default Feed