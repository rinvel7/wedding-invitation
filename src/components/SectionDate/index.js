"use client";

import style from "./Date.module.css"
import Image from "next/image";
import Flower2t from "../../../public/assets/flower2t.png";
import Countdown from "../Countdown/intex";
import Calendar from "../../../public/assets/calendar.png"

export default function Date() {
    return(
        <section className={style.container}>
             <Image className={style.background_flower2} src={Flower2t} alt="image-of-flower"/>
            <div className={style.container_text}>
            <p>Esperamos que você esteja presente neste dia que tanto</p>  
            <span className={style.text_special}>sonhamos</span>   
            <p className={style.day_text}>SABADO</p>
            <p className={style.day_number}>Setembro
                <span>.<Image className={style.calendar_img} src={Calendar} alt="calendary" />.</span>
                2024</p>
            </div>
            <Countdown />
        </section>
    )
}