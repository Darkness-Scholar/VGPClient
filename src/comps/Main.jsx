import React from 'react'
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowSlider from './RowSlider'

function Main() {
    return (
        <div className="w-full h-auto flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="py-2 bg-primay flex-1"></div>
                <div className="py-2 flex-1 flex flex-col items-end justify-center gap-6">
                    <div className="flex items-center gap-12 justify-center bg-orange-100 p-2 rounded-full">
                        <p className="text-base text-orange-500 font-semibold">Amout: 20000VND</p>
                        <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
                            <img src="https://picsum.photos/100" alt="" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="w-full p-4 my-6">
                <div className="w-full flex items-center justify-between">
                    <p className="text-2xl font-semibold capitalize 
                    text-headingColor relative before:absolute 
                    before:rounded-lg before:content before:w-32
                    before:h-1 before:bottom-0 before:left-0 
                    before:bg-gradient-to-tr from-orange-400 to-orange-600
                    transition-all ease-in-out duration-100">Thẻ Game</p>

                    <div className="hidden md:flex gap-3 items-center">
                        <motion.div whiletap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 
                    cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex 
                    items-center justify-center">
                            <MdChevronLeft className="text-lg text-white" />
                        </motion.div>
                        <motion.div whiletap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 
                    cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex 
                    items-center justify-center">
                            <MdChevronRight className="text-lg text-white" />
                        </motion.div>
                    </div>
                </div>

                <RowSlider flag={true}/>

            </section>
        </div>
    )
}

export default Main