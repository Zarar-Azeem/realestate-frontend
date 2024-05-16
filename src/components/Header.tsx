
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <header className='sm:w-screen bg-slate-200 h-[4.5rem] flex items-center sticky top-0 z-10'>
            <nav className='container flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>Logo</h2>
                {localStorage.getItem('token') ? (<ul className='sm:flex gap-4 hidden'>
                   <Link to="/"><button className="button">Home</button></Link>
                   <Link to="/properties"><button className="button">Properties</button></Link>
                   <Link to="/profile"><button className="button">Profile</button></Link>
                   <Link to="/login" onClick={handleLogout}><button className="button">Logout</button></Link>
                </ul>) :
                (<ul>
                   <Link to="/login"><button className="button mr-3">Sign In</button></Link>
                   <Link to="/register"><button className="button-cta">Register</button></Link>
                </ul>)}
            </nav>
        </header>
    )
}

export default Header