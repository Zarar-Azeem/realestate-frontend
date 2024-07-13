import React, { FormEventHandler } from 'react';
import axios from 'axios';

type SearchProps = {
    handleSubmit: FormEventHandler<HTMLFormElement>
}

const PropertiesSearch = ({handleSubmit} : SearchProps) => {

  return (
    <div className="mt-2">
                <p className='text-xl font-normal my-4'>Search Results for</p>
                <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}>
                    <label htmlFor="location">Location</label>
                    <input className="h-[2.5rem]" type="text" name="location" />
                        <div className='flex flex-col'>
                            <label htmlFor="type">Type</label>
                            <select className='border border-bg-slate-300 space-y-2 p-4 rounded-lg h-[2rem]'   name="type" id="type">
                                <option className='mb-2' value="buy">Buy</option>
                                <option className='mb-2' value="rent">Rent</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="property">Property</label>
                            <select className='border border-bg-slate-300 rounded-lg h-[2rem]'    name="property" id="property">
                                <option value="land">Land</option>
                                <option value="appartment">Appartment</option>
                                <option value="house">House</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="minprice">Min Price</label>
                            <input className='border border-bg-slate-300 rounded-lg h-[2rem]'   type="number" name='minPrice'/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="maxprice">Max Price</label>
                            <input className='border border-bg-slate-300 rounded-lg h-[2rem]'   type="number" name='maxPrice'/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="bedrooms">No. of Bedrooms</label>
                            <input className='border border-bg-slate-300 rounded-lg h-[2rem]'   type="number" name='bedrooms'/>
                        </div>
                        <button className='w-full h-[2.5rem] text-white bg-slate-700 rounded-lg hover:bg-slate-600'><i className="text-white px-2 fa-solid fa-filter"></i>Filter / Reset</button>
                </form>
            </div>
  )
}

export default PropertiesSearch