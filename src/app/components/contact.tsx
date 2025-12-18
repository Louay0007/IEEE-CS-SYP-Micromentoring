'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, MessageCircle, Send, Globe } from 'lucide-react';

const Contact = () => {
    const contactMethods = [
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email Us",
            description: "Get in touch with our team",
            link: "mailto:syp-micro-mentoring@computer.org",
            displayText: "syp-micro-mentoring@computer.org",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <ExternalLink className="w-8 h-8" />,
            title: "Linktree",
            description: "All our social links in one place",
            link: "https://linktr.ee/ieeecs.syp.micromentoring",
            displayText: "linktr.ee/ieeecs.syp.micromentoring",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "IEEE Computer Society",
            description: "Visit the official IEEE CS website",
            link: "https://computer.org",
            displayText: "computer.org",
            color: "from-ieeeyellow to-orange-500"
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
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-ieeeyellow via-amber-400 to-orange-500 bg-clip-text text-transparent">
                        Stay Updated
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-3 sm:mb-4 px-4">
                        Check this page regularly for IEEE CS SYP Micro Mentoring program announcements and application cycles
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto px-4">
                        Connect with the IEEE Computer Society through any of these channels
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={index}
                            href={method.link}
                            target={method.link.startsWith('http') ? '_blank' : undefined}
                            rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative cursor-pointer"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 group-hover:border-ieeeyellow/50 rounded-3xl p-8 h-full transition-all duration-300">
                                <div className="mb-6 text-ieeeyellow group-hover:scale-110 transition-transform duration-300">
                                    {method.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                                <p className="text-gray-400 mb-4">{method.description}</p>
                                <div className="flex items-center gap-2 text-ieeeyellow font-semibold group-hover:gap-3 transition-all duration-300">
                                    <span className="break-all">{method.displayText}</span>
                                    {method.link.startsWith('http') && (
                                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                                    )}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Additional Info Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-ieeeyellow to-orange-500 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"></div>
                        <div className="relative bg-gradient-to-br from-[#2a1a0e] to-[#1a1208] border-2 border-ieeeyellow/30 rounded-3xl p-8 lg:p-10">
                            <div className="flex flex-col lg:flex-row items-center gap-6">
                                <MessageCircle className="w-16 h-16 text-ieeeyellow flex-shrink-0" strokeWidth={2} />
                                <div className="flex-1 text-center lg:text-left">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-ieeeyellow mb-2 sm:mb-3">Questions or Feedback?</h3>
                                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                                        We'd love to hear from you! Whether you have questions about the IEEE CS SYP Micro Mentoring program, want to share feedback, or are interested in becoming a mentor or mentee, don't hesitate to reach out through any of the channels above.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a 
                        href="mailto:syp-micro-mentoring@computer.org"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-ieeeyellow to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-ieeeyellow/50 transition-all duration-300 group"
                    >
                        <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Us a Message</span>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
