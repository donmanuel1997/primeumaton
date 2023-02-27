import React from 'react'
import { useRouter } from 'next/router';
import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function Contact({}: Props) {
  const router = useRouter()
  return (
    <div className='relative h-screen bg-gray-900 flex flex-col'>
      <div className='mt-32'>
        <h3 className='text-sm font-semibold hover:border hover:border-[#ffffff] shadow-md py-3 tracking-[10px] text-gray-300 uppercase px-10 rounded-sm flex justify-center items-center'>Contact Me</h3>
      </div>

      <div className='flex justify-center items-center px-5 font-semibold text-4xl mt-9'>
        Get in touch with me, I got all you want.
      </div>

       <div className='flex space-y-2 flex-col justify-center items-center px-5  text-sm mt-9'>
          <div className='flex space-x-3'>
          <div className='flex space-x-2'>
            <p> <PhoneIcon className=' text-[#F7AB0A] w-7 h-7 animate-pulse' /> </p>
            <p>{" "} +234 916 230 0288</p>
          </div>

          <div className='flex space-x-2'>
            <p> <EnvelopeIcon className=' text-[#F7AB0A] w-7 h-7 animate-pulse' /> </p>
            <p>{" "}donmanuel1997{"[@]"}gmail.com</p>
          </div>
          </div>

          <div className='flex space-x-2'>
            <p> <MapPinIcon className=' text-[#F7AB0A] w-7 h-7 animate-pulse' /> </p>
            <p>{" "}Somewhere in Lagos, Nigeria.</p>
          </div>
       </div>

       <div>
            <form className='mt-4 flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex flex-col space-y-2 '>
                  <div className='bg-gray-700 p-1 flex space-x-2'>
                  <input placeholder='Your Name' className=' outline-none bg-slate-500 rounded-sm  px-5 py-2 text-gray-900 font-semibold'/>
                  <input  placeholder='Subject' className=' outline-none bg-slate-500 rounded-sm  px-5 py-2 text-gray-900 font-semibold'/>
                  
                 </div>
                 
                   <textarea placeholder="...Say Something..." className=' outline-none bg-slate-500 rounded-sm  px-5 py-2 text-gray-900 font-semibold'/>
                  
                  <button className=' bg-[#F7AB0A] text-gray-900 p-1 rounded-sm font-semibold animate-pulse'>Send message</button>
                </div>

            </form>
       </div>

    </div>
  )
}