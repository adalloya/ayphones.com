"use client";

import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, total } = useCart();

    return (
        <main className={styles.main}>
            <Navbar />
            <div className="container">
                <div className={`${styles.card} glass`}>
                    <h1 className="neon-text">Tu Carrito</h1>

                    {items.length === 0 ? (
                        <>
                            <p className={styles.empty}>Tu carrito está vacío por ahora.</p>
                            <Link href="/store">
                                <Button>Ir a la Tienda</Button>
                            </Link>
                        </>
                    ) : (
                        <div className={styles.cartContent}>
                            <div className={styles.itemsList}>
                                {items.map(item => (
                                    <div key={item.id} className={styles.item}>
                                        <div className={styles.itemImage}>
                                            <Image src={item.image} alt={item.name} width={80} height={80} style={{ objectFit: 'contain' }} />
                                        </div>
                                        <div className={styles.itemInfo}>
                                            <h3>{item.name}</h3>
                                            <p className={styles.itemMeta}>{item.storage} | {item.condition}</p>
                                            <span className={styles.itemPrice}>${item.price.toLocaleString()}</span>
                                        </div>
                                        <div className={styles.itemActions}>
                                            <div className={styles.quantity}>
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                            <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.summary}>
                                <div className={styles.summaryRow}>
                                    <span>Subtotal</span>
                                    <span>${total.toLocaleString()}</span>
                                </div>
                                <div className={styles.summaryRow}>
                                    <span>Envío</span>
                                    <span>Gratis</span>
                                </div>
                                <div className={`${styles.summaryRow} ${styles.total} `}>
                                    <span>Total</span>
                                    <span>${total.toLocaleString()}</span>
                                </div>
                                <Button className={styles.checkoutBtn}>Proceder al Pago</Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.background} />
        </main>
    );
}
