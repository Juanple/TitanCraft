export default function PaymentInfo() {
    return (
        <div className="bg-[var(--fondo3)] w-full border-2 border-white/20">
            <div className="bg-white/5 p-6 font-extrabold">
                <h1 className="text-xl text-[var(--text1)]">Pagos aceptados</h1>
            </div> 
            <div className="filter grayscale p-6 flex flex-wrap justify-center gap-4">
                <img className='w-[8rem]' src="../../public/paypal.webp"></img>
                <img className='w-[8rem]' src="../../public/stripe.png"></img>
                <img className='w-[8rem]' src="../../public/visa.webp"></img>
            </div>
        </div>
    )
}