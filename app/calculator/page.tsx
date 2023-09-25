'use client'

import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {

    const buttons: string[] = ['9', '8', '7', '6', '5', '4', '3', '2', '1']
    const operators: string[] = ['+', '-', '*', '/']

    const [data, setData] = useState<string>('')

    const calculate = () => {
        try {
            const result = eval(data)
            if (result != undefined && !isNaN(result)) {
                setData(result)
            } else {
                setData('Invalid Expression')
            }
        } catch (error) {
            setData('Invalid Expression')
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className=' calculator w-1/3 h-3/4 shadow-2xl shadow-slate-950 rounded-xl flex flex-col items-center p-6'>
                <input type="text" defaultValue={data} placeholder='TypeScript Calculator ' className='w-full h-24 p-2 text-4xl shadow-inner shadow-black bg-slate-100 focus:outline-none text-right' />
                <div className='h-full w-full mt-4 flex flex-col'>
                    <div className='flex h-3/4'>
                        <div className='h-full w-3/4 mr-2 flex flex-wrap justify-center items-center'>
                            {buttons.map((val) => (
                                <button key={val} onClick={() => setData(data + val)} className='h-1/4 w-1/4 text-4xl m-2 shadow-md font-serif'>{val}</button>
                            ))}
                        </div>
                        <div className='h-full w-1/4 flex flex-col'>
                            {operators.map((val, key) => (
                                <button key={key} onClick={() => setData(data + val)} className='h-1/4 w-auto text-4xl m-2 shadow-md font-sans'>{val}</button>
                            ))}
                        </div>
                    </div>
                    <div className='h-1/4 w-full flex mt-2'>
                        <button onClick={() => setData(data + '.')} className='h-auto w-1/4 m-2 text-4xl shadow-md'>.</button>
                        <button onClick={() => setData(data + '0')} className='h-auto w-1/4 m-2 text-4xl shadow-md'>0</button>
                        <button onClick={() => setData('')} className='h-auto w-1/4 m-2 text-4xl shadow-md'>C</button>
                        <button onClick={calculate} className='h-auto w-1/4 m-2 text-4xl shadow-md'>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
