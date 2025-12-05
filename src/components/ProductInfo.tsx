import Button from './Button';
import styles from './ProductInfo.module.css';
import { Product } from '@/lib/products';

interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    return (
        <div className={styles.info}>
            <div className={styles.header}>
                <span className={styles.condition}>{product.condition}</span>
                <h1 className={styles.title}>{product.name}</h1>
                <div className={styles.priceWrapper}>
                    <span className={styles.price}>${product.price.toLocaleString()}</span>
                    {product.shipping && (
                        <span className={styles.shipping}>{product.shipping}</span>
                    )}
                </div>
            </div>

            <div className={styles.specs}>
                <h3 className={styles.sectionTitle}>Especificaciones</h3>
                <div className={styles.specGrid}>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>Almacenamiento</span>
                        <span className={styles.specValue}>{product.storage}</span>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>Pantalla</span>
                        <span className={styles.specValue}>{product.specs.display}</span>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>Procesador</span>
                        <span className={styles.specValue}>{product.specs.processor}</span>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>Cámara</span>
                        <span className={styles.specValue}>{product.specs.camera}</span>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>Batería</span>
                        <span className={styles.specValue}>{product.specs.battery}</span>
                    </div>
                </div>
            </div>

            <div className={styles.actions}>
                <Button size="lg" className={styles.buyBtn}>Comprar Ahora</Button>
                <Button size="lg" variant="secondary">Añadir al Carrito</Button>
            </div>

            <p className={styles.guarantee}>
                <span className={styles.check}>✓</span> Garantía de 12 meses incluida
            </p>
        </div>
    );
}
