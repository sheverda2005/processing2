import styles from "./paymentHistoryContent.module.sass"


export default function PaymentHistoryContent() {
    return (
        <div className={styles.payment_history} >
            <h1>
                История выплат пока недоступна...
            </h1>
        </div>
    );
}