'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, Target, MessageSquare, Zap, TrendingUp, Users, Link as LinkIcon, Lightbulb } from 'lucide-react';
import muLogo from '../assets/Mu.png';

const MicroMentoring = () => {
    const keyFeatures = [
        {
            icon: <Clock className="w-10 h-10" strokeWidth={2} />,
            title: "Duration",
            description: "3-4 months per mentoring relationship"
        },
        {
            icon: <MessageSquare className="w-10 h-10" strokeWidth={2} />,
            title: "Structure",
            description: "At least four mentoring sessions"
        },
        {
            icon: <Target className="w-10 h-10" strokeWidth={2} />,
            title: "System",
            description: "Well-defined feedback system"
        },
        {
            icon: <Zap className="w-10 h-10" strokeWidth={2} />,
            title: "Focus",
            description: "Short, focused, and packed with all the essence of mentoring"
        }
    ];

    const muMeanings = [
        {
            icon: <Zap className="w-7 h-7" strokeWidth={2.5} />,
            title: "Short and Focused",
            description: "The micro version of traditional mentoring"
        },
        {
            icon: <LinkIcon className="w-7 h-7" strokeWidth={2.5} />,
            title: "Connected Relationship",
            description: "Two verticals connected by the central strand represent mentors and mentees supporting each other"
        },
        {
            icon: <Users className="w-7 h-7" strokeWidth={2.5} />,
            title: "Formal Structure",
            description: "Simple logo represents formal commitments between mentors and mentees"
        },
        {
            icon: <TrendingUp className="w-7 h-7" strokeWidth={2.5} />,
            title: "Progress and Growth",
            description: "The gradient shows positive progress throughout the mentoring relationship"
        }
    ];

    const comparisonData = [
        {
            aspect: "Duration",
            traditional: "Long-term",
            micro: "3-4 months"
        },
        {
            aspect: "Sessions",
            traditional: "Ongoing",
            micro: "At least 4 sessions"
        },
        {
            aspect: "Focus",
            traditional: "Broad development",
            micro: "Specific goals"
        },
        {
            aspect: "Commitment",
            traditional: "Extended",
            micro: "Focused & manageable"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

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

            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Main Title Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-ieeeyellow via-amber-400 to-orange-500 bg-clip-text text-transparent">
                            What is Micro Mentoring?
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
                    >
                        Micro Mentoring combines mentoring features with the concept of <span className="text-ieeeyellow font-semibold">micro</span> or <span className="text-ieeeyellow font-semibold">small</span>. 
                        Everything in Micro Mentoring is the same as traditional mentoring but occurs over a <span className="text-ieeeyellow font-semibold">shorter time frame</span>.
                    </motion.p>
                </div>

                {/* Key Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {keyFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                                style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                            ></div>
                            <div className="relative bg-[#292929] bg-opacity-40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-ieeeyellow transition-all duration-300">
                                <div className="mb-4 text-ieeeyellow">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-ieeeyellow mb-3">{feature.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ieeeyellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mu Symbol Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-[#292929] via-[#1a1a1a] to-black border border-gray-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-ieeeyellow opacity-5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10">
                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                {/* Mu Symbol Visual */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.7, type: "spring" }}
                                    viewport={{ once: true }}
                                    className="flex-shrink-0"
                                >
                                    <div className="relative flex items-center justify-center">
                                        <Image
                                            src={muLogo}
                                            alt="Micro (μ) logo"
                                            className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
                                            priority={false}
                                        />
                                    </div>
                                </motion.div>

                                {/* Symbol Meaning */}
                                <div className="flex-1">
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ieeeyellow mb-3 sm:mb-4">
                                        The μ Symbol Meaning
                                    </h3>
                                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                                        <span className="text-ieeeyellow font-semibold">Micro</span> (Greek letter <span className="text-2xl text-ieeeyellow">μ</span>, mu) is a unit prefix in the metric system denoting a factor of <span className="text-ieeeyellow font-semibold">one millionth</span> and comes from the Greek <span className="italic">mikrós</span>, meaning <span className="text-ieeeyellow font-semibold">"small."</span>
                                    </p>
                                    <p className="text-gray-400 mb-8">The μ in our logo represents:</p>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {muMeanings.map((meaning, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                                className="flex gap-3 items-start p-4 rounded-xl bg-black bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 group cursor-pointer"
                                            >
                                                <div className="flex-shrink-0 text-ieeeyellow group-hover:scale-110 transition-transform duration-300">
                                                    {meaning.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-ieeeyellow mb-1">{meaning.title}</h4>
                                                    <p className="text-sm text-gray-400 leading-relaxed">{meaning.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-10 bg-gradient-to-r from-ieeeyellow to-orange-500 bg-clip-text text-transparent">
                        Traditional vs Micro Mentoring
                    </h3>
                    
                    <div className="max-w-5xl mx-auto">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="bg-gradient-to-br from-[#292929] to-black rounded-t-2xl p-4 border border-gray-800">
                                <h4 className="text-xl font-bold text-ieeeyellow text-center">Aspect</h4>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-4 border border-gray-700">
                                <h4 className="text-xl font-bold text-gray-300 text-center">Traditional Mentoring</h4>
                            </div>
                            <div className="bg-gradient-to-br from-ieeeyellow to-orange-500 rounded-t-2xl p-4">
                                <h4 className="text-xl font-bold text-black text-center">Micro Mentoring</h4>
                            </div>
                        </div>

                        {/* Table Rows */}
                        <div className="space-y-2">
                            {comparisonData.map((row, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                    className="grid grid-cols-3 gap-4 group"
                                >
                                    <div className="bg-[#292929] bg-opacity-60 backdrop-blur-sm p-6 border border-gray-800 rounded-xl group-hover:border-ieeeyellow transition-all duration-300">
                                        <p className="font-semibold text-ieeeyellow text-center">{row.aspect}</p>
                                    </div>
                                    <div className="bg-[#1a1a1a] bg-opacity-80 backdrop-blur-sm p-6 border border-gray-800 rounded-xl group-hover:border-gray-600 transition-all duration-300">
                                        <p className="text-gray-400 text-center">{row.traditional}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-ieeeyellow to-orange-500 bg-opacity-10 backdrop-blur-sm p-6 border border-ieeeyellow border-opacity-50 rounded-xl group-hover:border-opacity-100 transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-ieeeyellow to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                        <p className="text-black font-semibold text-center relative z-10">{row.micro}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Decorative Element */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="h-2 bg-gradient-to-r from-transparent via-ieeeyellow to-transparent rounded-full mt-8"
                        ></motion.div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-ieeeyellow to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-ieeeyellow/50 transition-all duration-300 cursor-pointer group">
                        <Lightbulb className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Start Your Micro Mentoring Journey</span>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default MicroMentoring;
