import { useState } from "react"
import Header from "./components/Header"
import TimeEvent from './components/TimeEvent'
import SuportCard from "./components/SuportCard"
import PaymentInfo from "./components/PaymentInfo"

export default function App() { 

  

  return (
    <div className="bg-[var(--fondo)]">

      <Header />
      
      <main className="z-10 mt-[2rem] flex justify-center">
        <div className="w-[1300px] flex flex-col xl:flex-row gap-5 z-10 p-5">
          <div className="w-full xl:w-[80%] flex flex-col gap-5">
            <TimeEvent targetDate={'2025-09-29T00:00:00'} title_yellow={'SERVER'} title_white={'LUNCH'} description={'Proximo lanzamiento de TitanCraft!'} />

            {/* Secciones */}
            <div className="flex flex-col sm:flex-row w-full gap-5">
              <div className="w-full sm:w-[50%] flex flex-col gap-5">
                <button className="overflow-hidden">
                  <img src="../public/rango-vip.png" className="transform cursor-pointer transition hover:scale-[1.1]"></img>
                </button>
                <button className="overflow-hidden">
                  <img src="../public/pack-dinero.png" className="transform cursor-pointer transition hover:scale-[1.1]"></img>
                </button>
              </div>
              <div className="w-full sm:w-[50%] flex flex-col gap-5">
                <button className="overflow-hidden">
                  <img src="../public/equipacion.png" className="transform cursor-pointer transition hover:scale-[1.1]"></img>
                </button>
                <button className="overflow-hidden">
                  <img src="../public/parcelas.png" className="transform cursor-pointer transition hover:scale-[1.1]"></img>
                </button>
              </div>
            </div>

          </div>
          <div className="flex flex-col md:flex-row xl:flex-col gap-5">
            <SuportCard />
            <PaymentInfo />
          </div>
        </div>
      </main>

    </div>
  )
}