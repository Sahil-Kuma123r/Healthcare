import React from 'react'
import Section from './Section'
import CategorySearch from './CategorySearch'
import TopDoctors from './TopDoctors'

const Page = () => {
  return (
    <div className='border-[2px] border-red-600'>
        <Section/>
        <CategorySearch/>
        <TopDoctors/>
      
    </div>
  )
}

export default Page
