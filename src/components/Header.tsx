import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='sm:w-screen bg-slate-200 h-[4.5rem] flex items-center sticky top-0 z-10'>
            <nav className='container flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>Logo</h2>
                <ul className='sm:flex gap-4 hidden'>
                   <Link to="/"><button className="button">Home</button></Link>
                   <Link to="/about"><button className="button">About</button></Link>
                   <Link to="/properties"><button className="button">Properties</button></Link>
                </ul>
                <ul>
                   <Link to="/login"><button className="button mr-3">Sign In</button></Link>
                   <Link to="/register"><button className="button-cta">Register</button></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header