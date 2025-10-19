'use client'
import styles from './balanceContent.module.sass'
import {useEffect, useState} from "react";
import {useTypedSelector} from "@/hoods/useTypedSelector";
import axios from "axios";



export default function BalanceContent() {
    const [state, setState] = useState(false)
    const {user} = useTypedSelector(state => state.user)
    const [course, setCourse] = useState<any>(0)

    useEffect(()=> {
        const ourCourse = async () => {
            const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
            const usdToRub = await response.data.Valute.USD.Value;
            setCourse(usdToRub)
        }
        ourCourse()
    }, [])


    return (
        <div className={styles.balanceContent}>
            <div className={styles.balanceContentCurrentBalance}>
                <p>Ваш личный баланс: <span>
                    ${user?.balance}
                </span></p>
                <div>
                    <button onClick={() => {
                        setState(true)
                    }}>Пополнить
                    </button>
                    <button className={styles.withdraw_button}>Вывести</button>
                </div>
            </div>
            <div className={styles.frozen_balance}>
                Заморожено: ${user?.frozen_balance}
            </div>
            <div className={styles.table_main} >
                <table className={styles.balance_table} border={1}>
                    <tr>
                        <th>Валюта</th>
                        <th>Количество</th>
                    </tr>
                    <tr>
                        <td>
                            <img src="/image/Rouble_official_sign.svg" alt="rouble" width={20} height={25}/>
                        </td>
                        <td>{user?.balance ? +course * +user?.balance : user?.balance}</td>
                    </tr>
                </table>
            </div>
            <div className={state ? styles.top_up_balance_active : styles.top_up_balance} onClick={() => setState(false)} // Закрываем окно при клике на top_up_balance_active
            >
                <div
                    className={styles.top_up_balance_content}
                    onClick={(e) => e.stopPropagation()} // Останавливаем всплытие события
                >
                    <h3>Пополнение баланса!</h3>
                    <div className={styles.payment_method}>
                        <label>Способ оплаты</label>
                        <input type="text" placeholder="Платеж через администратора"/>
                    </div>
                    <div className={styles.admin_address}>
            <span>
                Совершите платеж на указанный кошелек администратора. Вставьте в поле для ввода хеш платежа и нажмите сохранить.
            </span>
                        <p>Сеть кошелька администратора</p>
                        <div className={styles.trc20}>
                            BEP20
                        </div>
                        <p>Адрес кошелька администратора</p>
                        <div className={styles.trc20}>
                            0x93e7C27A93cd1f97a85ac66E649BaFDc59dc7dCF
                         </div>
                    </div>
                    <div className={styles.sum_cech}>
                        <label>Сумма платежа</label>
                        <input className={styles.trc20}/>
                        <label>Введите хеш платежа</label>
                        <input className={styles.trc20}/>
                    </div>
                    <div className={styles.payment_buttons} >
                        <button onClick={()=> {
                            setState(false)
                        }} >Оплатить</button>
                        <button className={styles.cancel_button}  onClick={()=> {
                            setState(false)
                        }} >Закрыть</button>
                    </div>
                </div>
            </div>

        </div>
    );
}