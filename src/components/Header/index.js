import style from "./Header.module.css";
import Image from "next/image";
import Rings from "../../../public/assets/rings.png"
import Logo from "../../../public/assets/logo_v_r_t.png";
import Flower3 from "../../../public/assets/flower3t.png"
import Flower4 from "../../../public/assets/flower4t.png"



export default function Header(){

    return (
        <header className={style.container}>
            <Image className={style.background_img_rings} src={Rings} alt="people-hug" priority={true}/>
            <Image className={style.img_flower3} src={Flower3} alt="flowers" />
            <Image className={style.logo} src={Logo} alt="logo-victor-rina"/>
            <div className={style.titulo}>  
            <h2>Victor</h2>
            <h2>&</h2>
            <h2>Rina</h2>
            </div>       
            <Image className={style.img_flower4} src={Flower4} alt="flower"/>     
            <div  className={style.container_text}>
            <div className={style.text}>
                <p>O momento chegou, e queremos que você faça parte do nosso doce começo!</p>
            </div>
        </div>
        </header>
    )
}