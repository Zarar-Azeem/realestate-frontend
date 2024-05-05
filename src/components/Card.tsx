import React from 'react'

const Card = () => {
  return (
    <div className=' flex flex-col border-2 rounded-md h-60 shadow-sm hover:shadow-md cursor-pointer'>
      <div className="basis-3/5 bg-no-repeat bg-cover bg-center " style={{backgroundImage: `url(../images/house1.jpg)`}}></div>
      <div className='flex flex-col p-2'>
          <div className='flex justify-between'>
            <h2>Appartment</h2>
            <h2>500$</h2>
          </div>
          <p className='text-sm my-1 text-gray-500'>Location</p>
          <hr />
          <div className='flex gap-4 text-[0.65rem] mt-1'>
              <div className='flex border-none rounded-sm bg-slate-100 items-center gap-2 p-2'>
                <p><i className="fa-solid fa-bed"></i></p>
                <p>3</p>
              </div>
              <div className='flex border-none rounded-sm bg-slate-100 items-center gap-2 p-2'>
                <p><i className="fa-solid fa-bath"></i></p>
                <p>2</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Card