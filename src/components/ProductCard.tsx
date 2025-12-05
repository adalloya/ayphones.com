import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import styles from './ProductCard.module.css';

interface ProductProps {
    id: string;
    name: string;
    price: number;
    image: string;
    condition: string;
    storage: string;
}

export default function ProductCard({ product }: { product: ProductProps }) {
    return (
        <div className={`${styles.card} glass`}>
            <div className={styles.imageWrapper}>
                <div className={styles.badge}>{product.condition}</div>
                {/* Placeholder for real image, using a gray div for now if no image provided */}
                <div className={styles.placeholder}>
                    <span className="neon-text" style={{ fontSize: '2rem' }}></span>
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.specs}>{product.storage}</p>
                <div className={styles.footer}>
                    <span className={styles.price}>${product.price}</span>
                    <Link href={`/product/${product.id}`}>
                        <Button size="sm" variant="secondary">View</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
