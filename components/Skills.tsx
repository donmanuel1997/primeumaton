import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className='relative h-screen bg-gray-900 flex flex-col'>
      <div className='mt-32'>
        <h3 className='text-sm font-semibold hover:border hover:border-[#ffffff] shadow-md py-3 tracking-[10px] text-gray-300 uppercase px-10 rounded-sm flex justify-center items-center'>SKILLS</h3>
      </div>
      
      
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className=' flex flex-col overflow-hidden text-left  max-w-full px-10  mx-auto'>
       
       <div className='mt-5 grid grid-cols-4 gap-5'>
          <Skill imgsr='./appwrite.svg' />
          <Skill imgsr='./expo.png' />
          <Skill imgsr='./js.png' />
          <Skill imgsr='./react.png' />
          <Skill imgsr='./nextjs.png' />
          <Skill imgsr='./vscode.png' />
          <Skill imgsr='./firebase.png' />
          <Skill imgsr='./tailwindcss.jpg' />
          <Skill imgsr='./ts.png' />
          <Skill imgsr='./motion.png' />
          <Skill imgsr='./web3.png' />
          <Skill imgsr='./git.png' />
          
          <Skill imgsr='' />
          <Skill imgsr='' />
          <Skill imgsr='' />
          <Skill imgsr='' />
          
        </div>
    </motion.div>
    </div>
  )
}