import style from "./Hero.module.css"
import Image from "next/image";
import Rings from "../../../public/assets/rings-1.png";


export default function Hero(){
    return(
        <section  className={style.container}>
            <Image className={style.background_rings} src={Rings} alt="people-rings" priority={true}/>
            <div className={style.text}>
                <p>O momento chegou, e queremos que você faça parte do nosso doce começo!</p>
            </div>

        </section>
    )
}