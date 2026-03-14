import React from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '../components/react-bits/TiltedCard';
import work1 from '../assets/portfolio/work1.png';
import work2 from '../assets/portfolio/work2.png';
import work3 from '../assets/portfolio/work3.png';
import work4 from '../assets/portfolio/work4.png';

const Portfolio = () => {
    const projects = [
        { id: 1, img: work1, title: "Mesa Océano Premium", category: "Mobiliario" },
        { id: 2, img: work2, title: "Reloj de Gala", category: "Decoración" },
        { id: 3, img: work3, title: "Geoda Esmeralda", category: "Arte Mural" },
        { id: 4, img: work4, title: "Bandeja Ocean Waves", category: "Accesorios" }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Fondo con brillo sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,187,0.03),transparent_70%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white italic mb-4 uppercase tracking-tighter"
                    >
                        Galería de Exclusividad
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block"
                    >
                        <p className="text-primary text-lg md:text-xl font-bold uppercase tracking-[0.2em] border-b-2 border-primary/30 pb-2">
                            Trabajos de la Instructora
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="cursor-target"
                        >
                            <TiltedCard className="w-full">
                                <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl border border-white/5">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                                    
                                    <img 
                                        src={project.img} 
                                        alt={project.title}
                                        className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Overlay con información */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 z-20">
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <span className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-3 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-white text-3xl md:text-4xl font-black uppercase italic mb-4 leading-none">
                                                {project.title}
                                            </h3>
                                            <div className="h-1 w-12 bg-primary rounded-full" />
                                        </motion.div>
                                    </div>

                                    {/* Insignia de Calidad */}
                                    <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md text-primary border border-primary/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Pieza de Autor
                                    </div>
                                </div>
                            </TiltedCard>
                        </motion.div>
                    ))}
                </div>

                {/* Mensaje motivador final */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-500 italic text-lg">
                        Piezas cargadas de técnica, detalle y nivel profesional.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
