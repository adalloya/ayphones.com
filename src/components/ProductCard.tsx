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
    category: string;
    shipping?: string;
    onClick?: () => void;
}

export default function ProductCard({ product, onClick }: { product: ProductProps, onClick?: () => void }) {
    return (
        <div className={`${styles.card} glass`}>
            <div className={styles.imageWrapper} onClick={onClick} style={{ cursor: 'pointer' }}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.image}
                />
                <span className={styles.badge}>{product.condition}</span>
                {product.shipping === 'Entrega Inmediata' && (
                    <span className={styles.shippingBadge}>⚡️ Entrega Inmediata</span>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.name}>{product.name}</h3>
                    <span className={styles.price}>${product.price}</span>
                </div>

                <div className={styles.details}>
                    <span>{product.storage}</span>
                    <span>•</span>
                    <span>{product.category}</span>
                </div>

                <button className={styles.button} onClick={onClick}>
                    Ver
                </button>
            </div>
        </div>
    );
}
