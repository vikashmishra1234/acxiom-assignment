"use client"
import Image from 'next/image'
import React from 'react'
import AdminTop from '../component/AdminTop'

const page = () => {
  return (
 <>
 <AdminTop/>
    <div className='flex justify-center items-center'>
      
      <Image src={'/image.png'} width={700} height={500} alt='chart image'/>
  </div>
 </>
  )
}

export default page