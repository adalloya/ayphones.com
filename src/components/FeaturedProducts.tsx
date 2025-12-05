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

    // Show a diverse selection of products
    const featuredProducts = [
        PRODUCTS.find(p => p.id === '1'),  // iPhone 17 Air
        PRODUCTS.find(p => p.id === '22'), // Apple Watch Ultra 2
        PRODUCTS.find(p => p.id === '13'), // AirPods Pro 3
        PRODUCTS.find(p => p.id === '3'),  // iPhone 16 Pro Max
    ].filter(Boolean) as Product[];

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
