import React, { useState } from 'react'
import LargeCard from '../components/LargeCard'
import Chat from '../components/Chat'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
    const [tab, setTab] = useState('mylist')

    const toggleTabs = ( tab: string) =>{
        setTab(prev => tab)
    }

  return (
    <div className='w-full flex flex-col  relative'>
        <div className="col-span-3 bg-slate-200">
            <div className='flex flex-col bg-white pt-6'>
                <div className='flex items-center h-[5rem] justify-between'>
                    <div className='flex items-center'>
                        <div className='rounded-full bg-black w-16 h-16 text-center'>2</div>
                        <div className='pl-4'>Name</div>
                    </div>
                    <div>
                        <Link to="/updateproperty"><button className='button w-[10rem]'>Update Profile</button></Link>
                    </div>
                </div>
                <div className='flex justify-between items-center h-[5rem] gap-2 py-2'>
                    <div className='flex flex-col gap-2 py-2'>
                        <p><span className='font-semibold'>Phone Number:</span> 1234567</p>
                        <p><span className='font-semibold'>Email: </span>test@gmail.com</p>
                    </div>
                    <div>
                        <Link to="/addproperty"><button className='button-cta w-[10rem]'> Add Property</button></Link>
                    </div>
                </div>
                <hr />
                <div className=' flex flex-col profile_utilities'>
                    <div className='flex justify-between  w-full mx-auto'>
                        <button className='w-1/2 hover:bg-slate-200 p-4' onClick={()=> toggleTabs('mylist')}>My Properties</button>
                        <button className='w-1/2 hover:bg-slate-200 p-4' onClick={() => toggleTabs('messages')}>Messages</button>
                    </div>
                    <hr className='my-0 py-0'/> 
                    <div className='mt-4 h-full'>
                    { tab == "mylist" ?
                    <div className='flex flex-col gap-4'>
                        <LargeCard/> 
                        <LargeCard/> 
                        <LargeCard/> 
                        <LargeCard/> 
                        <LargeCard/> 
                    </div>
                      :
                      <div className=''>
                          <Chat />
                      </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage