import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Index() {
    const [paths, setPaths] = useState({ initialPath: '', targetPath: '' });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const h = window.innerHeight;
            setPaths({
                initialPath: `M100 0 L200 0 L200 ${h} L100 ${h} Q-100 ${h/2} 100 0`,
                targetPath: `M100 0 L200 0 L200 ${h} L100 ${h} Q100 ${h/2} 100 0`,
            });
        }
    }, []);

    const curve = {
        initial: {
            d: paths.initialPath
        },
        enter: {
            d: paths.targetPath,
            transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: paths.initialPath,
            transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
        }
    }

    return (
        <svg className={styles.svgCurve}>
            <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
        </svg>
    )
}