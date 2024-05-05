import React from 'react'

const LargeCard = () => {
  return (
    <div className=' bg-white flex w-full h-40 shadow-md rounded-lg cursor-pointer hover:shadow-lg'>
        <div className='basis-2/6 bg-no-repeat bg-cover bg-center rounded-lg hover:shadow-md cursor-pointer h-full center rounded-l-lg w-full' style={{backgroundImage: `url(../images/house1.jpg)`}}></div>
        <div className="flex-grow flex justify-between flex-col p-4">
            <div className="flex justify-between text-lg font-semibold">
                <p>Name</p>
                <p>Price</p>
            </div>
            <p className='text-xs text-gray-500'>Location</p>
            <div className='flex gap-4 justify-between text-[0.75rem] mt-1'>
                <div className='flex gap-4'>
                    <div className='flex border-none rounded-sm bg-slate-100 items-center gap-2 p-2'>
                        <p><i className="fa-solid fa-bed"></i></p>
                        <p>3</p>
                    </div>
                    <div className='flex border-none rounded-sm bg-slate-100 items-center gap-2 p-2'>
                        <p><i className="fa-solid fa-bath"></i></p>
                        <p>2</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='flex border-none rounded-sm bg-slate-100 items-center gap-2 p-2 hover:bg-gray-300'>
                        <p><i className="fa-regular fa-heart"></i></p>
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