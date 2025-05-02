import React from "react";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <img className={styles.image} src="/image/maiko.png" alt="Maiko Xikixiki" />
            <h1 className={styles.title}> Maiko Xikixiki Bahia</h1>
            <div className={styles.description}>
                <p>Tá perdido no código? Relaxa e vem de Maiko, que vamos te mostrar a usar:</p>
                <ul className={styles.list}>
                    <li>Next.js (App Router)</li>
                    <li>CSS Modules</li>
                    <li>React Components</li>
                    <li>Axios</li>
                    <li>React Toastify</li>
                </ul>
            </div>
            <a href="/countries">
                <button className={styles.button}>Acessar Países</button>
            </a>
        </div>
    );
}
