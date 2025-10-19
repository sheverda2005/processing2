import styles from "./a3LogsContent.module.sass"
import A3LogItem from "@/componens/A3LogItem/A3LogItem";

export default function A3LogsContent() {
    return (
        <div className={styles.a3Content} >
            <h1>Логи уведомлений</h1>
            <div className={styles.inputs_button} >
                <div className={styles.a3LogsInputs}>
                    <div className={styles.a3LogInput}>
                        <label>Принадлежность к сделке</label>
                        <input type="text"/>
                    </div>
                    <div className={styles.a3LogInput}>
                        <label>Валюта</label>
                        <input type="text"/>
                    </div>
                    <div className={styles.a3LogInput}>
                        <label>Банк</label>
                        <input type="text"/>
                    </div>
                    <div className={styles.a3LogInput}>
                        <label>ID транзакции</label>
                        <input type="text"/>
                    </div>
                    <div className={styles.a3LogInput}>
                        <label>Сумма</label>
                        <input type="text"/>
                    </div>
                    <div className={styles.a3LogInput}>
                        <label>Дата</label>
                        <input type="date"/>
                    </div>
                    <div className={styles.a3LogInput}>
                        <label>Название реквизита</label>
                        <input type="text"/>
                    </div>
                    <div className={styles.a3LogInput}>
                        <label>ID сделки</label>
                        <input type="text"/>
                    </div>
                </div>
                <button>
                    <img src="/image/search-svgrepo-com.svg" alt="search-svgrepo-com" width={20} height={20} />
                </button>
            </div>
            {/*<A3LogItem/>*/}
            {/*<A3LogItem/>*/}
            {/*<A3LogItem/>*/}
            {/*<A3LogItem/>*/}
            {/*<A3LogItem/>*/}

        </div>
    );
}