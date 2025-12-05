"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Banners.module.css';

const BANNERS = [
    { id: 1, src: '/banner1.jpg', alt: 'iPhone Oscuros', link: '/store?search=iphone' },
    { id: 2, src: '/banner2.jpg', alt: 'iPhone 15', link: '/store?search=iphone 15' },
    { id: 3, src: '/banner3.png', alt: 'iPhone Morado', link: '/store?search=purple' },
    { id: 4, src: '/banner4.png', alt: 'iPhone Azul', link: '/store?search=blue' },
];

export default function Banners() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            <div className="container">
                {/* Desktop Grid */}
                <div className={styles.desktopGrid}>
                    {BANNERS.map((banner) => (
                        <Link href={banner.link} key={banner.id} className={`${styles.banner} glass`}>
                            <Image
                                src={banner.src}
                                alt={banner.alt}
                                width={600}
                                height={800}
                                className={styles.image}
                            />
                        </Link>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className={styles.mobileCarousel}>
                    <div
                        className={styles.slidesTrack}
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {BANNERS.map((banner) => (
                            <Link href={banner.link} key={banner.id} className={styles.slide}>
                                <div className={`${styles.banner} glass`}>
                                    <Image
                                        src={banner.src}
                                        alt={banner.alt}
                                        width={600}
                                        height={800}
                                        className={styles.image}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.indicators}>
                        {BANNERS.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
