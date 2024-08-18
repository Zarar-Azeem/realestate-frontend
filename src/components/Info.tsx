import React from 'react'
import Slider from './Slider'
import { Property } from '../types/PropertyTypes'

const Info = ({title, price , body ,images, description}: Property) => {
   
    return (
        <div className='h-full'>
            <div className='sm:h-[60%] relative'>
                <Slider images = {images}/>
            </div>
            <div className='h-[40%] flex flex-col py-4 sm:py-4'>
                <div className='grid grid-cols-5 grid-cols-auto'>
                    <div className='flex flex-col col-span-4 gap-4 '>
                        <p className='text-xl'>{title}</p>
                        <p className='text-sm text-gray-500'>{description?.location}</p>
                        <p className='w-fit py-1 px-2 text-xl rounded-sm bg-slate-200'>${price}</p>
                    </div>
                </div>
                    <p className='pt-4 text-sm sm:text-[0.95rem]'>{body}</p>
            </div>
        </div>
    )
}

export default Info