"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Countries.module.css";
import CountryCard from "../../components/CountryCard";
import CountryModal from "../../components/CountryModal";
import Loading from "../../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [allCountries, setAllCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                setCountries(response.data);
                setAllCountries(response.data);
            } catch (error) {
                console.error("Erro ao carregar todos os países:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCountries();
    }, []);

    const handleFilter = async (region) => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
            setCountries(response.data);
        } catch (error) {
            console.error("Erro ao buscar países por região:", error);
        }
    };

    const resetFilter = () => {
        if (countries.length !== allCountries.length) {
            setCountries(allCountries);
            toast.info("Filtro resetado. Mostrando todos os países!");
        } else {
            toast.warning("Os países já estão sendo exibidos sem filtros.", {
                position: "top-left",
            });
        }
    };

    const handleCardClick = (country) => {
        setSelectedCountry(country);
    };

    const handleCloseModal = () => {
        setSelectedCountry(null);
    };

    return (
        <div className={styles.container}>
            <ToastContainer position="top-right" autoClose={5000} theme="light" />
            <h1>Lista de Países do Mundo</h1>
            <div>
                <button className={styles.button} onClick={() => handleFilter("africa")}>
                    África
                </button>
                <button className={styles.button} onClick={() => handleFilter("americas")}>
                    Américas
                </button>
                <button className={styles.button} onClick={() => handleFilter("asia")}>
                    Ásia
                </button>
                <button className={styles.button} onClick={() => handleFilter("europe")}>
                    Europa
                </button>
                <button className={styles.button} onClick={() => handleFilter("oceania")}>
                    Oceania
                </button>
                <button className={styles.buttonReset} onClick={resetFilter}>
                    Mostrar Todos
                </button>
            </div>

            <div className={styles.cardContainer}>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className={styles.cardContainer}>
                        {countries.map((country, index) => (
                            <CountryCard key={index} country={country} onClick={handleCardClick} />
                        ))}
                    </div>
                )}
            </div>

            {selectedCountry && <CountryModal country={selectedCountry} onClose={handleCloseModal} />}

            <button className={styles.scrollTopButton} onClick={() => window.scrollTo(0, 0)}>
                Voltar ao Topo
            </button>
        </div>
    );
}
