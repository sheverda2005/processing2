import styles from "./activeItemsSellingUsdt.module.sass"

export default function ActiveItemsSellingUsdt() {
    return (
        <ul className={styles.activeItemsSellingUsdt_list} >
            <li>ID Сделки</li>
            <li>Мой курс</li>
            <li>Курс биржы</li>
            <li>Мои реквизиты</li>
            <li>Создана</li>
            <li>Статус</li>
            <li>Действия</li>
        </ul>
    );
}