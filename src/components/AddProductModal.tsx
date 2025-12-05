"use client";

import { useState } from 'react';
import Button from './Button';
import { Product } from '@/lib/products';
import styles from './AddProductModal.module.css';

interface AddProductModalProps {
    onClose: () => void;
    onAdd: (product: Product) => void;
}

export default function AddProductModal({ onClose, onAdd }: AddProductModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: 'iPhone',
        condition: 'Excelente',
        storage: '128GB'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct: Product = {
            id: Date.now().toString(),
            name: formData.name,
            price: Number(formData.price),
            image: '/placeholder.png',
            images: ['/placeholder.png'],
            category: formData.category as any,
            condition: formData.condition as any,
            storage: formData.storage,
            model: formData.name,
            shipping: 'Sobre pedido - Entrega en 7 días',
            specs: {
                display: 'N/A',
                processor: 'N/A',
                camera: 'N/A',
                battery: 'N/A'
            }
        };

        onAdd(newProduct);
    };

    return (
        <div className={styles.overlay}>
            <div className={`${styles.modal} glass`}>
                <h2 className={styles.title}>Agregar Producto</h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label>Nombre</label>
                        <input
                            required
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label>Precio</label>
                            <input
                                required
                                type="number"
                                value={formData.price}
                                onChange={e => setFormData({ ...formData, price: e.target.value })}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.field}>
                            <label>Almacenamiento</label>
                            <input
                                required
                                value={formData.storage}
                                onChange={e => setFormData({ ...formData, storage: e.target.value })}
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label>Categoría</label>
                            <select
                                value={formData.category}
                                onChange={e => setFormData({ ...formData, category: e.target.value })}
                                className={styles.select}
                            >
                                <option value="iPhone">iPhone</option>
                                <option value="iPad">iPad</option>
                                <option value="Apple Watch">Apple Watch</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Accesorios">Accesorios</option>
                            </select>
                        </div>
                        <div className={styles.field}>
                            <label>Condición</label>
                            <select
                                value={formData.condition}
                                onChange={e => setFormData({ ...formData, condition: e.target.value })}
                                className={styles.select}
                            >
                                <option value="Como Nuevo">Como Nuevo</option>
                                <option value="Excelente">Excelente</option>
                                <option value="Bueno">Bueno</option>
                                <option value="Regular">Regular</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <Button type="button" variant="ghost" onClick={onClose}>Cancelar</Button>
                        <Button type="submit">Guardar</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
