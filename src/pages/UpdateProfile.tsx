import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useGetAuthUserQuery, useUpdateUserMutation } from '../slices/userApiSlice'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {

    const user = useSelector((state : RootState)=> state.auth.user)
    const navigate = useNavigate()

    const [error, setError ] = useState<string>('')

    const { refetch } = useGetAuthUserQuery({})
    const [ update , { error : err }] = useUpdateUserMutation()
    
    
    const handleSubmit = async (e : React.FormEvent<EventTarget>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)

        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const number = formData.get("number") as string
        const password = formData.get("password") as string
        const avatar = formData.get("avatar") as string
        try {
            const res  = await update({ name, email, password , number , avatar}).unwrap()
            console.log(avatar)
            if(res.success) {
                refetch()
                navigate('/profile')
                console.log(res.message)
            }
        } catch (error) {
            setError(err as string)
        }

    }

    return (
        <div>
            <form className='form-container' onSubmit={handleSubmit} encType="multipart/form-data">
                <p className='text-center text-xl font-medium'>Update Profile</p>
                <div className='flex items-center py-2 px-4'>
                    <div className='rounded-full bg-black w-16 h-16 text-center basis-1/5'>2</div>
                    <div className='input-field flex-grow'>
                        <input className='file-input rounded-lg' type="file" name="avatar" id="avatar" />
                    </div>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="name">Name</label>
                    <input type="text" className={error && "border-red-500" }  name='name' defaultValue={user?.name}/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="email">Email</label>
                    <input type="email" className={error && "border-red-500" }  name='email' defaultValue={user?.email}/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="phonenumber">Phone Number</label>
                    <input type="number" className={error && "border-red-500" }  name='number' defaultValue={user?.number}/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="password">Password</label>
                    <input type="password" className={error && "border-red-500" }  name='password'/>
                </div>
                {error && <span> {error} </span>}
                <div className="input-field">
                    <button className="button-cta w-full" type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile