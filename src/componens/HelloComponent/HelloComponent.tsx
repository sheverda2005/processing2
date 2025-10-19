'use client'
import styles from "./helloComponens.module.sass"
import Image from "next/image";
import {Roboto} from "next/font/google";
import {useTypedSelector} from "@/hoods/useTypedSelector";


const inter = Roboto({ subsets: ["latin"], weight: ["500", "400", "300", "900"]});


export default function HelloComponent() {
    const {user} = useTypedSelector(state => state.user)
    return (
        <div className={styles.hello_content} >
            <Image src={"/image/email_hello.svg"} alt={"email"} height={250} width={250} />
            <div className={styles.hello_content_text} >
                <h1  >Привет, {user?.name}!</h1>
                <p>Ты авторизировался в системе JET P2P</p>
                <p>В соответвии с прапвилами "Трейдер KYC" тебе доступны пункты меню слева</p>
            </div>
        </div>
    );
}
