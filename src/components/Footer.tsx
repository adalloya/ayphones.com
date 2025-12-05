import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.glow} />
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Image
                            src="/logo.png"
                            alt="HayPhones Logo"
                            width={180}
                            height={60}
                            className={styles.logo}
                            style={{ objectFit: 'contain' }}
                        />
                        <p className={styles.description}>
                            El futuro de la tecnología pre-owned. Calidad premium, precios insuperables y garantía total.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h3 className={styles.heading}>Explorar</h3>
                        <ul>
                            <li><Link href="/store">Tienda</Link></li>
                            <li><Link href="/store?category=iPhone">iPhone</Link></li>
                            <li><Link href="/store?category=Apple%20Watch">Apple Watch</Link></li>
                            <li><Link href="/store?category=Accesorios">Accesorios</Link></li>
                        </ul>
                    </div>

                    <div className={styles.links}>
                        <h3 className={styles.heading}>Soporte</h3>
                        <ul>
                            <li><Link href="/contact">Contacto</Link></li>
                            <li><Link href="/about">Nosotros</Link></li>
                            <li><Link href="#">Envíos</Link></li>
                            <li><Link href="#">Garantía</Link></li>
                        </ul>
                    </div>

                    <div className={styles.newsletter}>
                        <h3 className={styles.heading}>Únete al Futuro</h3>
                        <p>Recibe ofertas exclusivas y novedades antes que nadie.</p>
                        <form className={styles.form}>
                            <input type="email" placeholder="Tu email" className={styles.input} />
                            <button type="submit" className={styles.button}>Suscribirse</button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} HayPhones. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
