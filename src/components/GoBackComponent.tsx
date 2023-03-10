import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const GoBackComponent = () => {
  return (
    <div className='flex items-center gap-2'>
      <AiOutlineArrowLeft size={20} className=' text-astra-blue' />
      <h1 className='mb-1 text-astra-blue'>Back</h1>
    </div>
  )
}

export default GoBackComponent
