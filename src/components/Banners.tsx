import Image from 'next/image';
import styles from './Banners.module.css';

export default function Banners() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={`${styles.banner} glass`}>
                        <Image
                            src="/banner1.jpg"
                            alt="Promoción iPhone Oscuros"
                            width={600}
                            height={800}
                            className={styles.image}
                        />
                    </div>
                    <div className={`${styles.banner} glass`}>
                        <Image
                            src="/banner2.jpg"
                            alt="Promoción iPhone 15"
                            width={600}
                            height={800}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
