import React from 'react'
import PropertiesSearch from '../components/PropertiesSearch'
import PropertiesList from '../components/PropertiesList'
import Map from '../components/Map'

const Properties = () => {

  return (
    <div className='md:grid grid-cols-5 flex flex-col w-full mx-auto'>
            <div className="col-span-3 mr-6 flex flex-col">
                <PropertiesSearch/>
                <PropertiesList />
            </div>
          <div className='map_container w-full hidden md:block col-span-2 rounded-md'>
            <Map/>
          </div>
      </div>
    
  )
}

export default Properties


// <div className='bg-blue-500 py-16'>
    //     <div className='flex flex-col w-4/5 mx-auto'>
    //       <PropertiesSearch />
    //       <PropertiesList/>
    //     </div>
    // </div>