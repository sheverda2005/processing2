'use client'
import styles from "@/app/page.module.css";
import RuleComponens from "@/componens/RuleComponens/RuleComponens";
import StatisticsContent from "@/componens/StatisticsContent/StatisticsContent";
import {useTypedSelector} from "@/hoods/useTypedSelector";
import Login from "@/componens/Login/Login";


export default function Statistics() {
    const {user} = useTypedSelector(state => state.user)
    if (user) {
        return (
            <div className={styles.home_content_element}>
                <StatisticsContent/>
            </div>
        );
    } else {
        return (
            <Login/>
        );
    }

}