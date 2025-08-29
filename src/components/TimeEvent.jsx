import { useState, useEffect } from "react";

export default function TimeEvent({targetDate, title_yellow, title_white, description, img}) {
  const target = new Date(targetDate);

  const calculateDiff = () => {
    const now = new Date();
    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return { days, hours, minutes };
  };

  const [time, setTime] = useState(calculateDiff());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateDiff());
    }, 60000); // actualiza cada segundo

    return () => clearInterval(interval); // limpia el intervalo al desmontar
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between w-full items-center gap-10 md:gap-2 bg-[var(--fondo3)] pt-10 pb-10 pl-1 pr-1 md:p-5 border-2 border-white/20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-5 ">
        <div>
          <img src={img} className="flex md:hidden lg:flex w-30 h-auto" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[var(--text1)] text-3xl font-extrabold">
            {title_yellow} <span className="text-white">{title_white}</span>
          </h1>
          <p className="text-[var(--text2)] font-bold opacity-70 text-sm">
            {description}
          </p>
        </div>
      </div>
      <div className="flex text-white gap-10">
        <div className="flex flex-col items-center">
          <h1 className="text-[var(--text1)] font-extrabold text-6xl">{time.days}</h1>
          <p className="text-[var(--text3)] font-bold">Días</p>
        </div>
        <h1 className="text-4xl font-extrabold mt-2">:</h1>
        <div className="flex flex-col items-center">
          <h1 className="text-[var(--text1)] font-extrabold text-6xl">{time.hours}</h1>
          <p className="text-[var(--text3)] font-bold">Horas</p>
        </div>
        <h1 className="text-4xl font-extrabold mt-2">:</h1>
        <div className="flex flex-col items-center">
          <h1 className="text-[var(--text1)] font-extrabold text-6xl">{time.minutes}</h1>
          <p className="text-[var(--text3)] font-bold">Minutos</p>
        </div>
      </div>
    </div>
  );
}
