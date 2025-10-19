'use client';

import styles from "./advertisementsContent.module.sass";
import { useEffect, useRef, useState } from "react";

export default function AdvertisementsContent() {
    const [active, setActive] = useState(false); // Управляет видимостью списка
    const [data, setData] = useState('---Не выбрано---'); // Выбранный банк

    // Типизируем useRef для работы с HTMLDivElement или null
    const ref = useRef<HTMLDivElement | null>(null); // Реф для отслеживания списка банков
    const toggleRef = useRef<HTMLDivElement | null>(null); // Реф для элемента выбора

    const handleClickOutside = (event: MouseEvent) => {
        // Проверяем, что клик был вне списка банков и вне элемента выбора
        if (
            ref.current &&
            toggleRef.current &&
            !ref.current.contains(event.target as Node) &&
            !toggleRef.current.contains(event.target as Node)
        ) {
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const toggleDropdown = () => {
        setActive((prev) => !prev); // Переключает видимость списка при клике
    };

    return (
        <div className={styles.advertisements}>
            <h1>Реквизиты</h1>
            <h2>Новые реквизиты</h2>
            <div className={styles.pay_method}>
                <label>Платежный метод</label>
                <div className={styles.ukr_banks}>
                    <div
                        ref={toggleRef}
                        onClick={toggleDropdown}
                        className={styles.ukr_banks_methods_default}
                    >
                        {data}
                        <img
                            className={active ? styles.down_arrow_active : styles.down_arrow}
                            src="/image/down-arrow-svgrepo-com.svg"
                            alt="down-arrow"
                            width={10}
                            height={10}
                        />
                    </div>
                    {active && (
                        <div ref={ref} className={styles.ukr_banks_methods}>
                            {[
                                { name: "Сбербанк", img: "sberbank.svg" },
                                { name: "ВТБ", img: "vtb.svg" },
                                { name: "Газпромбанк", img: "gazprombank.svg" },
                                { name: "Альфа-Банк", img: "alphaBank.svg" },
                                { name: "Тинькофф Банк", img: "tinkoff.svg" },
                                { name: "Райффайзенбанк", img: "raiffeisen.svg" },
                                { name: "Halyk Bank", img: "halyk.svg" },
                                { name: "Kaspi Bank", img: "kaspi.svg" },
                                { name: "ForteBank", img: "forte.svg" },
                                { name: "Jusan Bank", img: "Junsan.svg" },
                                { name: "Bank CenterCredit", img: "centerCredit.svg" },
                                { name: "Eurasian Bank", img: "Eurasian_Bank.svg" },
                                { name: "Bereke Bank", img: "bereke.svg" },
                                { name: "Altyn Bank", img: "Altyn.svg" },
                            ].map((bank) => (
                                <div
                                    key={bank.name}
                                    onClick={() => {
                                        setData(bank.name);
                                        setActive(false);
                                    }}
                                    className={styles.method}
                                >
                                    <img
                                        src={`/image/banks/${bank.img}`}
                                        width={20}
                                        height={20}
                                        alt={bank.name}
                                    />
                                    {bank.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div
                className={
                    data !== "---Не выбрано---"
                        ? styles.advertisements_inputs_active
                        : styles.advertisements_inputs
                }
            >
                {[
                    { label: "Название реквизитов для удобства", placeholder: "Название реквизитов для удобства" },
                    { label: "Номер карты", placeholder: "Номер карты" },
                    { label: "Фамилия владельца карты", placeholder: "Фамилия владельца карты" },
                    { label: "Имя владельца карты", placeholder: "Имя владельца карты" },
                    { label: "Отчество владельца карты", placeholder: "Отчество владельца карты" },
                ].map((input, index) => (
                    <div key={index} className={styles.advertisements_input}>
                        <label>{input.label}</label>
                        <input type="text" placeholder={input.placeholder} />
                    </div>
                ))}
            </div>
            <button
                className={data !== "---Не выбрано---" ? styles.button_active : styles.button_dont_active}
            >
                Сохранить
            </button>
        </div>
    );
}
