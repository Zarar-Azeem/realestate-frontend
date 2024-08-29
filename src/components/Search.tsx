import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setProperties } from '../slices/propertySlice';
import { useDispatch } from 'react-redux';

const Search = () => {
  const [active, setActive] = useState<string>('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [searchParams, setSearchParams] = useSearchParams({
    type:'',
    location: '',
    minPrice: '',
    maxPrice: ''
  })
  
  const handleSubmit = async (e : React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const location = formData.get('location') || ''
    const minPrice = formData.get('minPrice') || 0
    const maxPrice = formData.get('maxPrice') || 1000000
    console.log(location)
    setSearchParams({
      location: location as string,
      maxPrice: maxPrice as string,
      minPrice: minPrice as string,
      type: active,
    })
    const searchUrl = `type=${active}&location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    try {
      const res = await axios.get(
        `http://localhost:3000/api/property/search?${searchUrl}`)
        dispatch(setProperties(res.data))
        console.log(res.data)
        navigate(`/properties?${searchUrl}`)
    } catch (error) {
        console.error(error)
    }
  }; 

  const selectType = (val : string) =>{
    setActive(prev => val)
  }

  return (
    <div className='my-auto flex gap-x-4 col-span-1/2 w-full'>
        <div className="w-5/6 ">
            <form className='md:inline-flex grid grid-cols-2 gap-4' onSubmit={handleSubmit}> 
                <input type="text" className='col-span-2' name='location' placeholder='Seach Location'/>
                <input type="number" name='minPrice' min={0} max={10000000}  placeholder='Min Price'/>
                <input type="number" name='maxPrice' min={0} max={10000000} placeholder='Max Price'/>
                <div className="inline-flex w-full">
                  <button type="button" onClick={()=>selectType("sell")} className={`${active == 'sell' ? "text-white bg-slate-700 hover:bg-slate-600" : "bg-white hover:bg-gray-50" } type-btn first:rounded-s-lg`}>
                    Buy
                  </button>
                  <button type="button" onClick={()=>selectType("rent")} className={`${active == 'rent' ? "text-white bg-slate-700 hover:bg-slate-600" : "bg-white hover:bg-gray-50"} type-btn last:rounded-e-lg`}>
                    Rent
                  </button>
                </div>
                <button type='submit'  className='bg-slate-700 py-4 px-6 rounded-lg hover:bg-slate-600 w-fit ml-6 sm:ml-0'><i className="text-white fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    </div>
  )
}

export default Search