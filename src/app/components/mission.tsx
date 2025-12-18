

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import whiteLogo from "../assets/Light.png";
import csMicroLogo from "../assets/micro.png";
import csLogo from "../assets/cs.webp";

const Mission = () => {

    return (
        <>
            <motion.div className="bg-[#000000]" initial={{opacity: 0, y: 75}} whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, ease: 'linear', type: "tween"}}>
                <div className='max-w-7xl mx-auto px-4 lg:px-8'>
                    <div className="flex flex-col sm:flex-row justify-center items-center py-6 sm:py-8 gap-4 sm:gap-6 lg:gap-8">
                        <Image src={csMicroLogo} alt="CS micro logo" className="w-[120px] sm:w-[180px] lg:w-[300px] h-auto object-contain" unoptimized />
                        <Image src={csLogo} alt="CS logo" className="w-[120px] sm:w-[180px] lg:w-[300px] h-auto object-contain" unoptimized />
                        <Image src={whiteLogo} alt="white logo" className="w-[180px] sm:w-[240px] lg:w-[450px] h-auto object-contain" unoptimized />
                    </div>
                    <div className="mx-auto px-4 py-4 lg:px-8">
                        <p className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-ieeeyellow leading-tight">IEEE CS SYP Micro Mentoring</p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <div className='mx-4 sm:mx-8 md:mx-16 text-center'>
                            <p className='my-4 text-sm sm:text-base leading-relaxed'>The IEEE Computer Society Students and Young Professionals Micro Mentoring program connects aspiring professionals with experienced mentors through focused, short-term mentoring relationships designed to accelerate career growth and technical excellence.</p>
                            <p className='text-center my-4 text-ieeeorange hover:underline text-sm sm:text-base'><Link target="no_ref"
                                                                                                  href="https://computer.org">Learn
                                more at computer.org</Link></p>
                        </div>
                    </div>
                    
                </div>
            </motion.div>
        </>
    );
};

export default Mission;
