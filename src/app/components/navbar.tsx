"use client"

import logo from "../assets/CS micro.png";
import whiteLogo from "../assets/White.png";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export default function Navbar() {
    return(
        <div className="w-full bg-[#292929] bg-opacity-30 z-20 sticky transition duration-500 top-0 select-none" id="navbar">
            <div className="flex flex-row items-center justify-between mx-auto px-3 sm:px-4 lg:px-8 py-2">
                <Link href="/" className="flex items-center">
                    <div>
                        <Image src={logo} alt="logo" className="w-[80px] sm:w-[100px] lg:w-36 lg:px-3" unoptimized />
                    </div>
                </Link>
                <div className="flex items-center">
                    <Image src={whiteLogo} alt="white logo" className="w-[80px] sm:w-[100px] lg:w-36 h-auto" unoptimized />
                </div>
            </div>
        </div>
    )
}