import styles from "./a3LogItem.module.sass"


export default function A3LogItem() {
    return (
        <div className={styles.a3LogItem} >
            <div className={styles.id_transition}>
                К5PVKBEND4
            </div>
            <div className={styles.data}>
                20:29:32
                (UTC3)
                17:29:32
                30.09.2024
            </div>
            <div className={styles.count}>
                1000
            </div>
            <div className={styles.currency}>
                <img src="/image/ukrainian-hryvnia-svgrepo-com.svg" alt="hryvnia" width={40} height={30} />
            </div>
            <div className={styles.bank}>
                ПУМБ
            </div>
            <div className={styles.deal_id}>
                Не относяться к сделке
            </div>
            <div className={styles.divice}>
                Голубов Дмитро Федорович
            </div>
            <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi architecto, blanditiis dicta eius
            </div>
        </div>
    );
}