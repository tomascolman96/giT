import "@/styles/home.css";

export default function Home() {
  return (
    <main className="holder">
     
      <section className="bienvenidos">
        <h1>Bienvenidos a Transportes </h1>
        <p>Somos - Eres - Que ? .</p>
      </section>

    
      <div className="homeimg">
        <img src="https://fakeimg.pl/960x250" alt="Transportes" />
      </div>

     
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Sobre nosotros</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">"Simplemente excelente, el servicio es puntual y profesional."</span>
            <span className="autor"> - Juan Perez </span>
          </div>
        </div>
      </div>
    </main>
  );
}