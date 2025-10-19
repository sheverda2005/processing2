'use client'
import Image from "next/image";
import "./nav_bar.css"
import Link from "next/link";
import {useActions} from "@/hoods/useActions";
import {useTypedSelector} from "@/hoods/useTypedSelector";



export default function NavBar() {
    const {INavActions} = useActions()
    const {path} = useTypedSelector(state => state.path)
    return (
        <nav className={"nav_bar"}>
            <div className="container">
                <div className="nav_bar_content">
                    <Link onClick={()=> {
                        INavActions(" ")
                    }}  href={'/'}>
                        <Image className={"logo_nav_bar"} src={"/image/jet_p2p.svg"} alt={"p2pay_Logo"} width={'120'} height={'120'}/>
                    </Link>
                    <ul>
                        <Link onClick={()=> {
                            INavActions("/balance")

                        }}  href={'/balance'} >
                            <Image className={'profile_nav_bar'} src={"/image/profile.svg"} alt={"profile"} width={25} height={25} />
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
