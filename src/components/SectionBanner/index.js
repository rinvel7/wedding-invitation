import style from "./Banner.module.css"
export default function Banner(){
    return(
        <section  className={style.container_banner}>
            <div className={style.text_banner}>
                <p>O momento chegou, e queremos que você faça parte do nosso doce começo!</p>
            </div>
        </section>
    )
}