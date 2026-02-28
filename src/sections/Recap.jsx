import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Package, Layers, ShieldCheck } from 'lucide-react';
import GradientText from '../components/react-bits/GradientText';

const Recap = () => {
    const points = [
        "Aprenderás a tu propio ritmo, sin presiones y en tan solo 15 días obtendrás resultados increíbles.",
        "Nuestro programa cuenta con más de 100 clases para que logres el objetivo de ser una experta en el mundo de la resina epóxica.",
        "Contamos con una guía con el paso a paso que te ayudará a hacer más fácil tu proceso de aprendizaje.",
        "Garantía de satisfacción de 7 días. Si nuestro programa no cumple tus expectativas, te devolvemos el dinero."
    ];

    return (
        <section className="py-24 bg-black px-4 relative">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Cabecera */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white italic mb-4 uppercase">¡RECAPITULEMOS!</h2>
                    <p className="text-primary text-xl md:text-2xl font-bold tracking-tight">¡Estás a un paso de una gran oportunidad!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual de Bundle (Representación de cajas) */}
                    <div className="relative order-2 lg:order-1 flex justify-center">
                        <div className="relative w-full max-w-sm aspect-[4/5] perspective-1000">
                            {/* Caja Principal Mockup (Simulada con CSS) */}
                            <motion.div
                                initial={{ rotateY: -20, rotateX: 5 }}
                                whileHover={{ rotateY: -10, rotateX: 0 }}
                                className="w-full h-full bg-gradient-to-br from-gray-900 to-black border-2 border-primary/30 rounded-3xl shadow-[0_0_50px_rgba(0,255,187,0.1)] p-8 flex flex-col justify-between relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Package size={200} className="text-white" />
                                </div>

                                <div>
                                    <div className="h-1 w-full bg-primary mb-6" />
                                    <h4 className="text-3xl font-black text-white italic leading-none mb-2">RESINA</h4>
                                    <h4 className="text-5xl font-black text-primary italic leading-none">EXPRESS</h4>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white/50 text-sm italic font-bold">
                                        <Layers size={20} />
                                        10 MÓDULOS + 8 BONOS
                                    </div>
                                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-primary text-xs font-black uppercase tracking-widest text-center">
                                        Acceso de por vida
                                    </div>
                                </div>
                            </motion.div>

                            {/* Cajas de Bonos Superpuestas */}
                            <motion.div
                                initial={{ x: 60, y: 40, rotate: 5 }}
                                animate={{ x: 40, y: 80, rotate: 10 }}
                                className="absolute -bottom-10 -right-10 w-48 h-56 bg-gradient-to-br from-primary to-blue-500 rounded-2xl p-4 shadow-2xl flex flex-col justify-between"
                            >
                                <div className="bg-black/20 w-8 h-8 rounded-lg flex items-center justify-center">
                                    <CheckCircle2 size={16} className="text-white" />
                                </div>
                                <div className="text-black font-black leading-tight uppercase">
                                    <span className="text-[10px] block opacity-60">BONO EXCLUSIVO</span>
                                    GUÍA DE PROVEEDORES
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Texto Informativo */}
                    <div className="order-1 lg:order-2">
                        <div className="mb-10">
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                                <span className="text-white font-black">Resina Express</span> es el programa más completo del mercado con el que podrás afianzar tus conocimientos y emprender en el área de la <span className="text-primary italic font-bold">Resina Epóxica</span>.
                            </p>
                        </div>

                        <div className="space-y-6 mb-12">
                            {points.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1">
                                        <CheckCircle2 size={24} className="text-primary shrink-0" />
                                    </div>
                                    <p className="text-gray-300 text-base md:text-lg font-medium leading-tight">
                                        {p}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                            <ShieldCheck size={32} className="text-primary" />
                            <p className="text-xs text-gray-400">
                                <span className="text-white font-bold uppercase">Satisfacción Garantizada.</span><br />
                                Si no es lo que esperabas, tienes 7 días para solicitar tu reembolso.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Recap;
