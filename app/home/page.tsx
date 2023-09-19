'use client'

import React from 'react'
import './home.css'
import Link from 'next/link'

const Home = () => {

    return (
        <div className='w-full h-screen p-4 home'>
            <div className='w-full flex flex-col justify-center inner-home'>
                <h1>TypeScript Samples</h1>
                <div className='w-full h-auto flex flex-col'>
                    <Link href="/login"><button className='shadow-xl'>Login</button></Link>
                    <Link href="/calculator"><button className='shadow-xl'>Calculator</button></Link>
                    <Link href="/weather"><button className='shadow-xl'>Weather</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home
