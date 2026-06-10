"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const location = usePathname();

    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><Link href="/" className={location === '/' ? 'activo' : ''}>Home</Link></li>
                    <li><Link href="/nosotros" className={location === '/nosotros' ? 'activo' : ''}>Nosotros</Link></li>
                    <li><Link href="/servicios" className={location === '/servicios' ? 'activo' : ''}>Servicios</Link></li>
                    <li><Link href="/novedades" className={location === '/novedades' ? 'activo' : ''}>Novedades</Link></li>
                    <li><Link href="/contacto" className={location === '/contacto' ? 'activo' : ''}>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;