import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={`${styles.navbar} glass`}>
            <div className="container">
                <div className={styles.inner}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/logo.jpg"
                            alt="HayPhones Logo"
                            width={40}
                            height={40}
                            className={styles.logoImage}
                        />
                        <span className="neon-text">HayPhones</span>
                    </Link>

                    <div className={styles.links}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/store" className={styles.link}>Store</Link>
                        <Link href="/about" className={styles.link}>About</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </div>

                    <div className={styles.actions}>
                        <button className={styles.iconBtn} aria-label="Search">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                        <button className={styles.iconBtn} aria-label="Cart">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
