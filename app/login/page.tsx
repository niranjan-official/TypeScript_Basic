'use client'


import React, { FormEvent } from 'react'
import { useState } from 'react'

function Login() {

  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string | number>('')
  const [login, setLogin] = useState<boolean>(false)

  const username: string = 'providence'
  const pass: number | string = 1234

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (name === username && password == pass) {

      setLogin(true)
    }
    else {
      setLogin(false)
      alert("Invalid Username or Password")
    }
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='mb-4 p-4 border border-slate-950 font-serif'>
        <h2>Username: providence</h2>
        <h2>password: 1234</h2>
      </div>
      <div className='shadow-lg shadow-black p-8'>
        <form action="" className='flex flex-col items-center'>
          <h1>Login</h1>
          <input type="text" placeholder='UserName' onChange={(e) => setName(e.target.value)} value={name} className='p-2 shadow-inner shadow-gray-800 border-zinc-950 font-sans w-64 bg-slate-100 focus:outline-none' required />
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} className='mt-4 p-2 shadow-inner shadow-gray-800 font-sans w-64 bg-slate-100 focus:outline-none' required />
          <button onClick={handleSubmit} className='mt-6 w-24 p-2 text-gray-50 rounded bg-slate-700 shadow-sm shadow-gray-950 hover:bg-slate-900'>Login</button>
        </form>
      </div>

      {login && <h1 className='mt-10 text-4xl'>Login Successfull</h1>}

    </div>
  )
}

export default Login
