'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Calendar, UserPlus, Users, CheckCircle2, Mail, ExternalLink, Clock, Target, UserCheck, MessageSquare, TrendingUp, Award } from 'lucide-react';

const HowToJoin = () => {
    const menteeSteps = [
        {
            icon: <UserPlus className="w-5 h-5" />,
            text: "Submit mentee application during open enrollment"
        },
        {
            icon: <Target className="w-5 h-5" />,
            text: "Complete your profile with objectives and goals"
        },
        {
            icon: <UserCheck className="w-5 h-5" />,
            text: "Get matched with a suitable mentor"
        },
        {
            icon: <Clock className="w-5 h-5" />,
            text: "Begin your 3-4 month mentoring journey"
        },
        {
            icon: <MessageSquare className="w-5 h-5" />,
            text: "Participate in at least 4 mentoring sessions"
        },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            text: "Provide feedback to improve the program"
        }
    ];

    const mentorSteps = [
        {
            icon: <CheckCircle2 className="w-5 h-5" />,
            text: "Verify you meet eligibility requirements"
        },
        {
            icon: <UserPlus className="w-5 h-5" />,
            text: "Submit mentor application during open enrollment"
        },
        {
            icon: <Target className="w-5 h-5" />,
            text: "Share your expertise areas and availability"
        },
        {
            icon: <UserCheck className="w-5 h-5" />,
            text: "Get matched with a mentee"
        },
        {
            icon: <MessageSquare className="w-5 h-5" />,
            text: "Guide your mentee through 4+ sessions over 3-4 months"
        },
        {
            icon: <Award className="w-5 h-5" />,
            text: "Help shape the next generation of engineers"
        }
    ];

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
                {/* Main Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-ieeeyellow via-amber-400 to-orange-500 bg-clip-text text-transparent">
                        Join the Micro Mentoring Community
                    </h2>
                </motion.div>

                {/* Current Status Alert */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                        <div className="relative bg-gradient-to-br from-red-900/20 to-orange-900/20 border-2 border-red-500/50 rounded-2xl p-6 lg:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 p-3 bg-red-500/20 rounded-xl">
                                    <AlertCircle className="w-8 h-8 text-red-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-2">Current Status</h3>
                                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                                        Call for new mentors and mentees is currently <span className="font-bold text-red-400">closed</span>. Check back or email us if you'd like to get involved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mentorship Cycles */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-ieeeyellow/30 rounded-2xl p-6 lg:p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <Calendar className="w-10 h-10 text-ieeeyellow" strokeWidth={2} />
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-ieeeyellow">Mentorship Cycles</h3>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
                            We hold <span className="text-ieeeyellow font-bold">three mentorship cycles</span> each year. Check back regularly for updates on when applications open.
                        </p>
                    </div>
                </motion.div>

                {/* Application Process */}
                <div className="mb-12">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-white"
                    >
                        Application Process <span className="text-gray-500">(When Open)</span>
                    </motion.h3>

                    {/* Desktop: Side by Side */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-8">
                        {/* For Mentees */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-blue-500/30 rounded-3xl p-8 h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <Users className="w-10 h-10 text-blue-400" strokeWidth={2} />
                                    <h4 className="text-2xl font-bold text-white">For Mentees</h4>
                                </div>
                                <div className="space-y-4">
                                    {menteeSteps.map((step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.4 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-4 p-4 bg-black/30 rounded-xl hover:bg-black/50 transition-all duration-300 group"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                                                <span className="text-blue-400 font-bold">{index + 1}</span>
                                            </div>
                                            <div className="flex-1 flex items-start gap-3">
                                                <div className="flex-shrink-0 text-blue-400 mt-0.5">
                                                    {step.icon}
                                                </div>
                                                <p className="text-gray-300 leading-relaxed">{step.text}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* For Mentors */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-[#2a1a0e] to-[#1a1208] border border-ieeeyellow/30 rounded-3xl p-8 h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <Award className="w-10 h-10 text-ieeeyellow" strokeWidth={2} />
                                    <h4 className="text-2xl font-bold text-white">For Mentors</h4>
                                </div>
                                <div className="space-y-4">
                                    {mentorSteps.map((step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.4 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-4 p-4 bg-black/30 rounded-xl hover:bg-black/50 transition-all duration-300 group"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 bg-ieeeyellow/20 rounded-lg flex items-center justify-center group-hover:bg-ieeeyellow/30 transition-colors duration-300">
                                                <span className="text-ieeeyellow font-bold">{index + 1}</span>
                                            </div>
                                            <div className="flex-1 flex items-start gap-3">
                                                <div className="flex-shrink-0 text-ieeeyellow mt-0.5">
                                                    {step.icon}
                                                </div>
                                                <p className="text-gray-300 leading-relaxed">{step.text}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile: Stacked */}
                    <div className="lg:hidden space-y-8">
                        {/* For Mentees */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-blue-500/30 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <Users className="w-8 h-8 text-blue-400" strokeWidth={2} />
                                    <h4 className="text-xl font-bold text-white">For Mentees</h4>
                                </div>
                                <div className="space-y-3">
                                    {menteeSteps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-black/30 rounded-lg">
                                            <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center">
                                                <span className="text-blue-400 font-bold text-sm">{index + 1}</span>
                                            </div>
                                            <div className="flex items-start gap-2 flex-1">
                                                <div className="flex-shrink-0 text-blue-400 mt-0.5">
                                                    {step.icon}
                                                </div>
                                                <p className="text-gray-300 text-sm">{step.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* For Mentors */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-[#2a1a0e] to-[#1a1208] border border-ieeeyellow/30 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <Award className="w-8 h-8 text-ieeeyellow" strokeWidth={2} />
                                    <h4 className="text-xl font-bold text-white">For Mentors</h4>
                                </div>
                                <div className="space-y-3">
                                    {mentorSteps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-black/30 rounded-lg">
                                            <div className="flex-shrink-0 w-6 h-6 bg-ieeeyellow/20 rounded flex items-center justify-center">
                                                <span className="text-ieeeyellow font-bold text-sm">{index + 1}</span>
                                            </div>
                                            <div className="flex items-start gap-2 flex-1">
                                                <div className="flex-shrink-0 text-ieeeyellow mt-0.5">
                                                    {step.icon}
                                                </div>
                                                <p className="text-gray-300 text-sm">{step.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default HowToJoin;
