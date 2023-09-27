import React, { useEffect, useState } from 'react';
import './App.css';
// import Sidebar from './Components/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './app/userSlice';
import Login from './Comp/Login/Login';
import { auth } from './firebaseConfig';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Register from './Comp/Login/Register';
// import Protectedroute from './Components/Protectedroute';
import NavBar from './Comp/NavBar';
import SidebarMain from './Comp/Sidebar/SidebarMain';
import HomeLayout from './Comp/Layouts/HomeLayout';
import Loader from './Comp/Loader/Loader';
import Profile from './Comp/Layouts/ProfileLayout';
import ProfileLayout from './Comp/Layouts/ProfileLayout';
import Profileuser from './Comp/Profile/Profileuser';
import ProfileuserLayout from './Comp/Layouts/ProfileuserLayout';
import AppContext from './Comp/Api/UserApi';
import SearchPage from './Comp/Layouts/SearchPage';
import ProtectedRoutes from './Comp/ProtectedRoutes';
import Reels from './Comp/Reels/Reels';
import ReelsLayout from './Comp/Layouts/ReelsLayout';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const [Loadng, setLoadng] = useState(true)
  const [AllUsers,setAllUsers] =useState([])
  // // const Data = useSelector(state => state)
  const Navigate = useNavigate()
  useEffect(() => {

    console.log("hi");

    auth.onAuthStateChanged(userAuth => {

      if (userAuth) {
        // console.log(userAuth);
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }));
        setLoadng(false)
        // <Navigate to="/"/>
      } else {
        dispatch(logout());
        setLoadng(false)

      }
    })
    
  }, [])
  if(Loadng){
    return(<Loader/>)
  }
  return (
    <AppContext>

    <div className='bg-gray-100 '>
       
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<ProtectedRoutes><HomeLayout/></ProtectedRoutes>} />
        <Route path='/profile' element={<ProtectedRoutes><ProfileLayout/></ProtectedRoutes>} />
        <Route path='/search' element={<ProtectedRoutes><SearchPage/></ProtectedRoutes>} />
        <Route path='*' element={<h1>NotFound</h1>} />      
        </Routes>
  

    </div>
    </AppContext>
  );
}

export default App;
