import styles from './Features.module.css';

const features = [
    {
        title: "1-Year Warranty",
        description: "Every device comes with a comprehensive 12-month warranty for your peace of mind.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        )
    },
    {
        title: "Unbeatable Prices",
        description: "We monitor the market daily to ensure you get the best deal on premium tech.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        )
    },
    {
        title: "Lightning Fast",
        description: "Free express shipping on all orders. Get your new phone in as little as 24 hours.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        )
    }
];

export default function Features() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={`${styles.card} glass`}>
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.description}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
