'use client'
import {useTypedSelector} from "@/hoods/useTypedSelector";
import styles from "@/app/page.module.css";
import RuleComponens from "@/componens/RuleComponens/RuleComponens";
import Login from "@/componens/Login/Login";
import PaymentHistoryContent from "@/componens/PaymentHistoryContent/PaymentHistoryContent";


export default function PaymentHistory() {
    const {user} = useTypedSelector(state => state.user)
    if (user) {
        return (
            <div className={styles.home_content_element}>
                <PaymentHistoryContent/>
            </div>
        );
    } else {
        return (
            <Login/>
        );
    }
}