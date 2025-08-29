import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext";
import { useLogin } from "../context/LoginContext";

export default function Cart() {

    const { isCartOpen, closeCart, productList, deleteCartProduct, items, totalPrice } = useCart();
    const { username } = useLogin();

    // Overflow hidden al fondo para evitar scroll
    useEffect(() => {
        if (isCartOpen) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
    }, [isCartOpen]);

    if (isCartOpen) {return (
        <div className="fixed h-screen w-screen bg-black/80 top-0 left-0 z-10 flex justify-end items-start">
            <button 
            onClick={closeCart}
            className="m-5 text-xl transition cursor-pointer hover:scale-[1.2]">
                <i className="fa-solid fa-xmark text-white"/>
            </button>
            <div className="top-0 right-0 z-10 bg-[var(--fondo3)] text-[var(--text2)]">
                <div className="flex items-center w-[30rem] p-5 justify-between font-extrabold bg-gradient-to-t from-[#FF3333] to-[#660000] overflow-hidden relative">
                    <div className="flex gap-2 flex-col">
                        <h1 className="flex items-center gap-2 text-2xl"><i className="fa-solid fa-cart-shopping" />TU CARRITO</h1>
                        <p className="text-white/70">{items} items - {totalPrice.toFixed(2)} EUR</p>
                    </div>
                    <div className=" w-30 h-30">
                        <img src="../../public/rubi.png" className="w-60 absolute -mt-10 -ml-5 drop-shadow-[0_0_10px_red]"></img>
                    </div>
                </div>

                <div className="flex justify-between p-3 bg-[var(--fondo2)]">
                    <h1>{username}</h1>
                    <button className="cursor-pointer font-bold">EUR<i className="fa-solid fa-angle-down" /></button>
                </div>

                <div className="bg-[var(--fondo3)] h-screen flex flex-col font-bold">
                    {productList.length == 0 ? null : (
                        productList.map((product, index) => (
                            <div key={index}>
                            <div className="flex items-center justify-between p-5">
                                <div className="flex items-center gap-5 ">
                                    <img className="w-25" src={product[3]}></img>
                                    <div>
                                        <p className="">{product[1]}</p>
                                        <h1 className="text-[var(--text1)]">{product[0]}</h1>
                                    </div>
                                </div>
                                <div>
                                    <h1>{product[2]} €</h1>
                                </div>
                                <button onClick={() => {deleteCartProduct(product[4])}}>
                                    <i className="fa-solid fa-xmark cursor-pointer text-white/70 hover:text-white" />
                                </button>
                            </div>
                            <hr className="text-white/10"></hr>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )} else {
        return null;
    }
}