import { useEffect, useState } from "react";
import InfoListCard from "../components/InfoListCard";
import ProductCard from "../components/ProductCard";
import TimeEvent from "../components/TimeEvent";
import GiftCard from "../components/GiftCard";

export default function Dinero() {

    const [productList, setProductList] = useState(['','','','','','']);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/product/dinero',{
            method: 'GET'
        }).then(res => res.json())
        .then(data => {
            setProductList(data['response']);
        })
    },[])


    const infoList = [
        {'title':'1 Semana de VIP', 'description':'Elevate your ManaCube experience with a new Rank! These ranks are kept forever, and help fund the networks operations'},
        {'title':'1 Mes de VIP', 'description':'Purchasing a rank for any realm on ManaCube also extends it to the Website, Discord, Hub & Festival servers!'},
        {'title':'1 Mes de VIP + 100,000 $','description':'Click the image to see a list of perks, kits & new commands you unlock with each rank. This can also be viewed in-game with the /perks command. Our ranks our fully EULA compliant'},
        {'title':'1 Año de VIP','description' : 'Any amounts previously spent on ranks will automatically be accounted for, reducing the price of all rank packages.'}
    ]

    return (
        <div className="">

            <main className="mt-[2rem] w-full flex justify-center">
                <div className="w-full xl:w-[1300px] flex flex-col xl:flex-row gap-5 p-5">
                    
                    <div className="xl:w-[70%] flex flex-col gap-5">

                        <div>
                            <TimeEvent targetDate={'2025-09-29T00:00:00'} title_yellow={'10%'} title_white={'DESCUENTO'} description={'10% Descuento en todas las compras!'} img={'../../public/monedas.png'}/>
                        </div>

                        <GiftCard />

                        <div className="flex flex-col gap-5">
                            {productList.map((product, index) => (
                                <ProductCard key={index} img={product[0]} title={product[1]} description={product[2]} price={product[3]} discount={product[4]} color={product[5]}/>
                            ))}
                        </div>

                    </div>
                    
                    <div className="xl:w-[30%]">
                        <InfoListCard title={'PACKS DE DINERO'} list={infoList}/>
                    </div>

                </div>
            </main>
        </div>
    )

}