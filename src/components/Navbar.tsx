"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`${styles.navbar} glass`}>
            <div className="container">
                <div className={styles.inner}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="HayPhones Logo"
                            width={180}
                            height={60}
                            className={styles.logoImage}
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>

                    <div className={`${styles.links} ${isMenuOpen ? styles.open : ''} `}>
                        <Link href="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                        <Link href="/store" className={styles.link} onClick={() => setIsMenuOpen(false)}>Tienda</Link>
                        <Link href="/about" className={styles.link} onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
                        <Link href="/contact" className={styles.link} onClick={() => setIsMenuOpen(false)}>Contacto</Link>
                    </div>

                    <div className={styles.actions}>
                        <Link href="/store" aria-label="Search" className={styles.iconLink}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </Link>
                        <Link href="/cart" aria-label="Cart" className={styles.iconLink}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        </Link>
                        <button
                            className={styles.menuBtn}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
