import React from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

type Props = {}

export default function Projects({}: Props) {
  return (
    <div className='relative h-screen bg-gray-900 flex flex-col'>
      <div className='mt-28'>
        <h3 className='text-sm font-semibold hover:border hover:border-[#ffffff] shadow-md py-3 tracking-[10px] text-gray-300 uppercase px-10 rounded-sm flex justify-center items-center'>PROJECTS</h3>
      </div>
      <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className=' flex flex-col overflow-hidden text-left md:flex-row max-w-full px-10  mx-auto'>
          <div className='w-full  flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            {/* Expienrience Cards */}
            <ProjectCard title="NFT DROP" imgsr="./nft.jpg" github="https://github.com/donmanuel1997/nftdrop" youtube='https://github.com/donmanuel1997/nftdrop' />
            <ProjectCard title="Anaphaxeton Chatgpt" imgsr="./openai.jpg" github="https://github.com/donmanuel1997/anaphaxeton" youtube='https://anaphaxeton.com' />
           
           </div>
    </motion.div>
    </div>
  )
}