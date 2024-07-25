import React, { useState } from 'react'

interface SliderProps {
  images: string[]
}

const Slider = ({images} : SliderProps) => {
  const [index, setIndex] = useState(0)
  const onLeftClick = () => {
    console.log(index)
    if(index == 0){
      setIndex(images.length - 1)
    } else {
      setIndex(prev => prev - 1)
    }
  }
  console.log(images)

  const onRightClick = () => {
    setIndex(prev => prev + 1)
    if(index+1 == images.length){
      setIndex(0)
    }
  }

  return (
    <>
      {images && <div className='grid grid-cols-3 lg:h-full md:h-[25rem] h-[20rem]'>
        <img className='bg-no-repeat h-[30rem] w-full col-span-3 bg-cover bg-fit bg-center rounded-lg hover:shadow-md cursor-pointer'
         src={images[index ?? 0]}></img>
      </div>}
      <button className='absolute top-0 bottom-0 left-0' onClick={onLeftClick}><i className="text-white text-[1.5rem] pl-1 fa-solid fa-arrow-left"></i></button>
      <button className='absolute top-0 bottom-0 right-0' onClick={onRightClick}><i className="text-white text-[1.5rem] pr-1 fa-solid fa-arrow-right"></i></button>
    </>
  )
}

export default Slider