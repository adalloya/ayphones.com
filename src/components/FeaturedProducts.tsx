import { PRODUCTS } from '@/lib/products';
import ProductCard from './ProductCard';
import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
    // Show the first 4 items (which are the newest/most relevant)
    const featuredProducts = PRODUCTS.slice(0, 4);

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={`${styles.title} neon-text`}>Tendencias</h2>
                <div className={styles.grid}>
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
