export default function SuportCard() {
    return (
        <div className="text-white flex flex-col bg-[var(--fondo3)] border-2 border-white/20 max-w-100">
            <div className="bg-white/5 text-xl font-extrabold text-[var(--text1)] p-6">
                <h1>Soporte / Preguntas</h1>
            </div>
            <div className="flex flex-col p-4 gap-5">
                <div className="flex text-green-400 font-bold items-center justify-between">
                    <div className="flex gap-5">
                        <i className="fa-solid fa-ticket text-green text-3xl"></i>
                        <div>
                            <h1 className="text-md">Ticket de soporte</h1>
                            <p className="text-sm text-[var(--text3)]/60">31,098 Resueltos</p>
                        </div>
                    </div>
                    <button className="bg-white/7 rounded-full pl-4 pr-4 p-1 cursor-pointer">CREAR</button>
                </div>
                <div className="flex text-blue-400 font-bold items-center justify-between">
                    <div className="flex gap-5">
                        <i className="fa-brands fa-discord text-3xl text-blue"></i>
                        <div>
                            <h1 className="text-md">Canal de Discord</h1>
                            <p className="text-sm text-[var(--text3)]/60">12765 personas online</p>
                        </div>
                    </div>
                    <button className="bg-white/7 rounded-full pl-3 pr-3 p-1 cursor-pointer">UNIRSE</button>
                </div>
            </div>
        </div>
    )
}