import style from "./Information.module.css";
import Image from "next/image";
import Happy from "../../../public/assets/happy.png";


export default function Information(){
    return(
        <section  className={style.container}>
            <Image className={style.background_img} src={Happy} alt="image-of-flower"/>
        </section>
    )
}