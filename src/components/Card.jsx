import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data}) {
  return (
      <motion.div drag  className=' relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>

        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semiblod'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex item-center justify-between mb-5 px-8 mb-3'>
                  <h5>{data.filesize}</h5>
                  <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                      
                      {data.close ? <IoClose /> : <IoDownloadOutline size=".8em" color='#fff' />}

                  </span>
            </div>
            {data.tag.isOpen ? (
                  <div className='tag w-full py-4 bg-green-600 flex item-center justify-center'>
                      <h3 className='text-sm fonr-semibold'>Download Now</h3>

                  </div>
            ) : null
        }
            
            
        </div>
      </motion.div>
  )
}

export default Card