'use client'
import styles from './style.module.scss'
import { useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="z-20 flex items-center">
                <div
                    onClick={() => setIsActive(!isActive)}
                    className={styles.button}
                    style={{
                        position: 'relative',
                        width: 40,
                        height: 40,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'rgba(41,41,41,0.8)',
                        borderRadius: 8,
                        cursor: 'pointer',
                    }}
                >
                    {/* Fallback burger icon if CSS fails */}
                    <div style={{ width: 24, height: 3, background: 'white', margin: 2, borderRadius: 2 }} />
                    <div style={{ width: 24, height: 3, background: 'white', margin: 2, borderRadius: 2 }} />
                    <div style={{ width: 24, height: 3, background: 'white', margin: 2, borderRadius: 2 }} />
                </div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav onClose={() => setIsActive(false)} />}
            </AnimatePresence>
        </>
    )
}