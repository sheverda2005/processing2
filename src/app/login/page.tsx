'use client'
import styles from "./login.module.sass"
import {useActions} from "@/hoods/useActions";
import {useTypedSelector} from "@/hoods/useTypedSelector";



export default function Login() {
    const {emailInput, passwordInput, getUsers} = useActions()
    const {email, password} = useTypedSelector(state => state.inputs)
    const {user} = useTypedSelector(state => state.user)
    return (
        <div className={styles.profile} >
            <div className={styles.profile_content}>
                <h3>Авторизация</h3>
                <div className={styles.profile_inputs}>
                    <div className={styles.email}>
                        <label htmlFor="email">Email</label>
                        <input onChange={(event)=> {
                            emailInput(event.target.value)
                        }} value={email} className={styles.input_login} type="text" placeholder={"janedoe@gmail.com"}/>
                    </div>
                    <div className={styles.password}>
                        <label  htmlFor="email">
                            Пароль
                        </label>
                        <input onChange={(event)=> {
                            passwordInput(event.target.value)
                        }} value={password}  className={styles.input_login} type="password" placeholder={'введите свой пароль'}/>
                    </div>
                </div>
                <button onClick={()=> {
                    getUsers(email,password)
                }}  className={styles.login_button} >Войти</button>
            </div>
        </div>
    );
}
