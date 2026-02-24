import React from 'react';
import SplitText from '../components/react-bits/SplitText';
import Magnet from '../components/react-bits/Magnet';
import GradientText from '../components/react-bits/GradientText';
import { motion } from 'framer-motion';
import bgHero from '../assets/4.png';
import { Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-20 overflow-hidden pt-20 pb-10 bg-black">
            {/* Imagen de fondo 3.png con un overlay que equilibra la luz */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src={bgHero}
                    alt="Background"
                    className="w-full h-full object-cover opacity-40 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                <div className="absolute inset-0 bg-primary/5" />
            </div>

            <div className="relative z-10 max-w-7xl w-full flex flex-col items-center justify-center text-center">

                {/* Contenido Centrado sobre el fondo */}
                <div className="max-w-4xl flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-primary/10 border border-primary/30 px-5 py-2 rounded-full text-primary text-xs font-black mb-8 tracking-[0.3em] uppercase inline-flex items-center gap-2"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Inscripciones Abiertas - 2026
                    </motion.div>

                    <div className="mb-10 w-full flex flex-col items-center">
                        <SplitText
                            text="DOMINA EL ARTE DE LA RESINA"
                            className="text-2xl md:text-3xl font-black text-white leading-[0.85] tracking-tighter mb-6"
                        />
                        <div className="h-1 w-32 bg-primary mb-8 shadow-[0_0_15px_rgba(0,255,187,0.5)]" />
                        <GradientText
                            colors={["#ffffff", "#00FFBB", "#00CC96", "#00FFBB", "#ffffff"]}
                            animationSpeed={6}
                            showBorder={false}
                            className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter"
                        >
                            Resina Master Pro
                        </GradientText>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-gray-300 text-xl md:text-3xl max-w-3xl mb-14 leading-relaxed font-bold text-center mx-auto"
                    >
                        Aprende el método exacto para facturar con piezas exclusivas, <span className="text-white underline decoration-primary decoration-4 underline-offset-8">desde cero</span> y vive de tu pasión creativa.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <Magnet padding={50} strength={3}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 255, 187, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group px-12 py-6 bg-primary text-black font-black text-xl rounded-xl overflow-hidden transition-all cursor-target flex items-center gap-3"
                            >
                                <span className="relative z-10 uppercase tracking-tight">QUIERO PARTICIPAR</span>
                                <Zap className="w-5 h-5 fill-black" />
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                            </motion.button>
                        </Magnet>

                        <div className="flex flex-col items-center text-gray-400">
                            <span className="text-white font-bold text-sm uppercase">Próximo Lanzamiento</span>
                            <span className="text-xs tracking-widest font-black">Cupos Muy Limitados</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Indicador de scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block z-20"
            >
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-2 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
