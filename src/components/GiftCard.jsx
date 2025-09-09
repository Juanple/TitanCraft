import { useState } from "react";
import { useLogin } from "../context/LoginContext"

export default function GiftCard() {

    const { username } = useLogin();
    const [ alert, setAlert ] = useState(null);

    async function reclamarGift() {
        const res = await fetch('http://127.0.0.1:5000/gift', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'giftName': 'registro',
                'command': `give ${username} 2000`
            })
        })

        const data = await res.json();

        if(!data.reclamado) {
            setAlert(<p className="text-red-500">*Ya lo has reclamado</p>);
        } else if (data.reclamado) { setAlert(<p className="text-green-500">Reclamado</p>); }
    }

    return (
        <div className="w-full justify-start md:justify-center text-white flex bg-[var(--text1)] bg-[url(../../public/fondo-gift.jpeg)] bg-center bg-cover relative overflow-hidden group">
            <div className="absolute -top-10 -left-60 z-10 opacity-[0.4] h-[20rem] w-50 bg-white transition duration-500 transform group-hover:translate-x-[2000px] rotate-20" />
            <div className="w-60 md:w-full font-extrabold p-5 flex flex-col gap-5 justify-start">
                <h1 className="w-fit text-3xl md:text-4xl">2000$ GRATIS</h1>
                <p>Obtén 2000 monedas gratis por registrarte en la web</p>
                {alert}
                <button 
                onClick={() => {reclamarGift()}}
                className="w-fit p-2 pl-5 pr-5 border-2 border-black rounded-3xl text-black cursor-pointer text-lg transition duration-400 hover:bg-[var(--fondo)] hover:text-[var(--text1)]">Reclamar</button>
            </div>

            <div>
                <img src="../../public/pila-dinero.png" className="absolute w-90 md:w-200 top-10 md:top-0 -right-20 md:right-0 md:relative" />
            </div>

        </div>
    )
}