"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import AddProductModal from '@/components/AddProductModal';
import { PRODUCTS, Product } from '@/lib/products';
import styles from './page.module.css';

export default function AdminPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Load initial products
        setProducts(PRODUCTS);
    }, []);

    const handleDelete = (id: string) => {
        if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const handleAddProduct = (newProduct: Product) => {
        setProducts([newProduct, ...products]);
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        document.cookie = "admin_session=; path=/; max-age=0";
        router.push('/login');
    };

    return (
        <main className={styles.main}>
            <div className="container">
                <div className={styles.header}>
                    <h1 className="neon-text">Panel de Administración</h1>
                    <div className={styles.actions}>
                        <Button onClick={() => setIsModalOpen(true)}>+ Agregar Producto</Button>
                        <Button variant="ghost" onClick={handleLogout}>Cerrar Sesión</Button>
                    </div>
                </div>

                <div className={`${styles.tableWrapper} glass`}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Categoría</th>
                                <th>Condición</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <div className={styles.imageWrapper}>
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={50}
                                                height={50}
                                                className={styles.image}
                                            />
                                        </div>
                                    </td>
                                    <td className={styles.name}>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <span className={styles.badge}>{product.condition}</span>
                                    </td>
                                    <td>
                                        <button
                                            className={styles.deleteBtn}
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <AddProductModal
                    onClose={() => setIsModalOpen(false)}
                    onAdd={handleAddProduct}
                />
            )}

            <div className={styles.background} />
        </main>
    );
}
