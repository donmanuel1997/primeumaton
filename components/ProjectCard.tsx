import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons';
import { useRouter } from 'next/router';

type Props = {
    
    github: string;
    youtube: string;
    title: string;
    imgsr: string;
}

export default function ProjectCard({imgsr,title,github,youtube}: Props) {
  
    const router = useRouter()
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
        viewport={{ once: true}}
        className='flex  justify-center items-center w-[100px] h-[100px] rounded-lg bg-white p-1 ' 
        src={imgsr}/>
        
        <div className='px-10 lg:px-0'>
            <h4 className='text-xl font-thin my-2 flex justify-center items-center'> {title} </h4>
            
            <ul className='my-7  space-y-1  ml-5 text-sm'>
                <li className=''>
                <motion.div whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                        whileTap={{ scale: 0.9 }} className='flex  items-center text-gray-800 bg-white rounded-lg px-5'>
                        <SocialIcon url={youtube}
                        network='youtube'
                            fgColor='#29465B'
                            bgColor='transparent'
                            style={{ height: 28, width: 28 }} />
                            <p onClick={() => router.push(youtube)}  className=' text-sm'>Watch Video</p>
                    </motion.div>
                    </li>
                    <li className=''>
                <motion.div whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                        whileTap={{ scale: 0.9 }} className='flex  items-center text-gray-800 bg-white rounded-lg px-5'>
                        <SocialIcon url={github}
                        network='github'
                            fgColor='#29465B'
                            bgColor='transparent'
                            style={{ height: 28, width: 28 }} />
                            <p onClick={() => router.push(github)} className=' text-sm'>Github Repository</p>
                    </motion.div>
                    </li>
            </ul>
            
        </div>
        </div>
    </article>
  )
}