import AnimatedList from '../components/react-bits/AnimatedList';
import ShinyText from '../components/react-bits/ShinyText';

const modules = [
    {
        title: "Módulo 1: Fundamentos y Herramientas",
        content: [
            "Bienvenida al curso y metodología",
            "Materiales e instrumentos base",
            "Seguridad e higiene en el taller",
            "Tipos de resina y cómo elegir la correcta"
        ]
    },
    {
        title: "Módulo 2: La Mezcla Perfecta",
        content: [
            "Proporciones exactas (A:B)",
            "Técnicas para eliminar burbujas",
            "Colorimetría con pigmentos",
            "Tiempos de trabajo y curado"
        ]
    },
    {
        title: "Módulo 3: Joyería en Resina",
        content: [
            "Preparación de moldes de silicona",
            "Encapsulado de flores y elementos",
            "Uso de pan de oro y glitter",
            "Llaveros y dijes profesionales"
        ]
    },
    {
        title: "Módulo 4: Arte en Gran Formato",
        content: [
            "Cuadros de resina fluida",
            "Efecto células y ondas de mar",
            "Preparación de soportes (MADERA/MDF)",
            "Mesas de río: Teoría y Práctica"
        ]
    },
    {
        title: "Módulo 5: Acabados y Pulido",
        content: [
            "Lijado manual y mecánico",
            "Técnicas de pulido tipo espejo",
            "Domo de protección final",
            "Limpieza y conservación"
        ]
    },
    {
        title: "Módulo 6: Marketing para Artesanas",
        content: [
            "Creación de marca personal",
            "Psicología del color para vender",
            "Cómo poner precio a tus piezas",
            "Calendario de lanzamientos"
        ]
    },
    {
        title: "Módulo 7: Fotografía de Producto",
        content: [
            "Iluminación para resina (sin reflejos)",
            "Edición profesional desde el móvil",
            "Props y escenografía minimalista",
            "Videos que atraen clientes"
        ]
    },
    {
        title: "Módulo 8: Ventas en Redes Sociales",
        content: [
            "Estrategias en Instagram y TikTok",
            "Copywriting para vender sin esfuerzo",
            "Atención al cliente efectiva",
            "Cierre de ventas por WhatsApp"
        ]
    },
    {
        title: "Módulo 9: Empaque y Envíos",
        content: [
            "Packaging premium de bajo costo",
            "Logística de envíos nacionales e internacionales",
            "Experiencia de unboxing inolvidable",
            "Políticas de cambios y devoluciones"
        ]
    },
    {
        title: "Módulo 10: Mentalidad Emprendedora",
        content: [
            "Superando el miedo a vender",
            "Organización del tiempo y taller",
            "Escalando tu negocio de resina",
            "Comunidad y apoyo continuo"
        ]
    }
];

const Curriculum = () => {
    return (
        <section className="py-24 bg-black px-4 relative overflow-hidden">
            {/* Fondo decorativo sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="text-center mb-16">
                    <ShinyText text="TU CAMINO HACIA LA MAESTRÍA" className="text-primary font-bold tracking-widest text-sm mb-4" />
                    <h2 className="text-4xl md:text-6xl font-black text-white italic">En Resina Master Pro aprenderás</h2>
                </div>

                <AnimatedList
                    items={modules}
                    showGradients={true}
                    enableArrowNavigation={true}
                    displayScrollbar={false}
                    className="w-full max-w-4xl"
                />
            </div>
        </section>
    );
};

export default Curriculum;
