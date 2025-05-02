import React from "react";
import styles from "../styles/CountryCard.module.css";

export default function CountryCard({ country, onClick }) {
    const name = country.translations.por.common;
    const flag = country.flags.png;

    return (
        <div className={styles.card} onClick={() => onClick(country)}>
            <img src={flag} alt={`Bandeira de ${name}`} className={styles.flag} />
            <h3 className={styles.name}>{name}</h3>
        </div>
    );
}
