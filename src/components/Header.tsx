
import React, { ReactElement, ReactEventHandler, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../slices/authApiSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Header = () => {
    const navigate = useNavigate()
    const ref = useRef<any>();
    const [ logout ] = useLogoutMutation()
    const [isOpen , setIsOpen] = useState(false)
    const auth = useSelector((state: RootState) => state.auth.authenticated)
    const handleLogout = async () => {
        await logout({})
        window.location.reload()
        closeMenu()
        navigate('/login')
    }
    const closeMenu = ()=>{
        setIsOpen(false)
    }
    useEffect(()=>{
        const handleClickOutside = (event : any) => {
            // Do nothing if clicking ref's element or descendent elements
            if (ref && !ref.current.contains(event.target) && isOpen) {
              setIsOpen(false);
            }
          };
        document.addEventListener("click" , handleClickOutside)
        return () => {
            // Clean it on rerender
            document.removeEventListener("click", handleClickOutside);
          };
    },[ref, isOpen, setIsOpen])
    return (
        <header ref={ref} className='sm:w-screen bg-slate-200 h-[4.5rem] flex items-center sticky top-0 z-10'>
            <nav className='container flex items-center justify-between'>
                <h2 className='text-2xl font-bold mr-4 underline'>Kaizen</h2>
                <div className='sm:flex gap-2 items-center hidden'>
                    <Link to="/"><button className="button">Home</button></Link>
                    <Link to="/properties"><button className="button">Properties</button></Link>
                    {auth ? (
                        <>
                        <Link to="/profile"><button className="button">Profile</button></Link>
                        <Link to="/login" onClick={handleLogout}><button className="button">Logout</button></Link>
                        </>

                        ) :
                        (
                        <Link to="/login"><button className="button-cta mr-3">Sign In</button></Link>
                        )}
                </div>
                <div className="sm:hidden relative w-1/2 flex justify-end">
                    <button className='button-cta' onClick={() => setIsOpen(prev => !prev)}>{!isOpen ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-x"></i>}</button>
                    <ul className={`flex-col ${isOpen ? 'flex' : 'hidden'} absolute top-14 w-full gap-2 bg-slate-300 p-2 rounded-lg`}>
                        <Link onClick={closeMenu} className='dropdown-button' to="/">Home</Link>
                        <Link onClick={closeMenu} className='dropdown-button' to="/properties">Properties</Link>
                        {auth ? (
                        <>
                        <Link onClick={closeMenu} to="/profile" className="dropdown-button">Profile</Link>
                        <div className='border-t-2 border-slate-500 mx-1'></div>
                        <Link  to="/login" onClick={handleLogout} className="dropdown-button text-red-500 hover:bg-red-300">Logout</Link>
                        </>

                        ) :
                        (
                        <>  
                        <div className='border-t-2 border-slate-500 mx-1'></div>
                            <Link onClick={closeMenu} to="/login"><button className=" button-cta w-full text-start">Sign In</button></Link>
                        </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header