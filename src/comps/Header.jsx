import React from 'react'
import { SiRiotgames } from "react-icons/si"
import { BsFillBagFill } from "react-icons/bs"
function Header() {
    return <div className="z-50 w-screen bg-slate-300">
        {/* desktop & tablet */}
        <div className="hidden md:flex w-full h-full p-4 justify-between">
            <div className="flex items-center gap-2">
                <SiRiotgames className="w-10 object-cover"/>
                <p className="text-headingColor text-xl font-bold">vGamepay+</p>
            </div>
            {/* --- */}
            <ul className="flex items-center gap-8 ml-auto">
                <li className="text-base textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Garena</li>
                <li className="text-base textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Vietel</li>
                <li className="text-base textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Gosu</li>
                <li className="text-base textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Vinafone</li>
                <li className="text-base textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Mobilefone</li>
            </ul>

            <div className="relative flex items-center justify-center">
                <BsFillBagFill className="text-textColor text-2xl ml-8 cursor-pointer" />
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-xs text-white font-semibold">0</p>
                </div>
            </div>

        </div>
        {/* mobile */}
        <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
    </div>
}

export default Header