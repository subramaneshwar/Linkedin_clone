import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/feed/Feed';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './app/userSlice';
import Login from './Components/Login';
import { auth } from './firebaseConfig';
import Widgets from './Components/Widgets/Widgets';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const Data = useSelector(state => state)
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL
          
        }));

      }else{
        dispatch(logout())
      }
    })
  
    
  }, [])
  
  return (
    <div className="App bg-[#f3f2ef] flex flex-col w-full md:items-center ">

      {/* header */}
      <Header />
      {/* appbody */}

      {
        !user ? (<Login/>) : 
        (
          <div className='appbody md:flex mt-3  md:mt-10 xl:mx-44 lg:mx-18'>

        {/* sidebar */}
        <Sidebar />
        {/* feed  */}
        <Feed />
        {/* widgets */}
          <Widgets/>
      </div>)
      }

    </div>
  );
}

export default App;
