import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


const Card = ({data, reference}) => {
    return (
        <motion.div  drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.5} className='relative shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-7 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className='footer absolute  w-full bottom-0 left-0'>
                <div className='flex items-center justify-between mb-3 p-3 '>
                    <h5>{data.filesize}</h5>
            <span className='w-6 h-6 bg-zinc-600 flex items-center justify-center rounded-full'>
                {data.close ? <IoClose /> :  <LuDownload size='.8em' color='#fff' />}
            </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                         <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                )}
                


            </div>
        </ motion.div >

    )
}

export default Card