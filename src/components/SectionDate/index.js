import style from "./Date.module.css"
import Image from "next/image";
import Flower2t from "../../../public/assets/flower2t.png";

export default function Date() {
    return(
        <section className={style.container}>
             <Image className={style.background_img_2} src={Flower2t} alt="image-of-flower"/>
            <div className={style.container_text}>
            <p>Esperamos que você esteja presente neste dia que tanto</p>  
            <span className={style.text_special}>sonhamos</span>   
            <p className={style.Day_Text}>SABADO</p>
            <p>Septembro .<span className={style.Day_Number}>07</span> . 2024</p>
            </div>
        </section>
    )
}