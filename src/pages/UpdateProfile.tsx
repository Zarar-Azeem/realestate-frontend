import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useGetAuthUserQuery, useUpdateUserMutation } from '../slices/userApiSlice'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {

    const user = useSelector((state : RootState)=> state.auth.user)
    const navigate = useNavigate()

    const [ update , { isLoading }] = useUpdateUserMutation()
    const { refetch} = useGetAuthUserQuery({})

    const [ error , setError] = useState('')
    
    const uploadFile = async (e : any) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log(formData)
        try {
            const response = await update(formData).unwrap();
            console.log(response)
            if(response.success){
                refetch()
                navigate('/profile')
            }
        } catch (err : any) {
            setError(err.data.message)
            console.log(err);
        }
    }
    return (
        <div>
            <form className='form-container' onSubmit={uploadFile} encType="multipart/form-data">
                <p className='text-center text-xl font-medium'>Update Profile</p>
                <div className='flex items-center py-2 px-4'>
                <div className='rounded-full bg-black w-16 h-16 flex'><img className='rounded-full flex items-center' src={user?.avatar} alt="" /></div>
                    <div className='input-field flex-grow'>
                        <input  className='file-input rounded-lg' 
                                type="file" 
                                name="avatar"
                                />
                    </div>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="name">Name</label>
                    <input  type="text" 
                            className={error && "border-red-500" }  
                            name='name' 
                            defaultValue={user?.name}/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="email">Email</label>
                    <input  type="email" 
                            className={error && "border-red-500" }  
                            name='email' 
                            defaultValue={user?.email}/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="phonenumber">Phone Number</label>
                    <input  type="number" 
                            className={error && "border-red-500" }  
                            name='number' 
                            defaultValue={user?.number}/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="password">Password</label>
                    <input  type="password" 
                            className={error && "border-red-500" }  
                            name='password'/>
                </div>
                {error && <span className='text-red text-center'> {error} </span>}
                <div className="input-field">
                    <button className="button-cta w-full disabled:bg-slate-400" disabled={isLoading ? true : false} type='submit'>{isLoading? 'Updating' : 'Update'}</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile