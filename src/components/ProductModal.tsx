"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import styles from './ProductModal.module.css';

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    const { addToCart } = useCart();
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    if (!isOpen || !product) return null;

    return (
        <div className={`${styles.overlay} ${isClosing ? styles.fadeOut : ''}`} onClick={handleClose}>
            <div
                className={`${styles.modal} ${isClosing ? styles.slideDown : ''} glass`}
                onClick={e => e.stopPropagation()}
            >
                <button className={styles.closeBtn} onClick={handleClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div className={styles.content}>
                    <div className={styles.imageSection}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className={styles.image}
                            />
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <div className={styles.header}>
                            <span className={styles.condition}>{product.condition}</span>
                            <h2 className={styles.title}>{product.name}</h2>
                            <div className={styles.priceWrapper}>
                                <span className={styles.price}>${product.price.toLocaleString()}</span>
                                {product.shipping === 'Entrega Inmediata' && (
                                    <span className={styles.shippingBadge}>⚡️ Entrega Inmediata</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.specs}>
                            <div className={styles.specItem}>
                                <span className={styles.label}>Almacenamiento</span>
                                <span className={styles.value}>{product.storage}</span>
                            </div>
                            <div className={styles.specItem}>
                                <span className={styles.label}>Color</span>
                                <span className={styles.value}>{product.color || 'Estándar'}</span>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <button
                                className={styles.addToCartBtn}
                                onClick={() => {
                                    addToCart(product);
                                    handleClose();
                                }}
                            >
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
