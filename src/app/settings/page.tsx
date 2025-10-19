'use client'
import styles from "@/app/page.module.css";
import RuleComponens from "@/componens/RuleComponens/RuleComponens";
import SettingContent from "@/componens/Setting/SettingContent";
import {useTypedSelector} from "@/hoods/useTypedSelector";
import Login from "@/componens/Login/Login";


export default function Settings() {
    const {user} = useTypedSelector(state => state.user)
    if (user) {
        return (
            <div>
                <div className={styles.home_content_element}>
                    <SettingContent/>
                </div>
            </div>
        );
    } else {
        return (
            <Login/>
        );
    }

}