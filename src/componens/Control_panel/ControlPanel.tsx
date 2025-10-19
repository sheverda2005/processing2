'use client'
import styles from "./control_panel.module.sass"
import Link from "next/link";
import {useTypedSelector} from "@/hoods/useTypedSelector";
import {useActions} from "@/hoods/useActions";


export default function ControlPanel() {
    const {user} = useTypedSelector(state => state.user);
    const {MenuButtonActions} = useActions()
    const {active} = useTypedSelector(state => state.menuMutton)
    const {INavActions} = useActions()
    const {path} = useTypedSelector(state => state.path)
    return (
            <div className={styles.control_panel_container}>
                <div className={styles.panel_menu} >
                    <div onClick={()=> {
                        MenuButtonActions()
                    }} className={active ? styles.menu_button_active: styles.menu_button} >
                        <div className={styles.panel_button_item} ></div>
                        <div className={styles.panel_button_item} ></div>
                        <div className={styles.panel_button_item} ></div>
                    </div>
                    <div className={styles.panel_text} >
                        Панель управления
                    </div>
                </div>
                <div className={styles.usdt_details} >
                    <div className={styles.buy_sell_USDT} >
                        Покупка USDT
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className={styles.buy_sell_USDT} >
                        Продажа USDT
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className={styles.balance} >
                        <Link onClick={()=> {
                            INavActions("balance")
                        }} href={"/balance"} >
                            Баланс: ${user?.balance}
                        </Link>
                    </div>
                </div>
            </div>
    );
}