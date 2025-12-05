import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Link from 'next/link';
import styles from './page.module.css';

export default function CartPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className="container">
                <div className={`${styles.card} glass`}>
                    <h1 className="neon-text">Tu Carrito</h1>
                    <p className={styles.empty}>Tu carrito está vacío por ahora.</p>
                    <Link href="/store">
                        <Button>Ir a la Tienda</Button>
                    </Link>
                </div>
            </div>
            <div className={styles.background} />
        </main>
    );
}
