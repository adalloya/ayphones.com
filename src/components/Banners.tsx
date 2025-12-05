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

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
        }
        if (isRightSwipe) {
            setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

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
                <div
                    className={styles.mobileCarousel}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
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
