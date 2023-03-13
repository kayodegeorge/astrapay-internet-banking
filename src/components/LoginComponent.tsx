import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  username: string
  password: string
}

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  return (
    <div>
      <form className=' flex flex-col'>
        <input
          placeholder='Username'
          className='rounded-lg border-2 border-blue-300 py-3 px-2 outline-astra-orange'
          type='text'
          id='username'
          {...register('username')}
        />
        {errors.username && <span>This field is required</span>}

        <input
          placeholder='Password'
          className=' mt-4 rounded-lg border-2 border-blue-300 py-3 px-2 outline-astra-orange'
          type='password'
          {...register('password')}
          id='password'
        />

        {errors.password && <span>This field is required</span>}
        <div className='mt-3 flex justify-end'>
          <p className=''>
            Forgot{' '}
            <Link className='text-astra-blue' href={'/forgot-username'}>
              Username
            </Link>{' '}
            or{' '}
            <Link
              className='text-astra-blue'
              href={'/register/forgot-password'}
            >
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
