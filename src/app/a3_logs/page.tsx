'use client'
import styles from "@/app/page.module.css";
import RuleComponens from "@/componens/RuleComponens/RuleComponens";
import A3LogsContent from "@/componens/A3Logs/A3LogsContent";
import {useTypedSelector} from "@/hoods/useTypedSelector";
import Login from "@/componens/Login/Login";


export default function A3Logs() {
    const {user} = useTypedSelector(state => state.user)
    if (user) {
        return (
            <div className={styles.home_content_element}>
                <A3LogsContent/>
            </div>
        );
    } else {
        return (
            <Login/>
        );
    }

}