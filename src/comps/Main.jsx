import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowSlider from './RowSlider'
import Heading from './Heading'

function Main() {
    /** @const {array} items là kết quả trả về của request http**/
    const [items, $items] = useState([1, 2, 3, 4, 5])
    const [scrollValue, $scrollValue] = useState(0)

    useEffect(() => {

    }, [scrollValue])
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
                <Heading title="Mua nhiều nhất" scroll={scrollValue} setScroll={$scrollValue} />
                <RowSlider scrollValue={scrollValue} flag={true} data={items} />
            </section>

            <section className="w-full p-4 my-6">
                {/**
                    @param {number} scrollValue là giá trị của scroll
                    @param {function} setScroll là hàm set giá trị của scroll
                **/}
            </section>
        </div>
    )
}

//5:42:00
export default Main