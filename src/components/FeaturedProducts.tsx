import ProductCard from './ProductCard';
import styles from './FeaturedProducts.module.css';

const MOCK_PRODUCTS = [
    {
        id: '1',
        name: 'iPhone 14 Pro Max',
        price: 1099,
        image: '/placeholder.png',
        condition: 'Like New',
        storage: '256GB'
    },
    {
        id: '2',
        name: 'iPhone 13 Pro',
        price: 799,
        image: '/placeholder.png',
        condition: 'Excellent',
        storage: '128GB'
    },
    {
        id: '3',
        name: 'iPhone 12',
        price: 499,
        image: '/placeholder.png',
        condition: 'Good',
        storage: '64GB'
    },
    {
        id: '4',
        name: 'Apple Watch Ultra',
        price: 649,
        image: '/placeholder.png',
        condition: 'Like New',
        storage: 'GPS + Cellular'
    }
];

export default function FeaturedProducts() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={`${styles.title} neon-text`}>Trending Now</h2>
                <div className={styles.grid}>
                    {MOCK_PRODUCTS.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
