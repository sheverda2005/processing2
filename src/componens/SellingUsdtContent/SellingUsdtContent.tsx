'use client'
import styles from "./sellingUsdtContent.module.sass"
import {Roboto} from "next/font/google";
import ActiveItemsSellingUsdt from "@/componens/ActiveItemsSellingUsdt/ActiveItemsSellingUsdt";
import {useEffect, useState} from "react";
import CompletedItemsSellingUsdt from "@/componens/completedItemsSellingUsdt/CompletedItemsSellingUsdt";
import ControversySellingUSDT from "@/componens/ControversySellingUSDT/ControversySellingUSDT";
import ExportSellingUsdt from "@/componens/ExportSellingESDT/ExportSellingUsdt";


const inter = Roboto({ subsets: ["latin"], weight: ["500", "400", "300", "900"]});



export default function SellingUsdtContent() {
    const [activeButton, setActiveButton] = useState("sellingUSDTActive")


    return (
            <div className={styles.selling_usdt}>
                <div className={inter.className}>
                    <h1>Продажа USDT</h1>
                    <div className={styles.selling_usdt_inputs}>
                        <input type="text" placeholder={"ID сделки"}/>
                        <input type="text" placeholder={"Сумма"}/>
                        <input type="text" placeholder={"Все"}/>
                        <input type="text" placeholder={"Все"}/>
                        <button>
                            Найти
                        </button>
                    </div>
                    <ul className={styles.list_of_selling}>
                        <li className={activeButton === "sellingUSDTActive" ? styles.item_active : ""} onClick={() => {
                            setActiveButton("sellingUSDTActive")
                        }}>Активные
                        </li>
                        <li className={activeButton === "completedSellingUSDT" ? styles.item_active : ""}
                            onClick={() => {
                                setActiveButton("completedSellingUSDT")
                            }}>Завершенные
                        </li>
                        <li className={activeButton === "controversySellingUSDT" ? styles.item_active : ""}
                            onClick={() => {
                                setActiveButton("controversySellingUSDT")
                            }}>Споры
                        </li>
                        <li className={activeButton === "exportSellingUSDT" ? styles.item_active : ""} onClick={() => {
                            setActiveButton("exportSellingUSDT")
                        }}>Экспорт
                        </li>
                    </ul>
                    <div>
                        {activeButton === "sellingUSDTActive" ? <ActiveItemsSellingUsdt/> : ""}
                        {activeButton === "completedSellingUSDT" ? <CompletedItemsSellingUsdt/> : ""}
                        {activeButton === "controversySellingUSDT" ? <ControversySellingUSDT/> : ""}
                        {activeButton === "exportSellingUSDT" ? <ExportSellingUsdt/> : ""}
                    </div>
                </div>
            </div>
    );
}