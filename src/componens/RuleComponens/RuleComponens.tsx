'use client'
import styles from "./ruleComponens.module.sass";
import Image from "next/image";
import Link from "next/link";
import { useTypedSelector } from "@/hoods/useTypedSelector";
import {useActions} from "@/hoods/useActions";


export default function RuleComponens() {
    const { active } = useTypedSelector((state) => state.menuMutton);
    const { MenuButtonActions } = useActions()
    const {INavActions} = useActions()
    const {path} = useTypedSelector(state => state.path)
    return (
        <div className={active ? styles.rule_componens_content_active : styles.rule_componens_content}>
            <div className={styles.refresh_p2p}>
                <div className={styles.refresh_p2p_title}>
                    <svg width="30" height="30px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.1998 10.8799L3.9998 14.0799L0.799805 10.8799"
                            stroke="#bababa"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.72 6.77007C16.6086 5.63347 15.1839 4.85371 13.6275 4.53032C12.0711 4.20693 10.4536 4.35459 8.98145 4.95439C7.5093 5.5542 6.24924 6.57899 5.362 7.898C4.47476 9.21701 4.0006 10.7703 4 12.3599V14.0901"
                            stroke="#bababa"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16.7998 13.96L19.9998 10.75L23.1998 13.96"
                            stroke="#ffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.28027 18.0801C7.39163 19.2167 8.8164 19.9962 10.3728 20.3196C11.9292 20.643 13.5467 20.4956 15.0188 19.8958C16.491 19.2959 17.751 18.2712 18.6383 16.9521C19.5255 15.6331 19.9997 14.0796 20.0003 12.49V10.76"
                            stroke="#bababa"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p>P2P</p>
                </div>
                <Image src="/image/arrow-next-small-svgrepo-com.svg" alt="arrow" width={20} height={20} />
            </div>

            <ul>
                <li onClick={()=> {
                    MenuButtonActions()
                    INavActions("selling_usdt")
                }} className={path === "selling_usdt" ? styles.active : ""} >
                    <Link href="/selling_usdt">Продажа USDT</Link>
                </li>
                <li onClick={()=> {
                    MenuButtonActions()
                    INavActions("advertisements")
                }} className={path === "advertisements" ? styles.active : ""}  >
                    <Link href="/advertisements">Обьявления</Link>
                </li>
                <li onClick={()=> {
                    MenuButtonActions()
                    INavActions("buying_usdt")
                }} className={path === "buying_usdt" ? styles.active : ""} >
                    <Link href="/buying_usdt">Покупка USDT</Link>
                </li>
                <li onClick={()=> {
                    MenuButtonActions()
                    INavActions("payment_history")
                }} className={path === "payment_history" ? styles.active : ""} >
                    <Link href="/payment_history">История выплат</Link>
                </li>
                <li onClick={()=> {
                    MenuButtonActions()
                    INavActions("a3_logs")
                }}  className={path === "a3_logs" ? styles.active : ""}  >
                    <Link href="/a3_logs">Логи по A3</Link>
                </li>
                <li onClick={()=> {
                    MenuButtonActions()
                    INavActions("statistics")
                }}  className={path === "statistics" ? styles.active : ""} >
                    <Link href="/statistics">Статистика</Link>
                </li>
                <li onClick={()=> {
                    MenuButtonActions()
                    INavActions("a3_settings")
                }}  className={path === "a3_settings" ? styles.active : ""} >
                    <Link href="/a3_settings">Настройки A3</Link>
                </li>
                <li onClick={()=> {
                    MenuButtonActions()
                    INavActions("settings")
                }}  className={path === "settings" ? styles.active : ""}  >
                    <Link href="/settings">Настройки</Link>
                </li>
            </ul>
        </div>
    );
}
