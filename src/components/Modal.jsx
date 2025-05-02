import React from "react";
import styles from "../styles/Modal.module.css";

export default function Modal({ country, onClose }) {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <img src={country.flags.png} alt={`Bandeira de ${country.translations.por.common}`} className={styles.flag} />
                <h2>{country.translations.por.common}</h2>
                <p>Capital: {country.capital}</p>
                <p>População: {country.population}</p>
                <p>Língua: {country.languages.por || country.languages.eng || country.languages.spa}</p>
                <p>Continente: {country.region}</p>
            </div>
        </div>
    );
}
