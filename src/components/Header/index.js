import style from "./Header.module.css";
import Image from "next/image";
import Logo from "../../../public/assets/logo_v_r_t.png";
import Flower3 from "../../../public/assets/flower3t.png";
import Flower4 from "../../../public/assets/flower4t.png";



export default function Header(){

    return (
<header className={style.container}>
            <Image className={style.img_flower3} src={Flower3} />
            <Image className={style.logo} src={Logo} />
            <div className={style.titulo}>  
                <h2>Victor</h2>
                <h3>&</h3>
                <h2>Rina</h2>
            </div>       
            <Image className={style.img_flower4} src={Flower4} />     
        </header>
    )
}