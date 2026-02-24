import React from 'react';
import { motion } from 'framer-motion';

const Aurora = ({ color1 = '#00D1FF', color2 = '#0066FF', color3 = '#FFD700', opacity = 0.5 }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-20"
                style={{
                    background: `radial-gradient(circle at center, ${color1}, transparent 50%)`,
                    filter: 'blur(80px)',
                }}
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -40, 0],
                    y: [0, -60, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[50%] -right-[50%] w-[200%] h-[200%] opacity-15"
                style={{
                    background: `radial-gradient(circle at center, ${color2}, transparent 60%)`,
                    filter: 'blur(100px)',
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [20, -20, 20],
                    y: [40, 0, 40],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -bottom-[50%] left-[10%] w-[150%] h-[150%] opacity-10"
                style={{
                    background: `radial-gradient(circle at center, ${color3}, transparent 50%)`,
                    filter: 'blur(120px)',
                }}
            />
        </div>
    );
};

export default Aurora;
