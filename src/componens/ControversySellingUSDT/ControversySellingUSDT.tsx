import ActiveItemsSellingUsdt from "@/componens/ActiveItemsSellingUsdt/ActiveItemsSellingUsdt";
import styles from "./controversySellingUsdt.module.sass"

export default function ControversySellingUSDT() {
    return (
        <div className={styles.controversySellingUSDT} >
            <ActiveItemsSellingUsdt/>
            <button>Загрузить еще</button>
        </div>
    );
}