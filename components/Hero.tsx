import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "My name is: Adelakun Emmanuel </>",
            "<> I Code </>",
            "<> I Debug Codes </>",
            "<> I Deploy Codes </>",
            "<> I love my wife :) </>",
            "I do Programming...({/})",
            "I do Cyber Security...({/})",
            "<> I am Primeumaton </>",],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className=' h-screen bg-gray-900 flex flex-col space-y-8 items-center justify-center
         overflow-hidden'>
            <BackgroundCircles />
            <div className='relative mx-auto my-auto bg-white p-2 bottom-6 rounded-full'>
            <img src='./adelakun.jpg'  className='w-36 h-36 object-cover  rounded-full'/> 
            </div>
            <div className='flex flex-col justify-center items-center text-white top-0'>
                <div className='px-2 text-sm uppercase tracking-[3px] '>FULL STACK DEVELOPER ¬ CYBER SECURITY</div>
                <div className='text-2xl lg:text-4xl font-semibold px-3'>{text}<Cursor cursorColor='#ff6600' />
                </div>
            </div>
            <div className='flex flex-row  items-center justify-center space-x-3 tracking-widest'>
                <Link href="#about">
                <div className='text-sm hover:border hover:border-[#652e0a] bg-[#051621] text-gray-300 font-thin uppercase px-2 py-1 rounded-sm'>About</div>
                </Link>
                <Link href="#skills">
                <div className='text-sm hover:border hover:border-[#652e0a] bg-[#051621] text-gray-300 font-thin uppercase px-2 py-1 rounded-sm'>Skills</div>
                </Link>
                <Link href="#experience">
                <div className='text-sm hover:border hover:border-[#652e0a] bg-[#051621] text-gray-300 font-thin uppercase px-2 py-1 rounded-sm'>Experience</div>
                </Link>
                <Link href="#projects">
                <div className='text-sm hover:border hover:border-[#652e0a] bg-[#051621] text-gray-300 font-thin uppercase px-2 py-1 rounded-sm'>Projects</div>
                </Link> 
            </div>
        </div>
    )
}