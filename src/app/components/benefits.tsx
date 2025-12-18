'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Target, TrendingUp, Heart, Award, Network, Shield, CheckCircle2, ChevronDown, Star, Lightbulb, Sparkles } from 'lucide-react';

const Benefits = () => {
    const [activeTab, setActiveTab] = useState<'mentees' | 'mentors'>('mentees');
    const [expandedMentee, setExpandedMentee] = useState(false);
    const [expandedMentor, setExpandedMentor] = useState(false);

    const menteeBenefits = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Personalized Guidance",
            description: "Access focused support tailored to your career goals"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Professional Growth",
            description: "Learn from real-life experiences of industry professionals and academics"
        },
        {
            icon: <Network className="w-6 h-6" />,
            title: "Network Expansion",
            description: "Build valuable connections in your field"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Hassle-Free Experience",
            description: "Focus on actual mentoring while we handle platform logistics"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Career Navigation",
            description: "Get help setting realistic, achievable goals with feedback"
        }
    ];

    const mentorBenefits = [
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Give Back",
            description: "Make a meaningful impact on entry-level engineers' careers"
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Enhance Your Skills",
            description: "Develop coaching and leadership abilities"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Hassle-Free Platform",
            description: "We handle administrative tasks so you can focus on mentoring"
        },
        {
            icon: <Network className="w-6 h-6" />,
            title: "Network Expansion",
            description: "Strengthen your professional connections"
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Personal Fulfillment",
            description: "Experience the reward of contributing to others' growth"
        }
    ];

    const menteeResponsibilities = [
        "Actively participate and communicate your objectives and aspirations",
        "Work with your mentor to establish clear personal and professional development goals",
        "Be receptive to feedback and create action plans to learn and excel",
        "Hold yourself responsible for your commitments",
        "Conduct yourself professionally and respect your mentor's time"
    ];

    const mentorResponsibilities = [
        "Provide guidance, advice, and share your experiences",
        "Help mentees navigate challenges in their career journey",
        "Assist in setting realistic goals and provide constructive feedback",
        "Share your knowledge, abilities, and industry insights",
        "Introduce mentees to valuable contacts and expand their network",
        "Actively listen and offer guidance on concerns, questions, and ideas"
    ];

    const mentorCriteria = [
        "Professionals or academics with at least 8 months in current role, OR",
        "Combined experience of at least 1 year after first degree graduation",
        "Not currently a student (unless post-graduate research student/PhD with 1+ year experience)",
        "Passion to guide the next generation and support career goals"
    ];

    return (
        <motion.section 
            className="relative bg-black py-16 lg:py-24 overflow-hidden"
            initial={{opacity: 0, y: 75}} 
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: 'linear', type: "tween"}}
        >
            {/* Background Elements */}
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
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-ieeeyellow via-amber-400 to-orange-500 bg-clip-text text-transparent">
                        Why Join IEEE CS SYP Micro Mentoring?
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                        Join a global community of students, young professionals, and experienced mentors dedicated to advancing careers in computer science and engineering
                    </p>
                </motion.div>

                {/* Desktop: Side-by-Side Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Mentees Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Header Card */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-blue-500/30 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <GraduationCap className="w-10 h-10 text-blue-400" strokeWidth={2} />
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white">For Mentees</h3>
                                        <p className="text-blue-300 text-sm">Students & Young Professionals</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic">
                                    Being a mentee is a commitment to learning, growing, and excelling.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="space-y-4">
                            {menteeBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                                {benefit.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                                                <p className="text-sm text-gray-400">{benefit.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* What You'll Do - Expandable */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <button
                                onClick={() => setExpandedMentee(!expandedMentee)}
                                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-between group"
                            >
                                <span className="flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5" />
                                    What You&apos;ll Do as a Mentee
                                </span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedMentee ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {expandedMentee && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="bg-[#1a1a1a] border border-blue-500/30 rounded-b-xl p-6 space-y-3">
                                            {menteeResponsibilities.map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <p className="text-gray-300 text-sm">{item}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>

                    {/* Mentors Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Header Card */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-ieeeyellow to-orange-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                            <div className="relative bg-gradient-to-br from-[#2a1a0e] to-[#1a1208] border border-ieeeyellow/30 rounded-3xl p-8 hover:border-ieeeyellow/50 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <Briefcase className="w-10 h-10 text-ieeeyellow" strokeWidth={2} />
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white">For Mentors</h3>
                                        <p className="text-ieeeyellow text-sm">Industry Professionals</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic">
                                    Guiding the next generation is noble.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="space-y-4">
                            {mentorBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-ieeeyellow/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-ieeeyellow/50 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 text-ieeeyellow group-hover:scale-110 transition-transform duration-300">
                                                {benefit.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                                                <p className="text-sm text-gray-400">{benefit.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* What You'll Do - Expandable */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <button
                                onClick={() => setExpandedMentor(!expandedMentor)}
                                className="w-full bg-gradient-to-r from-ieeeyellow to-orange-500 hover:from-amber-400 hover:to-orange-600 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-between group"
                            >
                                <span className="flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5" />
                                    What You&apos;ll Do as a Mentor
                                </span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedMentor ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {expandedMentor && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="bg-[#1a1a1a] border border-ieeeyellow/30 rounded-b-xl p-6 space-y-3">
                                            {mentorResponsibilities.map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-ieeeyellow flex-shrink-0 mt-0.5" />
                                                    <p className="text-gray-300 text-sm">{item}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Who Can Be a Mentor */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-ieeeyellow/10 to-orange-500/10 border-2 border-ieeeyellow/50 rounded-2xl p-6"
                        >
                            <h4 className="text-xl font-bold text-ieeeyellow mb-4 flex items-center gap-2">
                                <Award className="w-6 h-6" />
                                Who Can Be a Mentor
                            </h4>
                            <ul className="space-y-3">
                                {mentorCriteria.map((criteria, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3"
                                    >
                                        <Star className="w-5 h-5 text-ieeeyellow flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 text-sm">{criteria}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Mobile: Tabbed Layout */}
                <div className="lg:hidden">
                    {/* Tab Switcher */}
                    <div className="flex gap-4 mb-8">
                        <button
                            onClick={() => setActiveTab('mentees')}
                            className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                                activeTab === 'mentees'
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                                    : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-gray-800'
                            }`}
                        >
                            <GraduationCap className="w-6 h-6 mx-auto mb-2" />
                            Mentees
                        </button>
                        <button
                            onClick={() => setActiveTab('mentors')}
                            className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                                activeTab === 'mentors'
                                    ? 'bg-gradient-to-r from-ieeeyellow to-orange-500 text-black shadow-lg'
                                    : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-gray-800'
                            }`}
                        >
                            <Briefcase className="w-6 h-6 mx-auto mb-2" />
                            Mentors
                        </button>
                    </div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        {activeTab === 'mentees' ? (
                            <motion.div
                                key="mentees"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                {/* Mentees Content - Same as desktop */}
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-xl"></div>
                                    <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-blue-500/30 rounded-3xl p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <GraduationCap className="w-10 h-10 text-blue-400" strokeWidth={2} />
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">For Mentees</h3>
                                                <p className="text-blue-300 text-sm">Students & Young Professionals</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 italic text-sm">
                                            Being a mentee is a commitment to learning, growing, and excelling.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {menteeBenefits.map((benefit, index) => (
                                        <div key={index} className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <div className="text-blue-400">{benefit.icon}</div>
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                                                    <p className="text-sm text-gray-400">{benefit.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setExpandedMentee(!expandedMentee)}
                                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-between"
                                >
                                    <span className="flex items-center gap-2">
                                        <Lightbulb className="w-5 h-5" />
                                        What You&apos;ll Do
                                    </span>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedMentee ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {expandedMentee && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="bg-[#1a1a1a] border border-blue-500/30 rounded-xl p-4 space-y-3"
                                        >
                                            {menteeResponsibilities.map((item, index) => (
                                                <div key={index} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                    <p className="text-gray-300 text-sm">{item}</p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="mentors"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                {/* Mentors Content - Same as desktop */}
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-ieeeyellow to-orange-500 rounded-3xl opacity-20 blur-xl"></div>
                                    <div className="relative bg-gradient-to-br from-[#2a1a0e] to-[#1a1208] border border-ieeeyellow/30 rounded-3xl p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Briefcase className="w-10 h-10 text-ieeeyellow" strokeWidth={2} />
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">For Mentors</h3>
                                                <p className="text-ieeeyellow text-sm">Industry Professionals</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 italic text-sm">
                                            Guiding the next generation is noble.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {mentorBenefits.map((benefit, index) => (
                                        <div key={index} className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <div className="text-ieeeyellow">{benefit.icon}</div>
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                                                    <p className="text-sm text-gray-400">{benefit.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setExpandedMentor(!expandedMentor)}
                                    className="w-full bg-gradient-to-r from-ieeeyellow to-orange-500 text-black font-bold py-4 px-6 rounded-xl flex items-center justify-between"
                                >
                                    <span className="flex items-center gap-2">
                                        <Lightbulb className="w-5 h-5" />
                                        What You&apos;ll Do
                                    </span>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedMentor ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {expandedMentor && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="bg-[#1a1a1a] border border-ieeeyellow/30 rounded-xl p-4 space-y-3"
                                        >
                                            {mentorResponsibilities.map((item, index) => (
                                                <div key={index} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-ieeeyellow flex-shrink-0 mt-0.5" />
                                                    <p className="text-gray-300 text-sm">{item}</p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="bg-gradient-to-br from-ieeeyellow/10 to-orange-500/10 border-2 border-ieeeyellow/50 rounded-2xl p-5">
                                    <h4 className="text-lg font-bold text-ieeeyellow mb-3 flex items-center gap-2">
                                        <Award className="w-5 h-5" />
                                        Who Can Be a Mentor
                                    </h4>
                                    <ul className="space-y-2">
                                        {mentorCriteria.map((criteria, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <Star className="w-4 h-4 text-ieeeyellow flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-300 text-sm">{criteria}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
};

export default Benefits;
