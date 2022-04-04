import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MdShoppingBasket } from 'react-icons/md'

function RowSlider({ scrollValue, flag, data }) {

  const rowSliderRef = useRef()

  useEffect(() => {
    rowSliderRef.current.scrollLeft += scrollValue
  }, [scrollValue])

  return (
    <div ref={rowSliderRef} className={`w-full flex items-center scroll-smooth gap-3 
    my-12 bg-orange-100 ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}>

      {data.map((item, index) => {
        return <RowSlider.Item key={index} />
      })}

    </div>
  )
}

//> 5:00:00

RowSlider.Item = function () {
  return <div className="w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-auto bg-gray-700 rounded-lg p-2 my-12 backdrop-blur-lg
  hover:drop-shadow-lg">
    <div className="w-full flex items-center h-24 justify-between mt-5">
      <motion.img whileHover={{ scale: 1.2 }} src="https://brandlogos.net/wp-content/uploads/2021/10/garena-logo.png" className="w-40 ml-3 drop-shadow-2xl" alt="" />
      <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-full 
          bg-red-600 flex items-center justify-center cursor-pointer 
          hover:shadow-md">
        <MdShoppingBasket className="text-white" />
      </motion.div>
    </div>
    <div className="w-full flex flex-col items-end justify-end">
      <p className="text-primary font-semibold text-base md:text-lg">Garena</p>
      <p className="mt-1 text-sm text-gray-400">Mệnh giá: 100.000đ</p>
      <div className="flex items-center gap-8">
        <p className="text-lg text-gray-400 font-semibold">
          <span className="text-sm text-red-500">98.000</span> đ
        </p>
      </div>
    </div>
  </div>
}

export default RowSlider