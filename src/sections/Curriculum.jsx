import AnimatedList from '../components/react-bits/AnimatedList';
import ShinyText from '../components/react-bits/ShinyText';

const modules = [
    {
        title: "MÓDULO 1: Introducción al mundo de la resina",
        content: [
            "Bienvenida al curso",
            "Cómo conseguir la guía",
            "Componentes de la resina",
            "Proporciones y mezclas",
            "Tipos de resina y sus aplicaciones",
            "Diferencias entre tipos de resina",
            "¿Qué es la resina?",
            "¿Qué vas a aprender?"
        ]
    },
    {
        title: "MÓDULO 2: Bioseguridad y preparación del espacio",
        content: [
            "Equipos de protección personal (EPP)",
            "Preparación de mesa y superficies",
            "Manipulación y Almacenamiento correcto de resina y aditivos"
        ]
    },
    {
        title: "MÓDULO 3: Herramientas y materiales esenciales",
        content: [
            "Herramientas básicas indispensables",
            "Materiales esenciales para empezar",
            "Kit económico vs kit recomendado",
            "Checklist de compra para iniciar"
        ]
    },
    {
        title: "MÓDULO 4: Conociendo la resina (sin enredos)",
        content: [
            "Componentes de la resina: A y B",
            "Tipos de resina y usos más comunes",
            "Diferencia entre tipos de resina"
        ]
    },
    {
        title: "MÓDULO 5: Medición, mezcla y curado correcto",
        content: [
            "Proporciones: cómo medir sin fallar",
            "Tiempo de trabajo (pot life) explicado fácil",
            "Curado: etapas y qué esperar",
            "Temperatura y ambiente ideal",
            "Cómo preparar tu mezcla “consciente”",
            "Reglas de oro para mezclar (sin contaminar)"
        ]
    },
    {
        title: "MÓDULO 6: Pigmentos, colorantes y efectos (nivel venta)",
        content: [
            "Pigmentos y aditivos: cuáles usar",
            "Pigmentos y aditivos: Teoría",
            "Glitter: cómo usarlo sin que se hunda",
            "Efectos y texturas simples, pero pro",
            "Composición y equilibrio visual",
            "Cómo combinar colores para que se vea “premium”"
        ]
    },
    {
        title: "MÓDULO 7: Resina sin errores (acabados limpios)",
        content: [
            "Burbujas: por qué aparecen",
            "Cómo evitar burbujas desde la mezcla",
            "Uso correcto del calor (sin arruinar la pieza)",
            "Control del ambiente (humedad/temperatura)",
            "Técnicas de asentado de la resina"
        ]
    },
    {
        title: "MÓDULO 8: Moldes, desmolde y acabados base",
        content: [
            "Preparación y cuidado de moldes",
            "Tipos de moldes y cuál elegir",
            "Técnica de vertido limpio",
            "Desmolde correcto sin romper piezas",
            "Acabados básicos post desmolde (nivel inicial)",
            "Creación de tu primera pieza"
        ]
    },
    {
        title: "MÓDULO 9: Personalización creativa (que se vende sola)",
        content: [
            "Introducción a personalización en resina",
            "Inserción de letras y elementos planos",
            "Uso de flores secas y elementos naturales",
            "Curado y evaluación final (control de calidad)"
        ]
    },
    {
        title: "MÓDULO 10: Proyectos vendibles paso a paso",
        content: [
            "Llavero letra con encapsulado de flores",
            "Llavero letra con glitter",
            "Llavero mini letras (última tendencia)",
            "Llavero con base de acrílico",
            "Llavero con borde redondo",
            "Llavero con borde irregular"
        ]
    },
    {
        title: "MÓDULO 11: Joyería inicial",
        content: [
            "Collar con dijes de resina",
            "Aretes de resina",
            "Sets combinables y comerciales"
        ]
    },
    {
        title: "MÓDULO 12: Próximos pasos",
        content: [
            "Cómo llevar esto al siguiente nivel",
            "Despedida"
        ]
    },
    {
        title: "BONOS",
        content: [
            "CÓMO CALCULAR AHORRAR Y VENDER (FÓRMULA SIMPLE)",
            "MUESTRA Y VENDE TU RESINA (FOTOGRAFÍA)",
            "CREA TU PROPIA MARCA DESDE 0 (CANVA)"
        ]
    },
    {
        title: "MÓDULO X: Clase privada exclusiva",
        content: [
            "Clase privada exclusiva en vivo GRABACIÓN"
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
                    <ShinyText text="RESINA EXPRESS 60 CLASES" className="text-primary font-bold tracking-widest text-sm mb-4" />
                    <h2 className="text-4xl md:text-6xl font-black text-white italic">En Resina Express aprenderás</h2>
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
