import Link from 'next/link'
import React from 'react'

const LoginComponent = () => {
  return (
    <div>
      <form className=' flex flex-col' action=''>
        <input
          placeholder='Username'
          className='rounded-lg border-2 border-blue-300 py-3 px-2 outline-astra-orange'
          type='text'
          name='Username'
          id='Username'
        />

        <input
          placeholder='Password'
          className=' mt-4 rounded-lg border-2 border-blue-300 py-3 px-2 outline-astra-orange'
          type='password'
          name='Password'
          id='Password'
        />
        <div className='mt-3 flex justify-end'>
          <p className=''>
            Forgot{' '}
            <Link className='text-astra-blue' href={'/'}>
              Username
            </Link>{' '}
            or{' '}
            <Link className='text-astra-blue' href={'/'}>
              Password?
            </Link>
          </p>
        </div>
        <button
          className='mt-4 rounded-lg bg-astra-blue py-3 px-2 font-bold text-white hover:bg-astra-orange'
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginComponent
