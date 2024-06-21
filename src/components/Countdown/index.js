"use client";

import { useEffect } from 'react';
import style from './Countdown.module.css';

const Countdown = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../../../public/simplycountdown.js'; 
    script.async = true;
    script.onload = () => {
      if (typeof window !== 'undefined' && window.simplyCountdown) {
        window.simplyCountdown('#count', {
          year: 2024,
          month: 9,
          day: 7,
          hours: 14,
          minutes: 0,
          seconds: 0,
          words: {
            days: { singular: 'Día', plural: 'Días' },
            hours: { singular: 'Hora', plural: 'Horas' },
            minutes: { singular: 'Minuto', plural: 'Minutos' },
            seconds: { singular: 'Segundo', plural: 'Segundos' }
          },
          plural: true,
          inline: false,
          enableUtc: true,
          onEnd: function () {
            document.getElementById('counts').classList.add(style.oculta);
            return;
          },
          refresh: 1000,
          sectionClass: style.simplySection,
          amountClass: style.simplyAmount,
          wordClass: style.simplyWord,
          zeroPad: false,
          countUp: false
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const countdownContainer = document.getElementById('count');
      if (countdownContainer) countdownContainer.innerHTML = '';
    };
  }, []);

  return <div id="count"></div>;
};

export default Countdown;
