'use client'
import styles from "@/app/page.module.css";
import RuleComponens from "@/componens/RuleComponens/RuleComponens";
import SellingUsdtContent from "@/componens/SellingUsdtContent/SellingUsdtContent";
import {useTypedSelector} from "@/hoods/useTypedSelector";
import BalanceContent from "@/componens/BalanceContent/BalanceContent";
import Login from "@/componens/Login/Login";


export default function SellingUsdt() {
    const {user} = useTypedSelector(state => state.user)
    if (user) {
        return (
            <div className={styles.home_content_element}>
                <SellingUsdtContent/>
            </div>
        );
    } else {
        return (
            <Login/>
        );
    }

}