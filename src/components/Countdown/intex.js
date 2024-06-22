import React, { useEffect, useRef, useState } from "react";
import style from "./Countdown.module.css";

export default function Countdown(){
    const [timesDays, setTimerDays] = useState('00');
    const [timesHours, setTimerHours] = useState('00');
    const [timesMinutes, setTimerMinutes] = useState('00');
    const [timesSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () =>{
        const countDownDate = new Date('Sep 07, 2024 17:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000*60*60*24));
            const hours = Math.floor((distance % (1000*60*60*24) / (1000*60*60)));
            const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
            const seconds = Math.floor((distance % (1000*60)) /1000);

            if (distance < 0){
                // stop our timer
                clearInterval(interval.current);
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds)
            }
        }, 1000)
    };

    useEffect(()=> {
        startTimer();
        return() => {
            clearInterval(interval.current);
        };
    });

    return(
        <section className={style.timer_container}>         
                <div className={style.timer}>   
                    <div>
                        <p>Contagem regressiva para um dia verdadeiramente especial!</p>             
                    </div>
                    <div className={style.count}>
                        <div>
                            <p>{timesDays}</p>
                            <p>Dias</p>
                        </div>
                        <span>:</span>
                        <div>
                            <p>{timesHours}</p>
                            <p>Hora</p>
                        </div>
                        <span>:</span>
                        <div >
                            <p>{timesMinutes}</p>
                            <p>Minutos</p>
                        </div>
                        <span>:</span>
                        <div>
                            <p>{timesSeconds}</p>
                            <p>segundos</p>
                        </div>
                    </div>
                </div>
        </section>
       

    )
}