'use client'
import React, { useEffect, useState } from 'react'
import './clock.css'

interface Rotation{
    hour: number,
    minute: number,
    second: number
}
const Clock = () => {

    const [rotation, setRotation] = useState<Rotation>({ hour: 90, minute: 90, second: 90 });

    const updateClock = () => {
        const now = new Date();
        const hour:number = now.getHours();
        const minute:number = now.getMinutes();
        const second:number = now.getSeconds();

        const newRotation: Rotation = {
            hour: (hour % 12) * 360 / 12 + (minute / 60) * 360 / 12 + 90,
            minute: minute * 360 / 60 + (second / 60) * 360 / 60 + 90,
            second: second * 360 / 60 + 90,
        }
        setRotation(newRotation);
    };

    useEffect(() => {
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
      }, []);

    return (

        <div className='w-full h-screen flex flex-col justify-center items-center cl'>
            <h1>Analog Clock</h1>
            <div className='clock h-96 w-96 rounded-full shadow-2xl shadow-black p-16'>
                <div className='hour' style={{ transform: `rotate(${rotation.hour}deg)` }}></div>
                <div className='minute' style={{ transform: `rotate(${rotation.minute}deg)` }}></div>
                <div className='second' style={{ transform: `rotate(${rotation.second}deg)` }}></div>
            </div>
        </div>
    )
}

export default Clock
