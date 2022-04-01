import React from 'react'
import { motion } from 'framer-motion'
import { MdShoppingBasket } from 'react-icons/md'

function RowSlider({ flag }) {
  return (
    <div className={`w-full my-12 ${flag ? 'overflow-x-scroll':'overflow-x-hidden'}`}>
        <div className="w-300 md:w-225 h-auto my-12 backdrop-blur-lg">
            <div className="w-full flex items-center justify-between">
                <img src="https://picsum.photos/400" className="w-40 -mt-8" alt="" />
                <motion.div whiletap={{ scale: 0.75 }} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
                    <MdShoppingBasket className="text-white"/>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

//> 5:00:00

export default RowSlider