"use client";

import { useState } from 'react';
import { PRODUCTS, Product } from '@/lib/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Show the first 4 items (which are the newest/most relevant)
    const featuredProducts = PRODUCTS.slice(0, 4);

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={`${styles.title} neon - text`}>Tendencias</h2>
                <div className={styles.grid}>
                    {featuredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => handleProductClick(product)}
                        />
                    ))}
                </div>
            </div>
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
