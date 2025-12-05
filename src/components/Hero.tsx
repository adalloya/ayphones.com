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
                        The Future of <br />
                        <span className={styles.highlight}>Pre-Owned</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Premium iPhones. Certified Quality. Unbeatable Prices.
                        Experience the new standard in second-hand tech.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/store">
                            <Button size="lg">Shop Now</Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="secondary" size="lg">Learn More</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
