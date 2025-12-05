import Link from 'next/link';
import Button from './Button';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.glow} />
            <div className="container">
                <div className={styles.content}>
                    <h1 className={`${styles.title} neon-text`}>
                        El Futuro de lo <br />
                        <span className={styles.highlight}>Pre-Owned</span>
                    </h1>
                    <p className={styles.subtitle}>
                        iPhones Premium. Calidad Certificada. Precios Insuperables.
                        Experimenta el nuevo estándar en tecnología de segunda mano.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/store">
                            <Button size="lg">Comprar Ahora</Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="secondary" size="lg">Saber Más</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
