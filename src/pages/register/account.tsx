import GoBackComponent from '@/components/goBackComponent'
import LoginComponent from '@/components/LoginComponent'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const account = () => {
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
              Input your account number so we can fetch your details, this will
              only take a minute!
            </p>
          </div>

          <form className='flex flex-col'>
            <input
              placeholder='Account Number'
              className='rounded-lg border-2 border-blue-300 py-3 px-2 outline-astra-orange'
              type='text'
              name='Account'
              id='Account'
            />
            <button
              className='mt-4 rounded-lg bg-astra-blue py-3 px-2 font-bold text-white hover:bg-astra-orange'
              type='submit'
            >
              Continue
            </button>
          </form>
          {/* <LoginComponent /> */}
        </div>
      </div>
    </div>
  )
}

export default account
