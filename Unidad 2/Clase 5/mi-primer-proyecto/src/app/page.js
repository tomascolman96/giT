import TarjetaProducto from "@/components/TarjetaProducto";
import {ProductoTarjeta} from "@/components/tarjetaProducto2";
export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Bienvenidos!!</h1>
      <p>Mis 2 componentes para este ejercicio:</p>
      
     
      <TarjetaProducto />
      <ProductoTarjeta />
    </main>
  );
}


