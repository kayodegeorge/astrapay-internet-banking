import GoBackComponent from '@/components/goBackComponent'
import Image from 'next/image'
import React from 'react'

export default function noaccount() {
  return (
    <div className='flex h-screen w-screen'>
      {/* left */}
      <div className='relative hidden h-full items-center justify-center bg-zinc-600 p-4 md:flex md:w-[calc(100vw-35rem)]'>
        <Image
          fill
          className='object-cover'
          src='/people-at-bank.jpeg'
          alt='Astra bank'
        />
      </div>

      {/* right */}
      <div className='flex w-full items-center justify-center bg-white md:w-[35rem]'>
        <div className='min-w-[75%] p-6'>
          <GoBackComponent />
          <div className='mb-5 flex justify-center'>
            <Image
              width={200}
              height={200}
              src='/logo.png'
              alt='Astra pay Logo'
            />
          </div>

          <div className=''>
            <h1 className='mb-3 flex justify-center text-lg font-semibold'>
              Welcome!
            </h1>
            <p className='mb-3 flex justify-center p-2 text-lg'>
              Let's setup your account real quick!
            </p>
          </div>

          <form className='flex flex-col'>
            <input
              placeholder='Enter BVN'
              className='rounded-lg border-2 border-blue-300 py-3 px-2 outline-astra-orange'
              type='text'
              name='Account'
              id='Account'
            />
            <p className='mt-3'>
              <span className=' text-astra-blue'>Quick Tip:</span> Dial *565*0#
              on your registered mobile number to get your BVN number
            </p>
            <button
              className='mt-4 rounded-lg bg-astra-blue py-3 px-2 font-bold text-white hover:bg-astra-orange'
              type='submit'
            >
              Continue
            </button>
          </form>
          <div className='mt-10 flex justify-center gap-2'>
            <p className=''>
              No BVN? <span className='text-astra-blue'>Skip this</span>
            </p>
          </div>
          {/* <LoginComponent /> */}
        </div>
      </div>
    </div>
  )
}
