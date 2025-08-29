import { useCart } from "../context/CartContext";

export default function ProductCard({img, title, description, price, discount, color}) {

    let resultPrice = price;

    if (discount != false) {
        resultPrice = price * (1 - discount / 100);
        resultPrice = Math.floor(resultPrice * 100) / 100; // Redondearlo para que solo queden 2 decimales
    }

    const { addToCart } = useCart();

    return (
        <div className="text-[var(--text2)] bg-[var(--fondo3)] p-10 flex flex-col lg:flex-row gap-10 border-2 border-white/20">
            <div className="flex flex-col items-center gap-1 min-w-fit">
                <div className="w-40 h-35 overflow-hidden">
                    <img src={img}></img>
                </div>
                <div className="bg-[var(--fondo4)] flex justify-center w-50 p-2 hex-big text-2xl font-extrabold">
                    <h1>{title}</h1>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-10">
                <p className="text-[var(--text4)] text-center sm:text-start">{description}</p>

                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="relative">
                        <h1 className="text-white font-bold text-xl">{resultPrice} €</h1>
                        <div className={`absolute top-[-14px] right-[-20px] bg-red-400/40 pl-2 pr-2 hex-big ${discount ? 'visible' : 'hidden'}`}>
                            <p className="text-red-400 font-bold text-[0.8rem] line-through decoration-2">{price}</p>
                        </div>
                    </div>

                    <div className="text-[var(--text2)] font-bold flex gap-5">
                        <button 
                        style={{ borderColor: color, '--before-bg': color }} 
                        className={`max-w-[13rem] sm:w-[13rem] p-2 border-l-4 bg-[var(--fondo4)] group relative overflow-hidden cursor-pointer flex gap-2 items-center justify-center active:scale-[0.9]
                        before:content-'' before:bg-[var(--before-bg)] before:w-full before:h-full before:top-0 before:left-[-13rem] before:transition before:duration-500 before:absolute 
                        hover:before:translate-x-[13rem]`}><i className="fa-solid fa-cube relative z-2 group-hover:rotate-960 transition duration-1000"></i><span className="relative z-2">Comprar Ahora</span></button>

                        <button 
                        style={{ borderColor: color, '--before-bg': color }} 
                        onClick={() => {addToCart(title)}}
                        className={`max-w-[13rem] sm:w-[13rem] p-2 border-l-4 bg-[var(--fondo4)] group relative overflow-hidden cursor-pointer flex gap-2 items-center justify-center active:scale-[0.9] 
                        before:content-'' before:bg-[var(--before-bg)] before:w-full before:h-full before:top-0 before:left-[-13rem] before:transition before:duration-500 before:absolute 
                        hover:before:translate-x-[13rem]`}><i className="fa-solid fa-cart-plus relative z-2 group-hover:translate-x-[-10px] transition duration-600"></i><span className="relative z-2">Añadir al carrito</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}