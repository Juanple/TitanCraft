import { createContext, useContext, useState, useEffect } from "react";
import { useLogin } from "./LoginContext";

const CartContext = createContext()

export function CartProvider({ children }) {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const { isLoged, openLogin, username, setLoading } = useLogin();
    const [ items, setItems ] = useState(0);
    const [ totalPrice, setTotalPrice ] = useState(0.00);
    const [productList, setProductList] = useState((''));

    function openCart() { // Abrir el carrito
        if (!isLoged) {
            openLogin();
        } else {
            setIsCartOpen(true);
        }
    }

    function closeCart() { // Cerrar el carrito
        setIsCartOpen(false);
    }



    async function getCartInfo() { // Cargar los productos de la db
        setLoading(true);
        const response = await fetch(`http://127.0.0.1:5000/cart/${username}`, {
            method: 'GET'
        })
        const data = await response.json();
        setLoading(false);
        setProductList(data['productList']); // Actualizar la productList
    } 
    useEffect(() => { // Cada vez que se abra el carrito se actualiza el cart
        getCartInfo()
    }, [isCartOpen])

    // Actualizar los datos de items y totalPrice
    useEffect(() => {
        setItems(productList.length);// Actualizar los items

        let price = 0.00;
        for(let i=0; i<productList.length; i++){
            price += parseFloat(productList[i][2]); 
        }
        setTotalPrice(price); // Actualizar el precio total
    }, [productList])



    //Añadir al carrito
    async function addToCart(productName) {
        if (isLoged) {
            const response = await fetch('http://127.0.0.1:5000/cart', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({'productName': productName, 'userName': username})
            })
            getCartInfo(); 

        } else {
            openLogin();
        }
    }

    // Eliminar del carrito
    async function deleteCartProduct(idcart) {
        const response = await fetch(`http://127.0.0.1:5000/cart${idcart}`, {
            method: 'DELETE'
        })
        getCartInfo();
    }

    return (
        <CartContext.Provider value={{isCartOpen, openCart, closeCart, addToCart, totalPrice, items, productList, deleteCartProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);