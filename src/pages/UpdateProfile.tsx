import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useGetAuthUserQuery, useUpdateUserMutation } from '../slices/userApiSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateProfile = () => {
    const token = useSelector((state: RootState)=> state.auth.token) 
    const user = useSelector((state : RootState)=> state.auth.user)
    const navigate = useNavigate()

    const [ update ] = useUpdateUserMutation()
    const { refetch} = useGetAuthUserQuery({})

    const [ error , setError] = useState('')
    const [fileData, setFileData] = useState<any>([]);
    const [formData, setFormData] = useState<any>({
        name:"",
        email: "",
        number:'',
        password: "",
      });

    const handleChange = (e : any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
      };
      const getFile = (event : any) => {
        if(event.target && event.target.files) {
            setFileData(event.currentTarget.files[0]);
        }
        
      };
    
    const uploadFile = async (e : any) => {
        e.preventDefault()
        const register_form = new FormData()
        console.log(formData)
        for (var key in formData) {
            register_form.append(key, formData[key])
        }
        register_form.append('avatar' , fileData)
        console.log(fileData)
        try {
            // const response = await update(register_form).unwrap();
            // console.log(response)
            // if(response.success){
            //     refetch()
            //     navigate('/profile')
            // }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <form className='form-container' onSubmit={uploadFile} encType="multipart/form-data">
                <p className='text-center text-xl font-medium'>Update Profile</p>
                <div className='flex items-center py-2 px-4'>
                    <div className='rounded-full bg-black w-16 h-16 text-center basis-1/5'>2</div>
                    <div className='input-field flex-grow'>
                        <input  className='file-input rounded-lg' 
                                type="file" 
                                name="avatar"
                                onChange={getFile}
                                />
                    </div>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="name">Name</label>
                    <input  type="text" 
                            className={error && "border-red-500" }  
                            name='name' 
                            value={formData.name}
                            onChange={handleChange}
                            defaultValue={user?.name}/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="email">Email</label>
                    <input  type="email" 
                            className={error && "border-red-500" }  
                            name='email' 
                            value={formData.email}
                            onChange={handleChange}
                            defaultValue={user?.email}/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="phonenumber">Phone Number</label>
                    <input  type="number" 
                            className={error && "border-red-500" }  
                            name='number' 
                            onChange={handleChange}
                            value={formData.number}
                            defaultValue={user?.number}/>
                </div>
                <div className='input-field w-full'>
                    <label className='ml-1' htmlFor="password">Password</label>
                    <input  type="password" 
                            className={error && "border-red-500" }  
                            onChange={handleChange}
                            value={formData.password}
                            name='password'/>
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