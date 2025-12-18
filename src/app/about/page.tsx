'use client'

import Image from "next/image";
import logo1 from "~/app/assets/logo cs blanc.png";
import React from "react";
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';
import {motion} from "framer-motion"

export default function Page() {
    return (
        <>
            <ProgressBar
                height="4px"
                color="#FFA300"
                options={{showSpinner: false}}
                shallowRouting
            />
            <motion.div className="bg-[#000000]" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, ease: 'linear', type: "tween"}}>
                <div className="w-full py-12 bg-fixed">
                    <div className=" mx-auto px-4 lg:px-8 ">
                        <p className="text-5xl text-center font-bold text-ieeeyellow">About Us</p>
                        <hr className="mt-1 border-ieeegray opacity-20"/>
                    </div>
                </div>
                <div className=" mx-auto px-4 lg:px-8 py-8">
                    <div className='flex flex-col md:flex-row'>
                        <div className='my-auto mx-auto'>
                            <div className="md:py-8 md:px-3">
                                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                                <Image src={logo1} alt="logo" className="w-80 md:w-[28rem] drop-shadow-2xl mx-auto" unoptimized />
                            </div>
                        </div>
                        <div className='md:w-[70%] md:mx-16 mx-8 text-center md:text-left'>
                            <p className="text-2xl font-semibold text-ieeeyellow">IEEE Computer Society</p>
                            <div className=''>
                                <p className='my-4'>&quot;Serving computing at its best with inclusion and diversity&quot; is the
                                    prime motto of the IEEE Computer Society. This society was created keeping in mind
                                    IEEE&apos;s continued commitment to providing options at best. The IEEE Computer Society
                                    is driven by the central goals of equity, diversity, inclusion, and yearn to serve
                                    computing at its perfection.</p>
                                <p className='my-4'>With an intent to expand the IEEE&apos;s reach and learnings, this
                                    society was started a year back in early 2020. Since then, society has tried every
                                    possible course of action by conducting diverse events such as webinars,
                                    competitions, workshops, and mentorship programs to set a goal for the young
                                    achievers. The members of IEEE CS have been skilled and earned minimal expertise in
                                    roughly all possible sub-sections of CS via our accelerator program. The senior
                                    student mentors steer them on each stage they take and deliver them with the
                                    professional material for further reference.</p>
                                <p className='my-4'>We aim to proactively support diversity and inclusion by being the
                                    premier source for information, inspiration, and collaboration in computer science
                                    and engineering. Connecting members on campus, this IEEE Computer Society empowers
                                    the students who wish to advance in technology by delivering tools at all stages of
                                    their professional careers.</p>
                                <p className='my-4'>&quot;Computer science is the operating system for all innovations.&quot; At
                                    IEEE CS, we look at it similarly, trying to make a better world by working as a
                                    team.</p>
                                <p className='my-4'>At IEEE ISSATM Computer Society Student Branch Chapter, we&apos;re more than just a group of tech enthusiasts—we&apos;re a vibrant community of innovators, dreamers, and doers. United by our passion for computing, we transform ideas into reality through collaboration, curiosity, and a relentless drive for excellence. From hands-on workshops and cutting-edge hackathons to inspiring talks and mentorship, we empower every member to push boundaries and shape the future of technology. Here, diversity fuels our creativity, and every voice matters. Together, we code, create, and connect—building not just solutions, but lifelong friendships and a legacy of impact.</p>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-1 border-ieeegray opacity-20"/>
                </div>
            </motion.div>
        </>
    )
}