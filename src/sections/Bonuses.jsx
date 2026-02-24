import React from 'react';
import SpotlightCard from '../components/react-bits/SpotlightCard';
import { motion } from 'framer-motion';

const bonuses = [
    { title: "Bono 1", desc: "Proveedores de Resina", value: "$15" },
    { title: "Bono 2", desc: "Moldes Caseros", value: "$10" },
    { title: "Bono 3", desc: "Fotografía de Producto", value: "$20" },
    { title: "Bono 4", desc: "Pack de Diseños", value: "$15" },
    { title: "Bono 5", desc: "Comunidad VIP", value: "$25" },
    { title: "Bono 6", desc: "Tabla de Precios", value: "$10" },
    { title: "Bono 7", desc: "Certificado de Honor", value: "$30" },
    { title: "Bono 8", desc: "Actualizaciones", value: "$100" }
];

const Bonuses = () => {
    return (
        <section className="py-20 bg-black px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Si accedes <span className="text-primary italic">HOY</span> Recibirás Estos 8 <br /> BONOS Totalmente Gratis!</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {bonuses.map((b, i) => (
                        <SpotlightCard key={i} className="p-4 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 text-primary font-bold">
                                {i + 1}
                            </div>
                            <h3 className="text-white font-bold text-sm mb-1">{b.title}</h3>
                            <p className="text-gray-500 text-[10px] uppercase mb-2">{b.desc}</p>
                            <div className="text-xs text-primary line-through opacity-50">Valor: {b.value}</div>
                            <div className="text-[10px] font-bold text-green-400 mt-1 uppercase">¡GRATIS!</div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bonuses;
