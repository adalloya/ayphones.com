"use client";

import Image from 'next/image';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
    {
        id: 1,
        name: "Carlos",
        text: "¡Increíble servicio! Mi iPhone llegó al día siguiente y está impecable. 100% recomendado.",
        image: "/customer3.png"
    },
    {
        id: 2,
        name: "Sofía",
        text: "La mejor experiencia de compra. El equipo me ayudó a elegir el mejor modelo para mí.",
        image: "/customer1.png"
    },
    {
        id: 3,
        name: "Miguel",
        text: "Precios insuperables y la calidad es tal cual la describen. Definitivamente volveré a comprar.",
        image: "/customer2.png"
    },
    {
        id: 4,
        name: "Ana",
        text: "Me encanta mi nuevo Apple Watch. Llegó súper rápido y en perfectas condiciones.",
        image: "/customer4.png"
    },
    // Duplicate for seamless loop
    {
        id: 5,
        name: "Carlos",
        text: "¡Increíble servicio! Mi iPhone llegó al día siguiente y está impecable. 100% recomendado.",
        image: "/customer3.png"
    },
    {
        id: 6,
        name: "Sofía",
        text: "La mejor experiencia de compra. El equipo me ayudó a elegir el mejor modelo para mí.",
        image: "/customer1.png"
    },
    {
        id: 7,
        name: "Miguel",
        text: "Precios insuperables y la calidad es tal cual la describen. Definitivamente volveré a comprar.",
        image: "/customer2.png"
    },
    {
        id: 8,
        name: "Ana",
        text: "Me encanta mi nuevo Apple Watch. Llegó súper rápido y en perfectas condiciones.",
        image: "/customer4.png"
    }
];

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={`${styles.title} neon-text`}>Clientes Felices</h2>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeTrack}>
                        {TESTIMONIALS.map((testimonial) => (
                            <div key={testimonial.id} className={`${styles.card} glass`}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={80}
                                        height={80}
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.content}>
                                    <p className={styles.text}>"{testimonial.text}"</p>
                                    <h4 className={styles.name}>{testimonial.name}</h4>
                                    <div className={styles.stars}>★★★★★</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
