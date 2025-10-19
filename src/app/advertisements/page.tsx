'use client'
import RuleComponens from "@/componens/RuleComponens/RuleComponens";
import styles from "@/app/page.module.css";
import AdvertisementsContent from "@/componens/AdvertisementsContent/AdvertisementsContent";
import {useTypedSelector} from "@/hoods/useTypedSelector";
import Login from "@/componens/Login/Login";


export default function AdvertisementsPage() {
    const {user} = useTypedSelector(state => state.user)
    if (user) {
        return (
            <div className={styles.home_content_element} >
                <AdvertisementsContent/>
            </div>
        );
    } else {
        return (
            <Login/>
        );
    }

}