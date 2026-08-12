import ContactForm from "@/components/ContactForm";
import "@/styles/contacto.css";

export default function ContactoPage() {
  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <ContactForm />
      </div>
      <div>
        <h2>Otras vías de comunicación</h2>
        <p>También puede contactarse con nosotros usando los siguientes medios:</p>
        <ul>
          <li>Teléfono: 123456789</li>
          <li>Email: contacto@transportesx.com</li>
        </ul>
      </div>
    </main>
  );
}