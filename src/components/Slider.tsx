import React from 'react'

interface SliderProps {
  images: string[]
}

const Slider = ({images} : SliderProps) => {

  return (
        <div className='grid grid-cols-3 grid-rows-3 gap-4 [&>*:first-child]:col-span-2 [&>*:first-child]:row-span-3 lg:h-full md:h-[25rem] h-[20rem]'>
            {images.map((image)=>
                <div className='bg-no-repeat bg-cover bg-center rounded-lg hover:shadow-md cursor-pointer' style={{backgroundImage: `url(${image})`}}></div>
            )}
        </div>
  )
}

export default Slider