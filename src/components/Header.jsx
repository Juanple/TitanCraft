import { useEffect, useState } from "react";
import BuyingAsGuessCard from "./BuyingAsGuessCard";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";


export default function Header() {
    
    const [menuState, setMenuState] = useState(false);
    const { openCart, items, totalPrice } = useCart();
    const [update, setUpdate] = useState(false);
    const navigate = useNavigate();
    const { setIsTicketOpen } = useLogin();

    useEffect(() => {
      setUpdate(!update);
    },[items])

    const responsiveMenu = (
    <div className={`absolute transition-all duration-500 ${menuState ? 'left-0 opacity-100' : 'left-[-20rem] opacity-0'} xl:hidden z-20 top-0 bg-[var(--fondo)] text-[var(--text2)] w-[20rem] h-screen font-bold`}>
      <div className="flex bg-[var(--fondo2)] justify-between p-4 pt-8 pb-8">
        <p>Menu</p>
        <button
        onClick={() => {setMenuState(false)}}
        ><i className="fa-solid fa-xmark text-[1.3rem] transition cursor-pointer hover:scale-[1.2]"></i></button>
      </div>

      <div className="flex flex-col text-[var(--text1)]">
        <button 
        onClick={() => {navigate('/')}}
        className="cursor-pointer flex justify-start p-4 hover:bg-white/8">HOME</button>
        <button 
        onClick={() => {navigate('/nosotros')}}
        className="cursor-pointer flex justify-start p-4 hover:bg-white/8">NOSOTROS</button>
        <button className="cursor-pointer flex justify-start p-4 hover:bg-white/8">RANKING</button>
        <button 
        onClick={() => {setIsTicketOpen(true)}}
        className="cursor-pointer flex justify-start p-4 hover:bg-white/8">SOPORTE</button>
        <button 
        onClick={() => {openCart(); setMenuState(false)}}
        className="cursor-pointer flex justify-start p-4 hover:bg-white/8">CARRITO</button>
        <button 
        className="cursor-pointer flex justify-start p-4"><p className="p-1 pl-6 pr-6 font-bold cursor-pointer w-fit text-[var(--fondo)] rounded-full h-fit bg-[var(--text1)] hover:bg-[var(--text1)]/90">PERFIL</p></button>
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
            <button 
            onClick={() => {navigate('/')}}
            className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">HOME</button>
            <button 
            onClick={() => {navigate('/nosotros')}}
            className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">NOSOTROS</button>
            <button className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">RANKING</button>
          </div>
          <div className="hidden xl:flex">
            <button 
            onClick={() => {setIsTicketOpen(true)}}
            className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">SOPORTE</button>
            <button 
            onClick={openCart}
            className="cursor-pointer hover:bg-white/8 pt-4 pb-4 pl-8 pr-8">CARRITO</button>
            <button
            ><p className="p-1 pl-6 pr-6 font-bold cursor-pointer text-[var(--fondo)] rounded-full h-fit bg-[var(--text1)] hover:bg-[var(--text1)]/90">
              <i className="fa-solid fa-user"/>PERFIL</p></button>
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

        <div className="z-10 bg-[var(--fondo2)]/60 hidden justify-center xl:hidden md:flex p-2">
            <p className="text-[var(--text1)] text-[1.2rem] font-extrabold">TITAN<span className="text-white">CRAFT</span></p>
        </div>

        {/* Header 3 */}
        <div className="z-10 bg-[var(--fondo2)]/60 xl:bg-[var(--fondo2)]/40 xl:justify-center justify-between hidden md:flex gap-20 items-center xl:p-0 pl-5 pr-5 pb-10 xl:pb-0">

        <BuyingAsGuessCard />

          <div className="hidden xl:flex">
            <img src="../public/logo.png" className="w-[30rem] p-4"></img>
          </div>

          <button 
          onClick={openCart}
          className="hex-big cursor-pointer group bg-gradient-to-r from-[#FF3333] to-black/40 w-80 h-23 hidden md:flex justify-center items-center box-shadow-[0_0_20px_blue]">
              <div className="relative hex-big bg-gradient-to-b from-black/40 to-[#FF0000] w-77 h-21 flex justify-start pl-10 items-center">
                <div className="text-white flex flex-col items-start">
                  <h1 className="font-extrabold text-[1.2rem]"><i className="fa-solid fa-cart-shopping text-[0.9rem]"></i>CARRITO</h1>
                  <p className="text-[var(--text3)] font-extrabold">{items} items - {totalPrice.toFixed(2)} EUR</p>
                </div>
                <img src="../public/rubi.png" className="w-40 absolute ml-35 drop-shadow-[0_0_20px_red] transform transition duration-300 group-hover:scale-110"/>              
              </div>
          </button>

        </div>

      </div>
      {responsiveMenu}
    </div>
    )
}