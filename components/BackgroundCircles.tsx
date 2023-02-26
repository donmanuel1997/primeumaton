import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border border-emerald-900 rounded-full h-[300px] w-[300px]  mt-40 opacity-40' />
        <div className='absolute border border-emerald-800 rounded-full h-[200px] w-[200px]  mt-40 animate-ping' />
        
    </div>
  )
}