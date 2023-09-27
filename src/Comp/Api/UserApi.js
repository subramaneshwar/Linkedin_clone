import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { auth, db, provider } from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc, where } from "firebase/firestore"
import { createContext, useEffect, useState } from "react";


export const MyContext = createContext();
const AppContext = ({children}) =>{

  let userRef = collection(db, "users");
  let likeRef = collection(db, "likes");
  let commentsRef = collection(db, "comments");
  const [Users, setUsers] = useState([])
  
  const [Data, setData] = useState([])

  const RegisterApi = async (email, pass, name, profile) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, pass)
      const res = await updateProfile(data.user, {
        displayName: name,
        photoURL: profile,
      })
      const user = data.user;
      console.log(user);
      const obj ={
        uid: user?.uid,
        displayName: name,
        email: email,
        photoURL: profile,
        providerId: "email/password",
      }
  
      await addDoc(userRef,obj);
      return data
      
    } catch (error) {
      return error
    }
  
  }

  const LoginAPi = async (email, pass) => {
    console.log(email, pass);
    try {
      const data = await signInWithEmailAndPassword(auth, email, pass)
      return data
  
    } catch (error) {
      return error
    }
  };

  const getAllUsers = async () => {
    onSnapshot(userRef,  (response) => {
       setUsers(
         response.docs.map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
      );
    });
  };

  async function GetData() {
    const url = 'https://tiktok-video-feature-summary.p.rapidapi.com/feed/search?keywords=Hindi&count=40&cursor=0&region=US&publish_time=180&sort_type=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9d5249968amsh9cbe2acb24e40d1p160a8ajsnf3d65019b584',
            'X-RapidAPI-Host': 'tiktok-video-feature-summary.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result?.data?.videos)
        
        // console.log(result?.data?.videos);
    } catch (error) {
        console.error(error);
    }
}
  useEffect(() => {
    getAllUsers()
    GetData()
  }, [])
  
  const  google = async (auth, provider) => {
    const res = await signInWithPopup(auth, provider)
    const user = res.user
    const q = query(userRef, where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(userRef, {
        uid: user?.uid,
        displayName: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        authProvider: res?.providerId,
      });
    }
  }
  const likePost = (userId,postId,liked)=>{
    try {
      let docToLike = doc(likeRef, `${userId}_${postId}`);
      if (liked) {
        deleteDoc(docToLike);
      } else {
        setDoc(docToLike, { userId, postId });
      }
    } catch (err) {
      console.log(err);
    }
  }
  const getLikesByUser = (userId, postId, setLiked, setLikesCount) => {
    try {
      let likeQuery = query(likeRef, where("postId", "==", postId));
  
      onSnapshot(likeQuery, (response) => {
        let likes = response.docs.map((doc) => doc.data());
        let likesCount = likes?.length;
  
        const isLiked = likes.some((like) => like.userId === userId);
  
        setLikesCount(likesCount);
        setLiked(isLiked);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const postComment = (postId, comment, name,photoURL) => {
    try {
      addDoc(commentsRef, {
        postId,
        comment,
        timeStamp:serverTimestamp(), 
        name,
        photoURL
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getComments = (postId, setComments) => {
    try {
      let singlePostQuery = query(commentsRef, where("postId", "==", postId));
      // let singlePostQuery = query(commentsRef, orderBy("timeStamp","asc"));
      onSnapshot(singlePostQuery, (response) => {
        const comments = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
  
        setComments(comments?.sort((a, b) => a?.timeStamp?.seconds - b?.timeStamp?.seconds));
      });
    } catch (err) {
      console.log(err);
    }
  };

  const initialState = {
    signInWithGoogle: google,
    loginWithEmailAndPassword: LoginAPi,
    registerWithEmailAndPassword: RegisterApi,
    userData: Users,
    LikePost:likePost,
    GetLikes:getLikesByUser,
    PostComment:postComment,
    GetComments:getComments,
    Data:Data,
  };
  
  return(
    <div>
      <MyContext.Provider value={initialState}>
        {children}
      </MyContext.Provider>
    </div>
  )
}
export default AppContext













