import React from 'react'

const UpdateProfile = () => {
  return (
    <div>
        <form className='form-container'>
            <p className='text-center text-xl font-medium'>Update Profile</p>
            <div className='input-field w-full'>
                <label className='ml-1' htmlFor="name">Name</label>
                <input type="text" name='name'/>
            </div>
            <div className='input-field w-full'>
                <label className='ml-1' htmlFor="email">Email</label>
                <input type="email" name='email'/>
            </div>
            <div className='input-field w-full'>
                <label className='ml-1' htmlFor="phonenumber">Phone Number</label>
                <input type="number" name='phonenumber'/>
            </div>
            <div className='input-field w-full'>
                <label className='ml-1' htmlFor="password">Password</label>
                <input type="password" name='password'/>
            </div>
            <div className="input-field">
                <button className="button-cta w-full">Update</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateProfile