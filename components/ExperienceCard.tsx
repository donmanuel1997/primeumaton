import { motion } from 'framer-motion'
import React from 'react'

type Props = {
}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex snap-center rounded-2xl bg-slate-800 p-1 flex-col items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] opacity-60 hover:opacity-100
     cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div className='m-9 flex flex-col justify-center items-center'>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{ once: true}}
        className='flex justify-center items-center w-[100px] h-[100px] rounded-full ' 
        src='./duduspree.png' />
        
        <div className='px-10 lg:px-0'>
            <h4 className='text-xl font-thin my-2 flex justify-center items-center'>Primeumaton Limited</h4>
            <div className='flex space-x-2  justify-center items-center'>
                <img src="./vscode.png" className='w-8 h-8 bg-white rounded-full p-1' />
                <img src="./js.png" className='w-8 h-8 bg-white rounded-full p-1' />
                <img src="./react.png" className='w-8 h-8 bg-white rounded-full p-1' />
                <img src="./nextjs.png" className='w-8 h-8 bg-white rounded-full p-1' />
                <img src="./expo.png" className='w-8 h-8 bg-white rounded-full p-1' />
                <img src="./cyber.png" className='w-8 h-8 bg-white rounded-full p-1' />
                
            </div>
            <ul className=' list-disc space-y-1 my-2 ml-5 text-sm'>
                <li>Full Stack Developer</li>
                <li>Cyber Security Expert</li>
            </ul>
            
        </div>
        </div>
    </article>
  )
}