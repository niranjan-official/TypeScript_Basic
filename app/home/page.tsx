'use client'

import React from 'react'
import './home.css'
import Link from 'next/link'
import login from '../../public/login_page.png'
import clock from '../../public/clock_page.png'
import weather from '../../public/weather_page.png'
import calculator from '../../public/calculator_page.png'
import Image, { StaticImageData } from 'next/image'

interface Link {
    name: string,
    href: string,
    src: StaticImageData
}

const Main = () => {

    const links: Link[] = [{ name: 'Login', href: '/login', src: login }, { name: 'Calculator', href: '/calculator', src: calculator }, { name: 'Weather', href: '/weather', src: weather }, { name: 'Clock', href: '/clock', src: clock }]

    return (
        <div className='w-full h-screen p-4 flex home'>
            <div className='w-full h-full flex flex-wrap card'>
                {
                    links.map((link) => (
                        <div className="w-1/2 h-1/2 card-inner p-4 flex justify-center items-center">
                            <div className='w-3/5 h-full m-2 shadow-md rounded p-5 flex flex-col text-center card-box'>
                                <Link href={link.href}><Image className='shadow-md' src={link.src} width="600" height="400" alt={link.name} /></Link>
                                <div className='h-full flex items-center justify-center'><Link href={link.href}><h3 className='m-2 font-serif text-xl'>{link.name}</h3></Link></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Main
