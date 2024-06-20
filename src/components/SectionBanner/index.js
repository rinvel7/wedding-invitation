import style from "./Banner.module.css"
import Image from "next/image";
import Together from "../../../public/assets/rings-together-far-opacity.jpg";


export default function Banner(){
    return(
        <section  className={style.container_banner}>
            <Image className={style.background_img} src={Together} alt="image-of-flower"/>
            <div className={style.text_banner}>
                <p>O momento chegou, e queremos que você faça parte do nosso doce começo!</p>
            </div>
           
        </section>
    )
}