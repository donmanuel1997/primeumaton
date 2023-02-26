import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    imgsr: string;
    directionLeft: boolean;
}

export default function Skill({imgsr,directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer bg-white p-1 rounded-full space-y-2'>
        <motion.img initial={{
            opacity: 0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1}}
        src={imgsr} className="w-[100px]  bg-slate-800 rounded-full" />
    </div>
  )
}