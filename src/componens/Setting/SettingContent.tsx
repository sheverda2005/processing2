import styles from "./settingContent.module.sass"
import {useTypedSelector} from "@/hoods/useTypedSelector";

export default function SettingContent() {
    const {user} = useTypedSelector(state => state.user)
    return (
        <div className={styles.setting_content} >
            <h1>Настройки</h1>
            <div className={styles.setting_content_input_items}>
                <div className={styles.setting_content_input_item} >
                    <label>Логин</label>
                    <input value={user?.login} type="text" readOnly />
                </div>
                <div className={styles.setting_content_input_item} >
                    <label>Телеграм</label>
                    <input value={user?.telegram} type="text" readOnly/>
                </div>
                <div className={styles.setting_content_input_item}>
                    <label>Ваше ФИО</label>
                    <input value={user?.name} type="text" readOnly/>
                </div>
                <div className={styles.setting_content_input_item} >
                    <label>Email</label>
                    <input placeholder={"Email"} type="text"/>
                </div>
                <div className={styles.setting_content_input_item} >
                    <label>Телефон</label>
                    <input placeholder={"Номер телефона"} type="text"/>
                </div>
            </div>
            <div className={styles.inputs_account_settings} >
                <div className={styles.account_input_item} >
                    Верификация KYC
                    <span className={styles.span_KYC} >
                        Пройдена
                    </span>
                </div>
                <div className={styles.account_input_item} >
                    <div className={styles.item_text} >
                        <p>
                            Управления адресами для вывода

                        </p>
                        <span>
                            Управления своими адресами для вывода, сохраняя их в списке разрешенных адресов вместе в MEMO. Активация дополнительной функции списка разрешенных адресов помогает защатить ваши стредства, разрешая вывод только на внесенные в список адресов.
                        </span>
                    </div>
                    <button className={styles.adress_management} >
                        Перейти
                    </button>
                </div>
                <div className={styles.account_input_item}>
                    Управление устроствами
                    <button className={styles.device_management} >
                        Перейти
                    </button>
                </div>
                <div className={styles.account_input_item}>
                    Пароль
                    <button>
                        Изменить
                    </button>
                </div>
                <div className={styles.account_input_item} >
                    Активность аккаунта
                    <button>
                        Ещё
                    </button>
                </div>
                <div className={styles.account_input_item} >
                    Уведомления
                    <button>
                        Изменить
                    </button>
                </div>
                <div className={styles.account_input_item} >
                    Двухетапная аунтефикация
                    <button>
                        Подключить
                    </button>
                </div>
            </div>
        </div>
    );
}