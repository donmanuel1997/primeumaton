import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='relative h-screen bg-gray-900 flex flex-col'>
      <div className='mt-32'>
        <h3 className='text-sm font-semibold hover:border hover:border-[#ffffff] shadow-md py-3 tracking-[10px] text-gray-300 uppercase px-10 rounded-sm flex justify-center items-center'>About Me</h3>
      </div>
    </div>
  )
}