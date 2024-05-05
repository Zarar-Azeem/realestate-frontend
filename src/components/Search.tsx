import React, { useState } from 'react'



const Search = () => {
  const [active, setActive] = useState<string>('')
  const [query, setQuery] = useState<Query>({
    type:'',
    location: '',
    minPrice: 0,
    maxPrice: 0
  })
  const selectType = (val : string) =>{
    setActive(prev => val)
  }

  return (
    <div className='my-auto flex gap-x-4 col-span-1/2 w-full'>
        <div className="w-5/6 ">
            <form className='md:inline-flex sm:gap-x-2 grid grid-cols-2 gap-4'>
                <input type="text" className='col-span-2' name='search' placeholder='Seach Location'/>
                <input type="number" name='minPrice' min={0} max={10000000}  placeholder='Min Price'/>
                <input type="number" name='maxPrice' min={0} max={10000000} placeholder='Max Price'/>
                <div className="inline-flex w-full">
                  <button type="button" onClick={()=>selectType("buy")} className={`${active == 'buy' ? "text-white bg-slate-700 hover:bg-slate-600" : "bg-white hover:bg-gray-50" } type-btn first:rounded-s-lg`}>
                    Buy
                  </button>
                  <button type="button" onClick={()=>selectType("rent")} className={`${active == 'rent' ? "text-white bg-slate-700 hover:bg-slate-600" : "bg-white hover:bg-gray-50"} type-btn last:rounded-e-lg`}>
                    Rent
                  </button>
                </div>
                
                <button className='bg-slate-700 py-4 px-6 rounded-lg hover:bg-slate-600'><i className="text-white fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    </div>
  )
}

export default Search