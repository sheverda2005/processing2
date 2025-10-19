'use client'
import HelloComponent from "@/componens/HelloComponent/HelloComponent";
import styles from "./page.module.css"
import {useTypedSelector} from "@/hoods/useTypedSelector";
import Login from "@/componens/Login/Login";

export default function Home() {
    const {user} = useTypedSelector(state => state.user)
    if (user) {
        return (
            <div className={styles.home_content_element} >
                <HelloComponent/>
            </div>
        );
    } else {
        return (
            <Login/>
        );
    }
}
