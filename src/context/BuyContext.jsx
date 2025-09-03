import { createContext, useContext, useState } from "react";
import { useLogin } from "./LoginContext";

const BuyContext = createContext();

export function BuyProvider({ children }) {

    const { username, isLoged } = useLogin();

    async function buyNow(productName) {
        const response = await fetch('http://127.0.0.1:5000/buy', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'productName': productName
            })
        })
    }

    return (
        <BuyContext.Provider value={{buyNow}}>
            {children}
        </BuyContext.Provider>
    )
}

export const useBuy = () => useContext(BuyContext);