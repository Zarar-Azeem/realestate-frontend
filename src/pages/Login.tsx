import axios  from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthResponse } from '../types/UserTypes'
import { api } from '../api/api'


const Login = () => {
    const navigate = useNavigate()

    const [error, setError] = useState<string>('')

    const handleSubmit = async (e : React.FormEvent<EventTarget>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)

        const email = formData.get("email")
        const password = formData.get("password")
        try {
            const res : AuthResponse = await api.post("/api/user/login", {
                email,password
            })
            if(res.data.success){
                localStorage.setItem('token', res.data.token)
                navigate("/")
                console.log("Response", res.data.message)
            }

        } catch (error : any) {
            if (error.response && error.response.data) {
                setError(error.response?.data.message || 'Login failed');
              } else {
                setError('Network error or server unavailable');

              }
        }
        

    }
  return (
    <div className='form-container'>
        <h2 className='text-center font-bold text-2xl'>Sign In to Your Account</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-field'>
                    <label className='ml-1' htmlFor="email">Email</label>
                    <input className={error && "border-red-500" }  type="name" name='email'/>
                </div>
                <div className='input-field'>
                    <label className='ml-1' htmlFor="password">Password</label>
                    <input className={error && "border-red-500"} type="password" name='password'/>
                </div>
                {error && <span className='text-red-500 '>{error}</span>}
                <div className='flex flex-col items-center'>
                    <button className="button-cta mt-2"><i className="mr-3 fa-solid fa-right-to-bracket"></i> Sign In</button>
                    <p className='my-4 text-sm'>Not a Member?<Link className='text-blue-500 ml-1' to="/register">Register now and get started!</Link></p>

                </div>
            </form>
    </div>
  )
}

export default Login