import Navbar from '@/components/Navbar';
import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.glow} />
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className={`${styles.title} neon-text`}>Redefiniendo el <br />Estándar Pre-Owned</h1>
                        <p className={styles.subtitle}>
                            En HayPhones, no solo vendemos tecnología. Entregamos experiencias premium, calidad certificada y la confianza que mereces.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.stats}>
                <div className="container">
                    <div className={`${styles.statsGrid} glass`}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>+5k</span>
                            <span className={styles.statLabel}>Clientes Felices</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Garantía</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>24/7</span>
                            <span className={styles.statLabel}>Soporte</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageGlow} />
                            {/* Using placeholder for now, ideally a team or office shot */}
                            <div className={`${styles.placeholderImage} glass`}>
                                <span>Nuestra Misión</span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.sectionTitle}>Más que una Tienda</h2>
                            <p className={styles.text}>
                                Nacimos con una idea simple: la tecnología de punta no debería costar una fortuna.
                                Creemos en darle una segunda vida a dispositivos increíbles, reduciendo el impacto ambiental
                                y permitiéndote acceder a lo mejor de Apple y Samsung sin romper la alcancía.
                            </p>
                            <p className={styles.text}>
                                Cada dispositivo que pasa por nuestras manos es inspeccionado rigurosamente.
                                Si no lo usaríamos nosotros, no te lo vendemos a ti.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.values}>
                <div className="container">
                    <h2 className={`${styles.centerTitle} neon-text`}>Por Qué Elegirnos</h2>
                    <div className={styles.valuesGrid}>
                        <div className={`${styles.valueCard} glass`}>
                            <div className={styles.icon}>💎</div>
                            <h3>Calidad Premium</h3>
                            <p>Solo seleccionamos dispositivos en condiciones excelentes o como nuevos. Sin sorpresas.</p>
                        </div>
                        <div className={`${styles.valueCard} glass`}>
                            <div className={styles.icon}>🛡️</div>
                            <h3>Garantía Total</h3>
                            <p>Tu tranquilidad es primero. Ofrecemos garantía directa en todos nuestros equipos.</p>
                        </div>
                        <div className={`${styles.valueCard} glass`}>
                            <div className={styles.icon}>🚀</div>
                            <h3>Envío Rápido</h3>
                            <p>Ya sea entrega inmediata o sobre pedido, nos aseguramos de que llegue seguro a tus manos.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
