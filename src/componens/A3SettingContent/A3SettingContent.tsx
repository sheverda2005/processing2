import styles from "./a3SettingContent.module.sass"



export default function A3SettingContent() {
    return (
        <div className={styles.a3SettingContent} >
            <h1>Настройка автоматизации</h1>
            <div className={styles.a3SettingsText} >
                <p>
                    User ID: <span><em>VGYylnQmhq</em></span>
                </p>
                <button>
                    Первое подключение
                </button>
            </div>
            <div className={styles.a3SettingsLogsDevices}>
                <div className={styles.a3SettingsLogsDevices_Item} >
                    <div className={styles.log} >
                        <div>ID УСТРОЙСТВА</div>
                        <div>НАЗВАНИЕ</div>
                        <div>ДАТА СОЗДАНИЯ</div>
                        <div>ИСТПРАВНО</div>
                        <div>УДАЛЕНО</div>
                    </div>
                </div>
                <div className={styles.a3SettingsLogsDevices_Item} >
                    <div className={styles.content_a3} >
                        <h2>Редактирование устройства</h2>
                        <div className={styles.device_name} >
                            <label>Название устройства для убовства</label>
                            <input type="text" placeholder={'Каргач Інна Олександріївна'}/>
                        </div>
                        <div className={styles.active_device} >
                            <input type="checkbox"/>
                            Активность устройства
                        </div>
                        <div className={styles.linking_details}>
                            <h2>Привязка реквизитов к устроству</h2>
                            <div className={styles.cards_a3}>
                                --Не выбрано--
                                <img src="/image/down-arrow-svgrepo-com.svg" alt="down-arrow" width={10}
                                     height={10}/>
                            </div>
                            <div className={styles.log2}>
                                <div>БАНК</div>
                                <div>НАЗВАНИЕ РЕКВИЗИТА</div>
                                <div>ТЕКСТОВАЯ ТРАНЗАКЦИЯ</div>
                                <div>АКТИВЕН</div>
                                <div>ДЕЙСТВИЯ</div>
                            </div>
                            <div className={styles.a3SettingsButtons} >
                                <button className={styles.button_save} >Сохранить</button>
                                <button className={styles.button_cancel} >Отмена</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}