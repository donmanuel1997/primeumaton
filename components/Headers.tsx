import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';


type Props = {}

export default function Headers({ }: Props) {
    const router = useRouter()
    return (
        <header className=' bg-gray-900 p-5 sticky top-0 items-start max-w-7xl mx-auto z-20'>
            <div className='flex flex-row items-center justify-between mx-10 '>
                {/*Second Break*/}
                <motion.div initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    className='flex flex-row items-center mx-10 '>
                    <motion.div whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                        whileTap={{ scale: 0.9 }} className=' bg-white rounded-full  mr-2'>
                        <SocialIcon url="https://wa.me/2349162300288"
                        network='whatsapp'
                            fgColor='#29465B'
                            bgColor='transparent'
                            style={{ height: 28, width: 28 }} />
                    </motion.div>
                    <motion.div whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                        whileTap={{ scale: 0.9 }} className=' bg-white rounded-full  mr-2'>
                        <SocialIcon url="https://www.tiktok.com/@primeumaton7"
                        network="tiktok"
                            fgColor='#29465B'
                            bgColor='transparent' />
                    </motion.div>
                    <motion.div whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                        whileTap={{ scale: 0.9 }} className=' bg-white rounded-full '>
                        <SocialIcon url="https://telegram.com/primeumaton"
                            fgColor='#29465B'
                            bgColor='transparent'
                            style={{ height: 28, width: 28 }} />
                    </motion.div>
                </motion.div>
                {/*Second Break*/}
                <div className='flex justify-center items-center'>
                <motion.div layout
                    animate={{ opacity: 0.5 }}
                    transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 0.3 }
                    }}

                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }} className='flex justify-center items-center cursor-pointer mx-10 '>
                    <div className=' bg-[#051621] rounded-full shadow-md'>
                        <SocialIcon onClick={() => router.push("#contact")} network='email'
                            className=' cursor-pointer'
                            fgColor='#23465B'
                            bgColor='transparent'
                            style={{ height: 38, width: 38 }} />
                    </div>
                    <Link href="#contact">
                    <div className=' uppercase ml-2 text-white hidden text-sm md:inline-flex'>Get in touch</div>
                    </Link>
                </motion.div>
                </div>
            </div>
            <div className=' border border-emerald-700 w-100 opacity-5 mt-4 ' />

        </header>
    )
}