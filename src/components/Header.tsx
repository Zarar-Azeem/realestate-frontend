
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../slices/authApiSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Header = () => {
    const navigate = useNavigate()
    const [ logout ] = useLogoutMutation()
    const auth = useSelector((state: RootState) => state.auth.authenticated)
    const handleLogout = async () => {
        await logout({})
        window.location.reload()
        navigate('/login')
    }
    return (
        <header className='sm:w-screen bg-slate-200 h-[4.5rem] flex items-center sticky top-0 z-10'>
            <nav className='container flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <h2 className='text-2xl font-bold mr-4'>Logo</h2>
                <Link to="/"><button className="button">Home</button></Link>
                <Link to="/properties"><button className="button">Properties</button></Link>
            </div>
                {auth ? (<ul className='sm:flex gap-4 hidden'>
                   <Link to="/profile"><button className="button">Profile</button></Link>
                   <Link to="/login" onClick={handleLogout}><button className="button">Logout</button></Link>
                </ul>) :
                (<ul className='flex justify-between'>
                        <Link to="/login"><button className="button mr-3">Sign In</button></Link>
                        <Link to="/register"><button className="button-cta">Register</button></Link>
                    </ul>)}
            </nav>
        </header>
    )
}

export default Header