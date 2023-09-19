'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import './weather.css'
import Image from 'next/image'

const Weather = () => {

    const [place, setPlace] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [time, setTime] = useState<string>('')
    const [condition, setCondition] = useState<string>('')
    const [icon, setIcon] = useState<string>('')
    const [temp, setTemp] = useState<string>('')
    const [region, setRegion] = useState<string>('')
    const [humid, setHumid] = useState<string>('')
    const [wind, setWind] = useState<string>('')

    useEffect(() => {

        const apiUrl: string = `http://api.weatherapi.com/v1/current.json?key=6bdd917b343a497287265310231709&q=${location}&aqi=yes`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                setTime(data.location.localtime)
                setCondition(data.current.condition.text)
                setIcon(data.current.condition.icon)
                setTemp(data.current.temp_c)
                setRegion(data.location.region)
                setHumid(data.current.humidity)
                setWind(data.current.wind_kph)
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    }, [location]);

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-1/2 h-3/4 shadow-2xl p-4 flex flex-col w-report'>
                <div className='h-1/2 w-full bg-slate-300 shadow-inner shadow-black p-4 flex font-serif w-display'>
                    <div className='w-1/2 h-full flex flex-col'>
                        <h2 className='m-2 mb-0 text-2xl'>{time}</h2>
                        <h2 className='ml-3'>{region}</h2>
                        {humid && <h2 className='ml-5 mt-3 text-xl'>Humidity: {humid}%</h2>}
                        {wind && <h2 className='ml-5 text-xl mt-1'>Wind: {wind}km/h</h2>}
                    </div>
                    <div className='w-1/2 h-full flex flex-col w-condition'>
                        <div className='flex h-1/4 mt-2 items-center'>
                            <h2 className='text-3xl'>{condition}</h2>
                            {/* <img src={"http:"+icon} alt="" /> */}
                            {icon && <Image src={"http:"+icon} alt='weather' width="130" height="130" />}
                        </div>
                        <div className='w-1/2 h-auto pl-4'>
                            {temp ? <h1 className='text-6xl mt-3'>{temp}°</h1> : null}
                        </div>
                    </div>
                </div>
                <div className='h-1/2 w-full flex flex-col weather-input'>
                    <h1 className='font-serif'>{location ? location : "Enter Place"}</h1>
                    <input type="text" className='w-1/3 h-10 p-2 shadow-inner shadow-slate-600 focus:outline-none' placeholder='Place' onChange={(e: ChangeEvent<HTMLInputElement>) => setPlace(e.target.value)} />
                    <button onClick={() => setLocation(place)} className='h-10 w-20 shadow-md p-2 font-serif m-4 bg-slate-200'>Show</button>
                </div>
            </div>
        </div>
    )
}

export default Weather
