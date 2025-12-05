"use client";

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import SearchBar from '@/components/SearchBar';
import FilterSidebar from '@/components/FilterSidebar';
import { PRODUCTS } from '@/lib/products';
import styles from './page.module.css';

export default function StorePage() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('Todos');
    const [condition, setCondition] = useState('Todos');
    const [availability, setAvailability] = useState('Todos');
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProductClick = (product: any) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(product => {
            const searchLower = search.toLowerCase();
            const matchesSearch =
                product.name.toLowerCase().includes(searchLower) ||
                product.shipping?.toLowerCase().includes(searchLower);

            const matchesCategory = category === 'Todos' || product.category === category;
            const matchesCondition = condition === 'Todos' || product.condition === condition;

            const matchesAvailability = availability === 'Todos' || (
                availability === 'Entrega Inmediata'
                    ? product.shipping === 'Entrega Inmediata'
                    : product.shipping !== 'Entrega Inmediata'
            );

            return matchesSearch && matchesCategory && matchesCondition && matchesAvailability;
        });
    }, [search, category, condition, availability]);

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={`${styles.header} glass`}>
                <div className="container">
                    <h1 className={`${styles.title} neon-text`}>Tienda</h1>
                    <SearchBar value={search} onChange={setSearch} />
                </div>
            </div>

            <div className="container">
                <div className={styles.layout}>
                    <FilterSidebar
                        selectedCategory={category}
                        onCategoryChange={setCategory}
                        selectedCondition={condition}
                        onConditionChange={setCondition}
                        selectedAvailability={availability}
                        onAvailabilityChange={setAvailability}
                    />

                    <div className={styles.grid}>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onClick={() => handleProductClick(product)}
                                />
                            ))
                        ) : (
                            <div className={styles.noResults}>
                                <p>No se encontraron productos.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
