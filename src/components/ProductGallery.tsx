"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
    images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className={styles.gallery}>
            <div className={`${styles.mainImage} glass`}>
                <div className={styles.placeholder}>
                    <span className="neon-text" style={{ fontSize: '4rem' }}></span>
                </div>
            </div>
            <div className={styles.thumbnails}>
                {images.map((img, index) => (
                    <button
                        key={index}
                        className={`${styles.thumbnail} ${selectedImage === img ? styles.selected : ''} glass`}
                        onClick={() => setSelectedImage(img)}
                    >
                        <span className="neon-text" style={{ fontSize: '1.5rem' }}></span>
                    </button>
                ))}
            </div>
        </div>
    );
}
