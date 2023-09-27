import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import Input from './Input'
import Modal from './Modal'
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/userSlice'
import { db, storage } from '../../firebaseConfig'
import {  collection, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Loader from '../Loader/Loader';
function Feed() {
  const [posts, setposts] = useState([])
  const [Inp, setInp] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgurl, setimgurl] = useState(null)
  const user = useSelector(selectUser)
  let [isOpen, setIsOpen] = useState(false)
  const dbRef = collection(db, "posts");
  const postRef = doc(collection(db, "posts"))
  const document = postRef.id;
  const [Loading, setLoading] = useState(true)
  // const likesRef = doc(collection(db, "posts", id, "likes"));
  // const likesCollection = collection(db, "posts", id, "likes");
  const sendpost =() => {
    let obj ={}
    if (selectedImage) {
      const file = selectedImage
      const storageRef = ref(storage, `files/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);
      // console.log("img block");
       uploadTask.on("state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
          alert(error);
        },
         async () => {
          const img = await getDownloadURL(uploadTask.snapshot.ref).then((resp)=>resp);
           obj = {
            message: Inp,
            image: img,
            documentId: document,
            timeStamp: serverTimestamp(),
            photoUrl: user.photoURL || "",
            name: user.displayName,
            email: user.email,
            userId:user.uid
          }
          setDoc(postRef, obj).then(() => {
            toast.success('post has been added sucessfully')
          
          }).catch((err) => {
            console.log(err);
          })
        }
      )
    }else{
       obj = {
        message: Inp,
        image: null,
        documentId: document,
        timeStamp: serverTimestamp(),
        photoUrl: user.photoURL || "",
        name: user.displayName,
        email: user.email,

      }
      setDoc(postRef, obj).then(() => {
        toast.success('post has been added sucessfully')
      
      }).catch((err) => {
        console.log(err);
      })

    }    
    setIsOpen(!isOpen)
    setSelectedImage(null)
    setimgurl(null)
    setInp(null)
  }
  
  const getpost = () => {
    const q = query(dbRef, orderBy("timeStamp", "desc"));
    onSnapshot(q, (res) => {
      setLoading(false)
      setposts(res.docs.map((docs) => {
        return { ...docs.data() }
      }));
    })
  }


  useEffect(() => {
    getpost()
  }, []) 
  // console.log(posts);
  return (
    <div className='px-2  md:my-3 bg-gray-100 '>
 
      <Input isOpen={isOpen} setIsOpen={setIsOpen} />
      <ToastContainer/>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setSelectedImage={setSelectedImage} selectedImage={selectedImage} Inp={Inp} setInp={setInp} sendpost={sendpost}   />
      {
          Loading ? <Loader/> :
            <div className='mb-10'>
          <FlipMove>
          {
            posts?.map((post,i)=>(
              <Posts key={i} data={post} />
              ))
            }
          </FlipMove>
            </div>
      }
      
    </div>
  )
}

export default Feed