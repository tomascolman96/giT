import NovedadItem from "@/components/NovedadItem";
import "@/styles/novedades.css"; 

export default function NovedadesPage() {
    return (
        <main className="holder">
            <h2>Novedades</h2>
            <NovedadItem 
                title="Transporte de carga internacional" 
                subtitle="Nuevas rutas disponibles en 2026" 
                body="Ya estamos operando con normalidad en las rutas del Mercosur..." 
            />
            <NovedadItem 
                title="Nuevo centro logístico" 
                subtitle="Inauguración en Olivos" 
                body="Contamos con una nueva terminal de carga para optimizar tiempos..." 
            />
        </main>
    );
}