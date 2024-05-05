import React from 'react'
import Slider from './Slider'
import { images } from '../data'

const Info = () => {

    return (
        <div className='h-full'>
            <div className='h-[45%] '>
                <Slider images = {images}/>
            </div>
            <div className='h-[55%] flex flex-col py-16'>
                <div className='grid grid-cols-5 grid-cols-auto'>
                    <div className='flex flex-col col-span-4 gap-4 '>
                        <p className='text-xl'>Name</p>
                        <p className='text-xs text-gray-500'>Location</p>
                        <p className='w-fit py-1 px-2 text-xl rounded-sm bg-slate-200'>$1200</p>
                    </div>
                    <div>
                        <div className='h-full bg-slate-200 rounded-lg flex flex-col items-center justify-center'>
                            <div className='rounded-full bg-black w-12 h-12 text-center'>2</div>
                            <div className=''>Name</div>
                        </div>
                    </div>
                </div>
                    <p className='pt-4 text-sm sm:text-[0.95rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis porro perferendis illo, vel deleniti alias voluptatibus ipsa nobis necessitatibus atque dolorem sapiente repudiandae itaque libero ipsam. Fugiat reprehenderit, quis necessitatibus officia ullam rem modi ab earum iste, animi soluta distinctio nemo pariatur maxime quo? Temporibus laborum recusandae impedit eveniet sunt. Aliquam sed optio asperiores repellat.</p>
            </div>
        </div>
    )
}

export default Info