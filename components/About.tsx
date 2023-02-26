import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
  return (
    <div className='relative h-screen bg-gray-900 flex flex-col px-10'>
      <div className='mt-28'>
        <h3 className='text-sm font-semibold hover:border hover:border-[#ffffff] shadow-md py-3 tracking-[10px] text-gray-300 uppercase px-10 rounded-sm flex justify-center items-center'>About Me</h3>
      </div>
      <div className='mt-1 lg:flex'>
        <div className=' text-sm font-semibold hover:border p-1 bg-white hover:border-[#ffffff] shadow-md py-3  text-gray-300  px-10 rounded-sm flex flex-col justify-center items-center'>
          <motion.img whileHover={{ scale: 1.8 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}
           src='./adelakun-emmanuel.jpg' className='w-12 md:w-20 lg:w-44' />
        </div>
        <div className='text-sm font-semibold  shadow-md py-3  text-gray-300  px-10 rounded-sm flex flex-col '>
          <p>Hi, My name is Adelakun Emmanuel.</p>
          <p>I am a Full Stack Developer and a Cyber Security Expert.</p><br />
          <p>I am graduated from Lagos State University {"(LASU)"} as a Computer Science Student 
            and experienced working as a Front-End and Back-End developer.</p><br />
          <p>I am Passionate about programming where I made many projects {"(Web / Mobile Application)"} by using JavaScript language, 
             ReactJS, NextJS, Expo, React Native.</p>
        </div>
        </div>
      </div>

  )
}