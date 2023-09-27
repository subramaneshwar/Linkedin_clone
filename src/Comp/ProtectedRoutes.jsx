import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../app/userSlice'
import {  Navigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
    const user = useSelector(selectUser)
    if(!user){
        return <Navigate to="/login" />
    }else{
        return children
    }
}

export default ProtectedRoutes