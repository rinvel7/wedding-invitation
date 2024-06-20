import Image from "next/image";
import Logo from "../../../public/assets/logo_v_r_t.png";
import Flower4 from "../../../public/assets/flower4t.png"
import style from "./Header.module.css";


export default function Header(){

    return (
        <header className={style.container_header}>
                <Image className={style.fondo_img} src={Flower4} />
                <Image className={style.logo} src={Logo} />
            <h1 className={style.titulo}>Victor & Rina</h1>             
        </header>
    )
}