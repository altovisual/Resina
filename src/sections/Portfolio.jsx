import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltedCard from '../components/react-bits/TiltedCard';
import { X } from 'lucide-react';

import img1 from '../assets/portfolio/photo_2026-03-15_12-15-52.jpg.jpeg';
import img2 from '../assets/portfolio/photo_2026-03-15_12-15-54.jpg.jpeg';
import img3 from '../assets/portfolio/photo_2026-03-16_11-42-03.jpg.jpeg';
import img4 from '../assets/portfolio/photo_2026-03-16_11-42-18.jpg.jpeg';
import img5 from '../assets/portfolio/photo_2026-03-16_11-42-27.jpg.jpeg';
import img6 from '../assets/portfolio/photo_2026-03-16_11-42-31.jpg.jpeg';
import img7 from '../assets/portfolio/photo_2026-03-16_11-42-46.jpg.jpeg';
import img8 from '../assets/portfolio/photo_2026-03-16_11-42-57.jpg.jpeg';
import img9 from '../assets/portfolio/photo_2026-03-16_11-43-03.jpg.jpeg';
import img10 from '../assets/portfolio/photo_2026-03-16_11-43-10.jpg.jpeg';
import img11 from '../assets/portfolio/photo_2026-03-16_11-43-24.jpg.jpeg';
import img12 from '../assets/portfolio/photo_2026-03-16_11-43-27.jpg.jpeg';
import img13 from '../assets/portfolio/photo_2026-03-16_11-43-31.jpg.jpeg';
import img14 from '../assets/portfolio/photo_2026-03-16_11-43-34.jpg.jpeg';
import img15 from '../assets/portfolio/photo_2026-03-16_11-43-37.jpg.jpeg';
import img16 from '../assets/portfolio/photo_2026-03-16_11-43-51.jpg.jpeg';
import img17 from '../assets/portfolio/photo_2026-03-16_11-43-56.jpg.jpeg';
import img18 from '../assets/portfolio/photo_2026-03-16_11-44-01.jpg.jpeg';

const Portfolio = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const projects = [
        { id: 1, img: img1, title: "Obra en Resina", category: "Decoración" },
        { id: 2, img: img2, title: "Diseño Exclusivo", category: "Arte" },
        { id: 3, img: img3, title: "Detalle Epóxico", category: "Decoración" },
        { id: 4, img: img4, title: "Acabado Profesional", category: "Diseño" },
        { id: 5, img: img5, title: "Toque de Autor", category: "Arte" },
        { id: 6, img: img6, title: "Efecto Espejo", category: "Resina" },
        { id: 7, img: img7, title: "Textura Única", category: "Diseño" },
        { id: 8, img: img8, title: "Arte Funcional", category: "Mobiliario" },
        { id: 9, img: img9, title: "Elegancia Epóxica", category: "Decoración" },
        { id: 10, img: img10, title: "Creación Abstracta", category: "Arte" },
        { id: 11, img: img11, title: "Lujo en Detalles", category: "Diseño" },
        { id: 12, img: img12, title: "Geometría Perfecta", category: "Arte" },
        { id: 13, img: img13, title: "Acabado Cristal", category: "Resina" },
        { id: 14, img: img14, title: "Arte Encriptado", category: "Diseño" },
        { id: 15, img: img15, title: "Trazos Únicos", category: "Decoración" },
        { id: 16, img: img16, title: "Composición Natural", category: "Arte" },
        { id: 17, img: img17, title: "Detalles Dorados", category: "Diseño" },
        { id: 18, img: img18, title: "Armonía Visual", category: "Decoración" }
    ];

    const visibleProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <section className="py-24 bg-black relative overflow-hidden" id="portfolio">
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

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-14">
                    <AnimatePresence>
                        {visibleProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{ delay: (index % 4) * 0.05, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="cursor-target"
                            >
                                <TiltedCard className="w-full h-full">
                                    <div 
                                        className="relative group overflow-hidden rounded-[2rem] shadow-2xl border border-white/5 h-full cursor-pointer"
                                        onClick={() => setSelectedImg(project.img)}
                                    >
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                                        
                                        <img 
                                            src={project.img} 
                                            alt={project.title}
                                            className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        
                                        {/* Insignia de Calidad */}
                                        <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md text-primary border border-primary/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                            Pieza de Autor
                                        </div>
                                    </div>
                                </TiltedCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Botón de Ver Todo */}
                <motion.div 
                    layout
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 flex justify-center"
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group relative px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,187,0.4)]"
                    >
                        <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                        <span className="relative z-10">{showAll ? 'Ver Menos Trabajos' : 'Ver Todos Los Trabajos'}</span>
                    </button>
                </motion.div>

                {/* Mensaje motivador final */}
                <motion.div 
                    layout
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 italic text-lg">
                        Piezas cargadas de técnica, detalle y nivel profesional.
                    </p>
                </motion.div>
            </div>

            {/* Lightbox / Modal de Imagen a Pantalla Completa */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                    >
                        <motion.button 
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-primary transition-colors z-50 bg-black/50 p-2 rounded-full cursor-pointer"
                            onClick={() => setSelectedImg(null)}
                        >
                            <X size={32} />
                        </motion.button>
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            src={selectedImg}
                            alt="Trabajo en detalle"
                            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
