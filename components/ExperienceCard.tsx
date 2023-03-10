import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    title: string;
    imgsr: string;
}

export default function ExperienceCard({imgsr, title}: Props) {
  return (
    <article className='flex border border-gray-600 snap-center rounded-2xl bg-slate-800 p-4 flex-col items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] opacity-60 hover:opacity-100
     cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div className='m-9 flex flex-col justify-center items-center'>
        <motion.img 
        initial={{
            y: -100,
            opacity: 80,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        className='flex  justify-center items-center w-[100px] h-[100px] rounded-full ' 
        src={imgsr}/>
        
        <div className='px-10 lg:px-0'>
            <h4 className='text-xl font-thin my-2 flex justify-center items-center'> {title} </h4>
            <div className='flex space-x-2 mb-12 lg:mb-2 justify-center items-center'>
                <img src="./vscode.png" className='w-8 h-8 bg-white rounded-full p-1' />
                <img src="./js.png" className='w-8 h-8 bg-white rounded-full p-1' />
                <img src="./react.png" className='w-8 h-8 bg-white rounded-full p-1' />
                <img src="./nextjs.png" className='w-8 h-8 bg-white rounded-full p-1' />
                <img src="./expo.png" className='w-8 h-8 bg-white rounded-full p-1' />
                <img src="./cyber.png" className='w-8 h-8 bg-white rounded-full p-1' />
                
            </div>
            <ul className='my-7 list-disc space-y-1  ml-5 text-sm'>
                <li>Full Stack Developer</li>
                <li>Cyber Security Expert</li>
                <li>Mobile Developer</li>
            </ul>
            
        </div>
        </div>
    </article>
  )
}