import React, { FormEventHandler } from 'react';
import axios from 'axios';
import { useLazySearchPropertiesQuery } from '../slices/propertyApiSlice';

type SearchProps = {
    handleSubmit: FormEventHandler<HTMLFormElement>
}

const PropertiesSearch = ({handleSubmit} : SearchProps) => {

  return (
    <div className="my-2 block">
                <p className='text-xl font-normal'>Search Results for</p>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <label className="text-sm mt-1" htmlFor="location">Location</label>
                    <input className=" h-[2.5rem]" type="text" name="location" />
                    <div className='grid sm:grid-cols-3 md:grid-cols-6 grid-cols-2 gap-2 text-xs my-2 '>
                        <div className='flex flex-col'>
                            <label htmlFor="type">Type</label>
                            <select className='border border-bg-slate-300 rounded-lg h-[2rem] px-2'   name="type" id="type">
                                <option value="buy">Buy</option>
                                <option value="rent">Rent</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="property">Property</label>
                            <select className='border border-bg-slate-300 rounded-lg h-[2rem] px-2'    name="property" id="property">
                                <option value="land">Land</option>
                                <option value="appartment">Appartment</option>
                                <option value="house">House</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="minprice">Min Price</label>
                            <input className='border border-bg-slate-300 rounded-lg h-[2rem] p-2'   type="number" name='minPrice'/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="maxprice">Max Price</label>
                            <input className='border border-bg-slate-300 rounded-lg h-[2rem] p-2'   type="number" name='maxPrice'/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="bedrooms">No. of Bedrooms</label>
                            <input className='border border-bg-slate-300 rounded-lg h-[2rem] p-2'   type="number" name='bedrooms'/>
                        </div>
                        <div className=''>
                            <button className='bg-slate-700 h-full w-full  px-4 rounded-lg hover:bg-slate-600'><i className="text-white fa-solid fa-magnifying-glass"></i></button>
                        </div>                        
                    </div>

                </form>
            </div>
  )
}

export default PropertiesSearch