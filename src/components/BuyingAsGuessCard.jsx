import { useEffect, useState } from "react";
import { useLogin } from "../context/LoginContext"

export default function BuyingAsGuessCard() {

    const { openLogin, username, isLoged, logout } = useLogin();
    const [userImg, setUserImg] = useState(null)
    console.log(isLoged);

    useEffect(() => {
        if (isLoged) {
            setUserImg(`https://mineskin.eu/body/${username}/100.png`);
        } else {
            setUserImg('../../public/steve.webp');
        }
    }, [isLoged])

    return (
        <div className={`hidden md:flex items-center gap-4 ${isLoged ? 'drop-shadow-[0_0_1px_#7FFF00]' : 'drop-shadow-[0_0_20px_gray]'}`}>
          <div className={`hex w-23 h-21 flex justify-center ${isLoged ? 'bg-[#C8E0D0]' : 'bg-[#B3B3B3]'} items-center opacity-70`}>
            <div className={`hex bg-gradient-to-r ${isLoged ? 'from-[#81C784] to-[#1E7A5F]' : 'from-[#B3B3B3] to-[#4D4D4D]'} w-21 h-19 flex justify-center items-start`}>
              <img src={userImg} className={`w-15 filter ${ isLoged ? 'opacity-100' : 'opacity-60 grayscale'} h-auto mt-2`} />
            </div>
          </div>
          <div className="">
            <p className="text-white m-0 text-[17px] font-extrabold flex flex-col">COMPRANDO COMO <span className={`${isLoged ? 'text-green-400' : 'text-[var(--text3)]'} m-0 opacity-70`}>{isLoged ? username : 'INVITADO'}</span></p>
            <div className="flex gap-2 text-white justify-between text-[14px]">
              <button onClick={isLoged ? logout : openLogin} 
              className="text-[var(--text3)] cursor-pointer hover:text-white"><i className="fa-solid fa-right-to-bracket" />{isLoged ? 'Cerrar Sesion' : 'Iniciar Sesion'}</button>
              <p>$ EUR</p>
            </div>
          </div>
        </div>
    )
}