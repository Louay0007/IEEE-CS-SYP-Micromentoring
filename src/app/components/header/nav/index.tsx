import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { menuSlide } from '../anim';
import NextLink from 'next/link';
import Curve from './Curve';
import Footer from './Footer';
import { usePathname } from 'next/navigation';
import { AiFillHome, AiOutlineTeam, AiOutlineInfoCircle, AiOutlineAppstore, AiFillFacebook } from 'react-icons/ai';

const navItems = [
    { title: 'Home', href: '/', icon: <AiFillHome size={28} /> },
    { title: 'Works', href: '/events', icon: <AiOutlineAppstore size={28} /> },
    { title: 'About', href: '/about', icon: <AiOutlineInfoCircle size={28} /> },
    { title: 'Social', href: 'https://www.facebook.com/profile.php?id=61551019357834', icon: <AiFillFacebook size={28} /> },
    { title: 'Team', href: '/team', icon: <AiOutlineTeam size={28} /> },
];

type NavProps = {
  onClose: () => void;
};

export default function Nav({ onClose }: NavProps) {
    const pathname = usePathname();
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    // Close on ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Close on outside click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex justify-end" aria-modal="true" role="dialog">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
            <motion.div
                ref={sidebarRef}
                variants={menuSlide}
                initial="initial"
                animate="enter"
                exit="exit"
                className="w-[90vw] max-w-xs md:max-w-sm h-full bg-white/10 backdrop-blur-xl shadow-2xl border-l border-white/20 flex flex-col justify-between overflow-y-auto relative"
                role="navigation"
                aria-label="Sidebar navigation"
            >
                {/* Close button */}
                <button
                    className="absolute top-4 right-4 text-ieeeyellow text-3xl focus:outline-none"
                    onClick={onClose}
                    aria-label="Close sidebar"
                >
                    ×
                </button>
                <div className="flex flex-col gap-2 pt-20 pb-8 px-8">
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        const isExternal = item.href.startsWith('http');
                        return isExternal ? (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all text-lg font-semibold cursor-pointer select-none ${isActive ? 'bg-ieeeyellow/20 border-l-4 border-ieeeyellow text-ieeeyellow shadow' : 'hover:bg-ieeeyellow/10 text-white'}`}
                                style={{ position: 'relative' }}
                                tabIndex={0}
                                aria-current={isActive ? 'page' : undefined}
                                onClick={onClose}
                            >
                                <span>{item.icon}</span>
                                {item.title}
                                {isActive && (
                                    <motion.span layoutId="sidebar-active-indicator" className="absolute left-0 top-0 h-full w-1 bg-ieeeyellow rounded-r-lg" />
                                )}
                            </a>
                        ) : (
                            <NextLink
                                key={index}
                                href={item.href}
                                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all text-lg font-semibold cursor-pointer select-none ${isActive ? 'bg-ieeeyellow/20 border-l-4 border-ieeeyellow text-ieeeyellow shadow' : 'hover:bg-ieeeyellow/10 text-white'}`}
                                style={{ position: 'relative' }}
                                tabIndex={0}
                                aria-current={isActive ? 'page' : undefined}
                                onClick={onClose}
                            >
                                <span>{item.icon}</span>
                                {item.title}
                                {isActive && (
                                    <motion.span layoutId="sidebar-active-indicator" className="absolute left-0 top-0 h-full w-1 bg-ieeeyellow rounded-r-lg" />
                                )}
                            </NextLink>
                        );
                    })}
                </div>
                <Footer />
                <Curve />
            </motion.div>
        </div>
    );
}