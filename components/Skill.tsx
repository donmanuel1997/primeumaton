import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    imgsr: string;
}

export default function Skill({imgsr}: Props) {
  return (
    <div className='group relative flex cursor-pointer bg-white p-1 rounded-full space-y-2'>
        <motion.img src={imgsr} className="w-[100px]  bg-slate-800 rounded-full" />
    </div>
  )
}