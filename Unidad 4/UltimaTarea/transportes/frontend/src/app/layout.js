import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export const metadata = { title: "Transportes X", description: "Sitio web de Transportes X" };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}