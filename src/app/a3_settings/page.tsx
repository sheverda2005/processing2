'use client'
import {useTypedSelector} from "@/hoods/useTypedSelector";
import styles from "@/app/page.module.css";
import RuleComponens from "@/componens/RuleComponens/RuleComponens";
import Login from "@/componens/Login/Login";
import A3SettingContent from "@/componens/A3SettingContent/A3SettingContent";


export default function A3SettingsPage() {
    const {user} = useTypedSelector(state => state.user)
    if (user) {
        return (
            <div className={styles.home_content_element}>
                <A3SettingContent/>
            </div>
        );
    } else {
        return (
            <Login/>
        );
    }
}