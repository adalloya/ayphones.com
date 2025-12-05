"use client";

import { useState } from 'react';
import styles from './FilterSidebar.module.css';

interface FilterSidebarProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    selectedCondition: string;
    onConditionChange: (condition: string) => void;
    selectedAvailability: string;
    onAvailabilityChange: (availability: string) => void;
}

export default function FilterSidebar({
    selectedCategory,
    onCategoryChange,
    selectedCondition,
    onConditionChange,
    selectedAvailability,
    onAvailabilityChange
}: FilterSidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className={styles.sidebar}>
            <button
                className={styles.mobileToggle}
                onClick={() => setIsOpen(!isOpen)}
            >
                Filtros {isOpen ? '▲' : '▼'}
            </button>

            <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
                <div className={styles.section}>
                    <h3 className={styles.heading}>Disponibilidad</h3>
                    <div className={styles.options}>
                        {['Todos', 'Entrega Inmediata', 'Sobre Pedido'].map(opt => (
                            <label key={opt} className={styles.label}>
                                <input
                                    type="radio"
                                    name="availability"
                                    checked={selectedAvailability === opt}
                                    onChange={() => onAvailabilityChange(opt)}
                                    className={styles.radio}
                                />
                                <span className={styles.text}>{opt}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.heading}>Categoría</h3>
                    <div className={styles.options}>
                        {['Todos', 'iPhone', 'Apple Watch', 'Accesorios'].map(cat => (
                            <label key={cat} className={styles.label}>
                                <input
                                    type="radio"
                                    name="category"
                                    checked={selectedCategory === cat}
                                    onChange={() => onCategoryChange(cat)}
                                    className={styles.radio}
                                />
                                <span className={styles.text}>{cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.heading}>Condición</h3>
                    <div className={styles.options}>
                        {['Todos', 'Como Nuevo', 'Excelente', 'Bueno', 'Regular'].map(cond => (
                            <label key={cond} className={styles.label}>
                                <input
                                    type="radio"
                                    name="condition"
                                    checked={selectedCondition === cond}
                                    onChange={() => onConditionChange(cond)}
                                    className={styles.radio}
                                />
                                <span className={styles.text}>{cond}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
