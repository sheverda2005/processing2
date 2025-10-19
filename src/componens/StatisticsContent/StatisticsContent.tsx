import styles from "./statisticsContent.module.sass"

export default function StatisticsContent() {
    return (
        <div className={styles.statissticsContent}>
            <h1>
                Статистика трейдера
            </h1>
            <div className={styles.statissticsContent_inputs}>
                <div className={styles.inputs}>
                    <div className={styles.input_item}>
                        <label>С какой даты</label>
                        <input type="date"/>
                    </div>
                    <div className={styles.input_item}>
                        <label>По какую дату</label>
                        <input type="date"/>
                    </div>
                </div>
                <button>Отфильтровать</button>
            </div>
            <div className={styles.see_deals_profile_wrapper} >
                <div className={styles.see_deals}>
                    <p>Название сделок </p>
                    <p>Успешных сделок</p>
                    <p>Сумма успешнных</p>
                    <p>Сумма успешнных в USDT</p>
                    <p>Средний курс биржы</p>
                    <p>Средний размер сделки</p>
                    <p>Минимальная сделка</p>
                    <p>Конверсия</p>
                </div>
                <div className={styles.see_deals_profile}>
                    <p>F 1010 </p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                    <p>0</p>
                </div>
            </div>
        </div>
    );
}