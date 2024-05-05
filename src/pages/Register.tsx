import axios, { AxiosError }  from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthResponse } from '../types/UserTypes'

const Register = () => {
    const navigate = useNavigate()

    const [error, setError] = useState<string>('')
    
    const handleSubmit = async (e : React.FormEvent<EventTarget>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)

        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")
        try {
            const res : AuthResponse= await axios.post(" http://localhost:3000/api/user/register", {
                name,email,password
            })
            console.log("Response", res.data.message)
            navigate("/")


        } catch (error : any ) {
            if(error.response && error.response.data){
                setError(error.response.data.message || "Login Failed")
            } else {
                setError('Network error or server unavailable');

            }
        }
        

    }

    return (
            <div className="form-container">
                <h2 className='text-center font-bold text-2xl'> Create An Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input-field'>
                        <label className='ml-1' htmlFor="name">Name</label>
                        <input className={error && "border-red-500"}  type="text" name='name'/>
                    </div>
                    <div className='input-field'>
                        <label className='ml-1' htmlFor="email">Email</label>
                        <input className={error && "border-red-500"}  type="text" name='email'/>
                    </div>
                    <div className='input-field'>
                        <label className='ml-1' htmlFor="password">Password</label>
                        <input className={error && "border-red-500"}  type="password" name='password'/>
                    </div>
                    {error && <span className='text-red-500'>{error}</span>}
                    <div className='flex justify-center'>
                        <button className="button-cta mt-2" type='submit'>Register</button>
                    </div>
                </form>
            </div>
    )
}

export default Register