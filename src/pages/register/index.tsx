import GoBackComponent from '@/components/goBackComponent'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowLeft, AiFillBank } from 'react-icons/ai'

export default function Register() {
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
      <div className='mt-5 w-full  bg-white p-5 md:w-[35rem] '>
        <div className='min-w-[75%]'>
          <Link href={'/'}>
            <GoBackComponent />
          </Link>
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
              Let's get started
            </h1>
            <p className='mb-3 text-center'>Do you have an existing account?</p>
          </div>
          <div className='mt-10 flex justify-between gap-3'>
            <Link href={'/register/account'}>
              <div className='flex flex-col items-center rounded-lg bg-astra-blue p-3 text-center  text-astra-orange hover:animate-pulse'>
                <AiFillBank size={100} />
                <p>I have an Astrapolaris account</p>
              </div>
            </Link>
            <Link href={'/register/no-account'}>
              <div className='flex flex-col items-center rounded-lg bg-astra-blue p-3 text-center  text-astra-orange hover:animate-pulse'>
                <AiFillBank size={100} />
                <p>I don't have an Astrapolaris account</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
