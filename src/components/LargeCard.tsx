import React, { useEffect, useState } from 'react'
import { Property } from '../types/PropertyTypes'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useDeletePropertyMutation, useGetPropertiesQuery, useGetSavedPropertiesQuery, useSavePropertyMutation } from '../slices/propertyApiSlice'
import { Link } from 'react-router-dom'

const LargeCard  = (props : Property) => {
    const {title ,price, description,images, userId, _id } = props
    const [count, setCount] = useState(0)
    const user = useSelector((state: RootState) => state.auth.user?.id)
    const properties = useSelector((state : RootState) => state.property.savedProperties)

    const { refetch } = useGetPropertiesQuery({})
    const { refetch : ref } = useGetSavedPropertiesQuery({})
    const [ deleteProperty ] = useDeletePropertyMutation()
    const [ saveProperty ]  = useSavePropertyMutation()
    useEffect(()=>{
        console.log(count)
    },[count])
    
    const handleDelete = async ()=>{
       try {
        const res =  await deleteProperty(_id).unwrap();
        setCount(prev => prev + 1)
        console.log(res)
        refetch()
    } catch (error) {
        console.error('Failed to delete property:', error);
    }
    
}

const handleBookmark = async () => {
    if (user) {
        try {
            const res = await saveProperty(_id)
            ref()
            console.log(res)
        } catch (error) {
            console.error('Failed to delete property:', error);
            
        }   
    } else {
        alert('Please login to bookmark')
    }
    
    }

  return (
    <div className='bg-white flex w-full h-40 shadow-md rounded-lg cursor-pointer hover:shadow-lg'>
        <img className='basis-2/6 bg-no-repeat bg-cover bg-center rounded-lg hover:shadow-md cursor-pointer h-full center rounded-l-lg w-[1.5rem]'
         src={images[0]} alt="" />
        <div className="flex-grow flex justify-between flex-col p-4">
            <div className="flex justify-between text-lg font-semibold w-full">
                <div className='flex justify-between w-full'>
                    <p>{title}</p>
                    <div className='flex gap-3'>
                        <Link to={`/propertypage/${_id}`}><button className='rounded-md py-2 px-2 bg-slate-200 hover:bg-slate-300 text-xs'>View Property</button></Link>
                        {user === userId && <button 
                            className='rounded-md py-y px-2 bg-red-200 hover:bg-red-300 text-xs'
                            onClick={handleDelete}
                            >Delete</button>}
                    </div>
                </div>
                
            </div>
            <p className='text-xs text-gray-500'>{description.location}</p>
            <p>Price: ${price}</p>
            <div className='flex gap-4 justify-between text-[0.75rem] mt-1'>
                <div className='flex gap-4'>
                    <div className='flex border-none rounded-sm bg-slate-100 items-center gap-2 p-2'>
                        <p><i className="fa-solid fa-bed"></i></p>
                        <p>{description.bedrooms}</p>
                    </div>
                    <div className='flex border-none rounded-sm bg-slate-100 items-center gap-2 p-2'>
                        <p><i className="fa-solid fa-bath"></i></p>
                        <p>{description.bathrooms}</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='flex border-none rounded-sm bg-slate-100 items-center gap-2 p-2 hover:bg-gray-300'>
                        <button onClick={handleBookmark}><i className={properties.some(post => post._id === _id) ? `text-red-500 fa-solid fa-heart` : 'fa-regular fa-heart'}></i></button>
                    </div>
                    <div className='flex border-none rounded-sm bg-slate-100 items-center gap-2 p-2 hover:bg-gray-300'>
                        <p><i className="fa-regular fa-message"></i></p>
                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default LargeCard