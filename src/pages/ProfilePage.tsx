import React, { useEffect, useState } from 'react'
import LargeCard from '../components/LargeCard'
import { Link } from 'react-router-dom'
import { User } from '../types/UserTypes'
import { useGetAuthUserQuery } from '../slices/userApiSlice'
import { Property } from '../types/PropertyTypes'
import { useGetUserPropertiesQuery } from '../slices/propertyApiSlice'
import MyProperties from '../components/MyProperties'
import SavedProperties from '../components/SavedProperties'

const ProfilePage = () => {

    const [tab, setTab] = useState('mylists')
    const { data : user } = useGetAuthUserQuery({})
    const toggleTabs = ( tab: string )=>{
        setTab(prev => tab)
    }
    
    
    const Tabs = () =>{
        switch(tab){
            case "mylists" : return <MyProperties/>
            case "savedproperties" : return <SavedProperties/>
            case "messages": return <h2 className='text-center pt-5 font-bold'>To be Added</h2>
        }
    }

    return (
        <div className='w-full flex flex-col  relative'>
            <div className="col-span-3 bg-slate-200">
                <div className='flex flex-col bg-white pt-6'>
                    <div className='flex items-center h-[5rem] justify-between'>
                        <div className='flex items-center'>
                            <div className='rounded-full bg-black w-16 h-16 flex'><img className='rounded-full flex items-center' src={user?.avatar} alt="" /></div>
                            <div className='pl-4'>{user?.name}</div>
                        </div>
                        <div>
                            <Link to="/updateproperty"><button className='button w-[10rem]'>Update Profile</button></Link>
                        </div>
                    </div>
                    <div className='flex justify-between items-center h-[5rem] gap-2 py-2'>
                        <div className='flex flex-col gap-2 py-2'>
                            <p><span className='font-semibold'>Phone Number: </span> {user?.number}</p>
                            <p><span className='font-semibold'>Email: </span>{user?.email}</p>
                        </div>
                        <div>
                            <Link to="/addproperty"><button className='button-cta w-[10rem]'>Add Property</button></Link>
                        </div>
                    </div>
                    <hr />
                    <div className=' flex flex-col profile_utilities'>
                        <div className='flex justify-between  w-full mx-auto'>
                            <button className='w-1/2 hover:bg-slate-200 p-4' onClick={()=> toggleTabs('mylists')}>My Properties</button>
                            <button className='w-1/2 hover:bg-slate-200 p-4' onClick={()=> toggleTabs('savedproperties')}>Saved Properties</button>
                            <button className='w-1/2 hover:bg-slate-200 p-4' onClick={() => toggleTabs('messages')}>Messages</button>
                        </div>
                        <hr className='my-0 py-0'/> 
                        <div className='mt-4 h-full'>
                        {Tabs()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage