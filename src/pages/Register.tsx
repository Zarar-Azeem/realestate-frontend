import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthResponse } from '../types/UserTypes'
import { useRegisterMutation } from '../slices/authApiSlice'
import { setUser } from '../slices/authSlice'
import { useDispatch } from 'react-redux'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ register , { error: err}] = useRegisterMutation()
    const [error, setError] = useState<string>('')
    
    const handleSubmit = async (e : React.FormEvent<EventTarget>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)

        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        try {
            const res = await register({name, email, password}).unwrap()
            if(res.success){
                dispatch(setUser(res.user))
                navigate('/profile')
            }


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