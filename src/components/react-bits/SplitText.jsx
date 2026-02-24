import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ text, className = "" }) => {
    const words = text.split(" ");

    return (
        <div className={`flex flex-wrap ${className}`}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};

export default SplitText;
