import React from 'react';
import { motion } from 'framer-motion';
import bono1 from '../assets/BONO1 RESINA.png';
import bono2 from '../assets/BONO2 RESINA.png';
import bono3 from '../assets/BONO3 RESINA.png';

const bonuses = [
    { img: bono1, alt: "Bono 1" },
    { img: bono2, alt: "Bono 2" },
    { img: bono3, alt: "Bono 3" }
];

const Bonuses = () => {
    return (
        <section className="py-20 bg-black px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Si accedes <span className="text-primary italic">HOY</span> Recibirás Estos 3 <br /> BONOS Totalmente Gratis!</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {bonuses.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <img
                                src={b.img}
                                alt={b.alt}
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-xl"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bonuses;
