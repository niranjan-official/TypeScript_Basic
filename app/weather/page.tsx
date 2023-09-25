'use client'
import React, { ChangeEvent, useEffect, useState, Fragment } from 'react'
import './weather.css'
import Image from 'next/image'

interface Weather{
    time: Date,
    condition: string,
    icon: string,
    temp: number,
    region: string,
    humid: number,
    wind: number
}

const Weather = () => {

    const [place, setPlace] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [weather, setWeather] = useState<Weather>({ time: new Date(), condition: '', icon: '', temp:0, region: '', humid: 0, wind: 0 })

    useEffect(() => {
        if(location){

            
            const apiUrl: string = `https://api.weatherapi.com/v1/current.json?key=6bdd917b343a497287265310231709&q=${location}&aqi=yes`;
            
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const newWeather:Weather = { time: data.location.localtime, condition: data.current.condition.text, icon: data.current.condition.icon, temp: data.current.temp_c, region: data.location.region, humid: data.current.humidity, wind: data.current.wind_kph }
                setWeather(newWeather);
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
        }
    }, [location]);

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-1/2 h-3/4 shadow-2xl p-4 flex flex-col w-report'>
                <div className='h-1/2 w-full bg-slate-300 shadow-inner shadow-black p-4 flex font-serif w-display'>
                    {location &&
                        <Fragment>
                            <div className='w-1/2 h-full flex flex-col'>
                                <h2 className='m-2 mb-0 text-2xl'>{weather.time.toLocaleString()}</h2>
                                <h2 className='ml-3'>{weather.region}</h2>
                                <h2 className='ml-5 mt-3 text-xl'>Humidity: {weather.humid}%</h2>
                                <h2 className='ml-5 text-xl mt-1'>Wind: {weather.wind}km/h</h2>
                            </div>
                            <div className='w-1/2 h-full flex flex-col w-condition'>
                                <div className='flex h-1/4 mt-2 items-center'>
                                    <h2 className='text-3xl'>{weather.condition}</h2>
                                    {weather.icon ? <Image src={"https:" + weather.icon} alt='weather' width="100" height="100" /> : null}
                                </div>
                                <div className='w-1/2 h-auto pl-4 '>
                                    <h1 className='text-6xl mt-3'>{weather.temp}°</h1>
                                </div>
                            </div>
                        </Fragment>}
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
