import "@/styles/nosotros.css";


export default function NosotrosPage() {
  return (
    <main className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
          <div className="persona">
            <h5>Juan Gomez</h5>
            <h6>Gerente General</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="persona2">
            <h5>tomas colman</h5>
            <h6>Gerente regional</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          
        </div>
      </div>
    </main>
  );
}