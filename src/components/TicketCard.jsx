import { useState, useEffect } from "react";
import { useLogin } from "../context/LoginContext";

export default function TicketCard() {

    // UseState del menu de categoria
    const [categoryButton, setCategoryButton] = useState('Categoría');
    const [openCategory, setOpenCategory] = useState(false);
    const [categoryError, setCategoryError] = useState(false)

    const { username, setIsTicketOpen, isTicketOpen } = useLogin();

    async function createTicket(event) {
        event.preventDefault();
        // Variables del form
        const email = event.target.email.value;
        const title = event.target.title.value;
        const report = event.target.report.value;
        
        //fecha
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDay();
        const mesFormato = String(month).padStart(2, '0');
        const diaFormato = String(day).padStart(2, '0');

        const formatedDate = `${year}-${mesFormato}-${diaFormato}`; // Variable de la fecha

        if (categoryButton == 'Categoría') { // Si no hay categoria seleccionada
            setCategoryError(true);
            return null
        }

        const res = await fetch('http://127.0.0.1:5000/ticket', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                title: title,
                report: report,
                email: email,
                fecha: formatedDate,
                category: categoryButton
            })
        })
        if (res.ok) {
            alert(`Ticket de ${categoryButton} creado correctamente, se le enviara la respuesta por correo.`);
            setIsTicketOpen(false);
        }
    }

    useEffect(() => {
        if (isTicketOpen) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      }, [isTicketOpen]);

    if(!isTicketOpen){
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/80 z-10 text-sm">
            <div className="w-[500px] text-[var(--text2)] bg-[var(--fondo3)] border-2 border-white/10 p-5">
                
                <h1 className='w-full flex justify-center pb-5 text-2xl font-extrabold text-[var(--text1)]'>Ticket De Soporte</h1>

                <form className="flex flex-col w-full gap-5" onSubmit={createTicket}>
                    <div className="flex w-full gap-2 justify-center text-end items-center">
                        <label for='email' className="text-xl text-[var(--text1)]"><i className="fa-solid fa-envelope"></i></label>
                        <input type="email" name="email" id="email" placeholder={`Email`} required
                        className="border-white/10 p-2 border-1 bg-black rounded-lg w-full"></input>
                    </div> 

                    <div className="flex gap-2 justify-center items-center">
                        <label for='title' className="text-xl text-[var(--text1)]"><i className="fa-solid fa-comment"></i></label>
                        <input type='text' id="title" name="title" placeholder="Asunto" required
                        className="border-white/10 p-2 border-1 bg-black rounded-lg w-full"></input>
                    </div>

                    <div className="flex justify-between w-full font-extrabold text-[var(--text1)]">
                        <label for='category' className={`${categoryError ? 'text-red-400' : 'text-[var(--text1)]'}`}>{categoryError ? '*Seleccionar categoría' : 'Seleccionar categoría'}</label>
                        <div id="category" className="relative flex flex-col items-start">
                            <button type="button" 
                            onClick={() => {setOpenCategory(!openCategory)}}
                            className="cursor-pointer bg-[var(--fondo4)] flex justify-between items-center w-35 rounded-md p-5 pt-2 pb-2"
                            >{categoryButton}
                            <i className={`fa-solid ${openCategory ? 'fa-caret-up' : 'fa-caret-down'}`}></i></button>

                            <div className={`${openCategory ? 'flex' : 'hidden' } absolute flex-col items-center bg-black border-1 border-white/10 rounded-md mt-10`}>
                                {['Ayuda', 'Reporte', 'Compra', 'Web','Bug'].map((e, index) => (
                                    <div className="w-full flex flex-col" key={index}>
                                        <button type="button" className="pr-10 pl-10 p-3 cursor-pointer hover:bg-[var(--fondo3)]"
                                        onClick={() => {setCategoryButton(e); setOpenCategory(!openCategory); setCategoryError(false)}}>{e}</button>
                                        <hr className="text-white/10 "/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <textarea type="text" id="report" name="report" placeholder="Escriba el problema aqui" required
                    className="border-white/10 p-2 border-1 bg-black rounded-lg w-full h-60"
                    ></textarea>

                    <div className="flex justify-between font-extrabold">
                        <button
                        onClick={() => {setIsTicketOpen(false)}}
                        type='button' className="p-2 w-30 rounded-lg bg-[var(--fondo4)] cursor-pointer">Cancelar</button>

                        <button type="submit" className="p-2 w-30 rounded-lg bg-[var(--text1)] text-black cursor-pointer">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}