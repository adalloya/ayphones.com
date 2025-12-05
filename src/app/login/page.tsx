"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (username === 'Alberto' && password === 'Villalobos') {
            // Set cookie for middleware
            document.cookie = "admin_session=true; path=/; max-age=3600";
            router.push('/admin');
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <main className={styles.main}>
            <div className={`${styles.card} glass`}>
                <div className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="HayPhones Logo"
                        width={150}
                        height={50}
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                <h1 className={styles.title}>Panel de Administración</h1>

                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.field}>
                        <label className={styles.label}>Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.input}
                            placeholder="Ingresa tu usuario"
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>

                    {error && <p className={styles.error}>{error}</p>}

                    <Button className={styles.button}>Ingresar</Button>
                </form>
            </div>

            <div className={styles.background} />
        </main>
    );
}
