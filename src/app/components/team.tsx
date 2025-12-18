"use client";

import { motion } from 'framer-motion';

const members = [
    {
        name: 'Anand Jagadeesh (AJ)',
        role: 'Team Lead',
        avatar: 'https://i.ibb.co/HDD0Bn8b/image.png',
        link: 'https://www.linkedin.com/in/anandjagadeesh/',
    },
    {
        name: 'Jihen Chouaib',
        role: 'Cluster Lead - Mentoring, Interactions and Relations',
        avatar: 'https://i.ibb.co/Kzm9s0fv/image.png',
        link: 'https://www.linkedin.com/in/jihenchouaib/',
    },
    {
        name: 'Uthej Kalathila',
        role: 'Cluster Lead - Outreach, Collaborations and Partnerships',
        avatar: 'https://i.ibb.co/LDMwLwtr/image.png',
        link: 'https://www.linkedin.com/in/utej-kalathila/',
    },
    {
        name: 'Lavanya Cheshani',
        role: 'Cluster Lead - Content Management and Communications',
        avatar: 'https://i.ibb.co/b99Nkym/1757617327497.jpg',
        link: 'https://www.linkedin.com/in/lavanyachesani/',
    },
    {
        name: 'Dhruv Singhal',
        role: 'Content Creator',
        avatar: 'https://i.ibb.co/Fq6pqRcw/1714788673530-1.jpg',
        link: 'https://www.linkedin.com/in/dhruv-singhal-123456/',
    },
    {
        name: 'Michel Adelino da Silva',
        role: 'Content Creator/Designer',
        avatar: 'https://i.ibb.co/0p1vkfZq/image.png',
        link: 'https://www.linkedin.com/in/michel-adelino/',
    },
    {
        name: 'Vishnu Gopal',
        role: 'Designer',
        avatar: 'https://i.ibb.co/3YSv26fw/image.png',
        link: 'https://www.linkedin.com/in/vishnu-gopal1409/',
    },
    {
        name: 'Dhia Ouerghemmi',
        role: 'Mentoring Coordination',
        avatar: 'https://i.ibb.co/qFkCLNQ9/1752344648646.png',
        link: 'https://www.linkedin.com/in/dhia-ouerghemmi-181b29246/',
    }
];

export default function TeamSection() {
    return (
    <motion.section 
        className="relative bg-black py-16 lg:py-24 overflow-hidden"
        initial={{opacity: 0, y: 75}} 
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.3, ease: 'linear', type: "tween"}}
    >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23FFA300' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-ieeeyellow via-amber-400 to-orange-500 bg-clip-text text-transparent">
                        Meet The Micro Mentoring Team
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                        Dedicated volunteers from the IEEE Computer Society Students and Young Professionals community working to connect mentors and mentees worldwide. Our team coordinates mentorship cycles, manages communications, and ensures a seamless experience for all participants.
                    </p>
                </motion.div>
                {/* Team Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {members.map((member, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden"
                        >
                            <div className="relative">
                                {/* Card Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-ieeeyellow to-orange-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                                
                                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 group-hover:border-ieeeyellow/50 rounded-3xl overflow-hidden transition-all duration-300">
                                    {/* Image */}
                                    <div className="relative h-96 overflow-hidden">
                                        <img 
                                            className="w-full h-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" 
                                            src={member.avatar} 
                                            alt={member.name} 
                                            width="826" 
                                            height="1239" 
                                        />
                                    </div>
                                    
                                    {/* Info Section */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2 transition-all duration-500 group-hover:text-ieeeyellow">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 min-h-[40px]">
                                            {member.role}
                                        </p>
                                        <a
                                            href={member.link}
                                            className="inline-flex items-center gap-2 text-ieeeyellow font-semibold text-sm hover:gap-3 transition-all duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>View LinkedIn</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}