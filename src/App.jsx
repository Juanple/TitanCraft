import { useState } from "react"
import Header from "./components/Header"
import TimeEvent from './components/TimeEvent'
import SuportCard from "./components/SuportCard"
import PaymentInfo from "./components/PaymentInfo"

export default function App() { 

  const productList = [
    {'title': 'Rango VIP (Crono)', 'description': '  El rango VIP Crono te da acceso a ventajas exclusivas y permanentes. Con él, disfrutarás de beneficios únicos y un estatus superior que te diferenciará del resto de jugadores.  ', 'price': 14.24, 'img': 'crono.png','discount': null},
    {'title': 'Pack de Hierro', 'description': '¡Domina la economía de TitanCraft! Con nuestros Packs de Dinero (Titans), podrás asegurar tu riqueza de forma rápida y segura. Compra lo que necesites, invierte en tu futuro y sube a lo más alto de la clasificación. ¡El poder económico está a solo un clic!', 'price': 16.82, 'img': 'pack_hierro.png', 'discount': null},
  ]


  return (
    <div className="bg-[var(--fondo)]">

      <Header />
      
      <main className="z-10 mt-[2rem] flex justify-center">
        <div className="w-[1300px] flex gap-5 z-10">
          <div className="w-[80%] flex flex-col gap-5">
            <TimeEvent targetDate={'2025-09-29T00:00:00'} title_yellow={'SERVER'} title_white={'LUNCH'} description={'Proximo lanzamiento de TitanCraft!'} />

            {/* Secciones */}
            <div className="flex w-full gap-5">
              <div className="w-[50%] flex flex-col gap-5">
                <button className="overflow-hidden">
                  <img src="../public/rango-vip.png" className="transform cursor-pointer transition hover:scale-[1.1]"></img>
                </button>
                <button className="overflow-hidden">
                  <img src="../public/pack-dinero.png" className="transform cursor-pointer transition hover:scale-[1.1]"></img>
                </button>
              </div>
              <div className="w-[50%] flex flex-col gap-5">
                <button className="overflow-hidden">
                  <img src="../public/equipacion.png" className="transform cursor-pointer transition hover:scale-[1.1]"></img>
                </button>
                <button className="overflow-hidden">
                  <img src="../public/parcelas.png" className="transform cursor-pointer transition hover:scale-[1.1]"></img>
                </button>
              </div>
            </div>

          </div>
          <div className="flex flex-col gap-5">
            <SuportCard />
            <PaymentInfo />
          </div>
        </div>
      </main>

    </div>
  )
}