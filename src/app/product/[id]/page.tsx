import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ProductGallery from '@/components/ProductGallery';
import ProductInfo from '@/components/ProductInfo';
import { PRODUCTS } from '@/lib/products';
import styles from './page.module.css';

interface PageProps {
    params: {
        id: string;
    };
}

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }));
}

export default function ProductPage({ params }: PageProps) {
    const product = PRODUCTS.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <Navbar />

            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.gallerySection}>
                        <ProductGallery images={product.images || [product.image]} />
                    </div>

                    <div className={styles.infoSection}>
                        <ProductInfo product={product} />
                    </div>
                </div>
            </div>

            <div className={styles.background} />
        </main>
    );
}
