import React from "react";
import styles from "../styles/CountryCard.module.css";

export default function CountryCard({ funcionarios, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(funcionarios)}>
      <img
        src={funcionarios.photo.png}
        alt={`Bandeira de ${country.translations.por.common}`}
        className={styles.flag}
      />
      <h3 className={styles.name}>{country.translations.por.common}</h3>
    </div>
  );
}
