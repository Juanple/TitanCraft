import { useState } from "react";

export default function Header() {
    
    const [menuState, setMenuState] = useState(false);
  
    const responsiveMenu = (
    <div className={`absolute transition-all duration-500 ${menuState ? 'left-0 opacity-100' : 'left-[-20rem] opacity-0'} xl:hidden z-10 top-0 bg-[var(--fondo)] text-[var(--text2)] w-[20rem] h-screen font-bold`}>
      <div className="flex bg-[var(--fondo2)] justify-between p-4 pt-8 pb-8">
        <p>Menu</p>
        <button
        onClick={() => {setMenuState(false)}}
        ><i className="fa-solid fa-xmark text-[1.3rem] transition cursor-pointer hover:scale-[1.2]"></i></button>
      </div>

      <div className="flex flex-col text-[var(--text1)]">
        <button className="cursor-pointer flex justify-start p-4 hover:bg-white/8">HOME</button>
        <button className="cursor-pointer flex justify-start p-4 hover:bg-white/8">FORUM</button>
        <button className="cursor-pointer flex justify-start p-4 hover:bg-white/8">STATS</button>
        <button className="cursor-pointer flex justify-start p-4 hover:bg-white/8">WIKI</button>
        <button className="cursor-pointer flex justify-start p-4"><p className="p-1 pl-6 pr-6 font-bold cursor-pointer w-fit text-[var(--fondo)] rounded-full h-fit bg-[var(--text1)] hover:bg-[var(--text1)]/90">STORE</p></button>
      </div>
    </div>
  )

    return (
        <div className="bg-[var(--fondo)] relative">
      
      <div className="relative flex flex-col">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[url(../public/fondo-header.png)] blur-[10px] bg-top  bg-cover bg-center" />

        {/* Header 1*/}
        <div className="bg-[var(--fondo2)]/70 z-10 flex w-full xl:justify-center gap-[20%] text-[var(--text1)] font-bold text-[0.9rem] ">
          <div className="hidden xl:flex">
            <button className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">HOME</button>
            <button className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">FORUM</button>
            <button className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">STATS</button>
            <button className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">UPDATES</button>
          </div>
          <div className="hidden xl:flex">
            <button className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">WIKI</button>
            <button className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">SUPPORT</button>
            <button className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">MORE</button>
            <button><p className="p-1 pl-6 pr-6 font-bold cursor-pointer text-[var(--fondo)] rounded-full h-fit bg-[var(--text1)] hover:bg-[var(--text1)]/90">STORE</p></button>
          </div>
          {/* navigation button */}
          <button 
          onClick={() => {setMenuState(true)}}
          className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8 flex gap-2 items-center xl:hidden">
            <i className="fa-solid fa-bars"></i>
            <p>NAVIGATION</p>
          </button>
        </div>


        {/* Header 2*/}
        <div className="z-10 flex justify-center bg-[var(--fondo2)]/60 border-t-1 border-b-1 border-white/10 text-white w-full items-center">
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center md:items-end">
              <p className="text-[var(--text2)] font-bold">PLAY.TITANCRAFT.COM</p>
              <p className="text-[var(--text3)] font-bold text-[0.8rem] text-right">1920 jugadores online</p>
            </div>
            <div className="hidden md:flex">
              <i className="fa-solid fa-compass text-[1.5rem] text-[var(--text2)]"></i>
            </div>
          </div>
          <div className="hidden md:flex">
            <img src="../public/mini-logo.png" className="w-[10rem] -mt-15"></img>
          </div>
          <div className="flex text-[var(--text2)] gap-2 items-center hidden md:flex">
            <i className="fa-solid fa-people-group text-[1.5rem]"></i>
            <form>
              <input className='border-b-1 border-white/20' type="text" name="user_name" placeholder="Busca tu nombre"></input>
              <button type="submit" className="text-[var(--text3)] -ml-5 cursor-pointer hover:text-[var(--text2)]"><i className="fa-solid fa-arrow-right"></i></button>
            </form>
          </div>
        </div>

        <div className="z-10 bg-[var(--fondo2)]/60 justify-center xl:hidden flex p-2">
            <p className="text-[var(--text1)] text-[1.2rem] font-extrabold">TITAN<span className="text-white">CRAFT</span></p>
        </div>

        {/* Header 3 */}
        <div className="z-10 bg-[var(--fondo2)]/60 xl:bg-[var(--fondo2)]/40 flex xl:justify-center justify-between gap-2 md:gap-20 items-center xl:p-0 pl-5 pr-5 pb-10 xl:pb-0">

          <div className="hidden md:flex items-center gap-4 drop-shadow-[0_0_20px_gray]">
            <div className="hex w-23 h-21 flex justify-center bg-[#B3B3B3] items-center opacity-70">
              <div className="hex bg-gradient-to-r from-[#B3B3B3] to-[#4D4D4D] w-21 h-19 flex justify-center items-start">
                <img src="../public/steve.webp" className=" w-15 opacity-60 h-auto mt-2 filter grayscale"/>
              </div>
            </div>
            <div className="">
              <p className="text-white m-0 text-[17px] font-extrabold">COMPRANDO COMO <p className="text-[var(--text3)] m-0 opacity-70">INVITADO</p></p>
              <div className="flex gap-2 text-white justify-between text-[14px]">
                <button className="text-[var(--text3)] cursor-pointer hover:text-white"><i className="fa-solid fa-right-to-bracket" /> Registrarse</button>
                <p>$ EUR</p>
              </div>
            </div>
          </div>
            {/* Registrarse card responsive */}
          <button className="font-extrabold md:hidden flex z-10 bg-gradient-to-r from-[#CCAC00] flex justify-center items-center to-[#665600] text-[var(--text2)] text-xl border-5 border-[#CCAC00] cursor-pointer transition transform hover:scale-[0.98] p-2 w-[15rem] h-[4rem]">
            <h1 className="drop-shadow-[0_1px_3px_black]">REGISTRARSE</h1>
          </button>

          <div className="hidden xl:flex">
            <img src="../public/logo.png" className="w-[30rem] p-4"></img>
          </div>

          <button className="hex-big cursor-pointer group bg-gradient-to-r from-[#FF3333] to-black/40 w-80 h-23 hidden md:flex justify-center items-center box-shadow-[0_0_20px_blue]">
              <div className="relative hex-big bg-gradient-to-b from-black/40 to-[#FF0000] w-77 h-21 flex justify-start pl-10 items-center">
                <div className="text-white flex flex-col items-start">
                  <h1 className="font-extrabold text-[1.2rem]"><i className="fa-solid fa-cart-shopping text-[0.9rem]"></i>CARRITO</h1>
                  <p className="text-[var(--text3)] font-extrabold">0 items - 0.00 EUR</p>
                </div>
                <img src="../public/rubi.png" className="w-40 absolute ml-35 drop-shadow-[0_0_20px_red] transform transition duration-300 group-hover:scale-110"/>              
              </div>
          </button>

          {/* Carrito card responsive */}
          <button className="font-extrabold md:hidden flex z-10 bg-gradient-to-r from-[#660000] to-[#FF3333] text-[var(--text2)] text-xl border-5 border-[#FF3333] cursor-pointer transition transform hover:scale-[0.98] p-2 w-[15rem] h-[4rem] flex justify-center items-center">
            <h1 className="drop-shadow-[0_1px_3px_black]">CARRITO</h1>
          </button>

        </div>

      </div>
      {responsiveMenu}
    </div>
    )
}