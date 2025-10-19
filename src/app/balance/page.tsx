'use client'
import styles from "@/app/page.module.css";
import RuleComponens from "@/componens/RuleComponens/RuleComponens";
import BalanceContent from "@/componens/BalanceContent/BalanceContent";
import {useTypedSelector} from "@/hoods/useTypedSelector";
import Login from "@/componens/Login/Login";


export default function Balance() {
    const {user} = useTypedSelector(state => state.user)
    if (user) {
        return (
            <div className={styles.home_content_element}>
                <BalanceContent/>
            </div>
        );
    } else {
        return (
            <Login/>
        );
    }

}