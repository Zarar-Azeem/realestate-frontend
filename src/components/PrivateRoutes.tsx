import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { RootState } from '../store'

const PrivateRoutes = () => {
     const auth = useSelector((state:RootState)=> state.auth.authenticated)
    return(
         auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes