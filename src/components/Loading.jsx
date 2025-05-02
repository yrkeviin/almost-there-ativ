import React from "react";
import styles from "../styles/Loading.module.css";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <img src="/image/world.gif" alt="Loading" />
            <p>Carregando países...</p>
        </div>
    );
}
