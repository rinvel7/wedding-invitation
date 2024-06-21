import style from "./Countdown.module.css";

export default function Countdown(){
    return(

        <section className={style.timer_container}>         
                <div className={style.timer}>   
                    <div>
                        <h2>Contagem regressiva para um dia verdadeiramente especial!</h2>             
                    </div>
                    <div className={style.count}>
                        <div>
                            <p>87</p>
                            <p>Dias</p>
                        </div>
                        <span>:</span>
                        <div>
                            <p>87</p>
                            <p>Hora</p>
                        </div>
                        <span>:</span>
                        <div >
                            <p>87</p>
                            <p>Minutos</p>
                        </div>
                        <span>:</span>
                        <div>
                            <p>87</p>
                            <p>segundos</p>
                        </div>
                    </div>
                </div>
        </section>
       

    )
}