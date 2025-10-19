import {useEffect, useState} from "react";
import styles from "./exportSellingUsdt.module.sass"


export default function ExportSellingUsdt() {
    const [currentDate, setCurrentDate] = useState('');


    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        setCurrentDate(`${year}-${month}-${day}`);
    }, []);


    return (
        <div className={styles.exportSellingUsdtContent}  >
            <div className={styles.exportSellingUsdtInputs} >
                <label htmlFor="date">Начало периода</label>
                <input type="date" id="date" value={currentDate}/>
            </div>
            <div className={styles.exportSellingUsdtInputs} >
                <label htmlFor="date">Копец периода</label>
                <input type="date" id="date" value={currentDate}/>
            </div>
            <button>Экспорт в .csv</button>
        </div>
    );
}