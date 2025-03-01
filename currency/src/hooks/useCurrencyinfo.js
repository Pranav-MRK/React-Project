// import {useEffect,useState} from "react"

// function useCurrencyInfo(currency){
//     const [data,setData] = useState({});
//     // here used this usestate hook and empty bracaket  because if it doesnot return any any thing then it should not crash
//     useEffect(()=> {
//         fetch(`https://v6.exchangerate-api.com/v6/34d12e288a72a3171dafe998/latest/${currency}`)

//         .then((res)=>res.json())
//         .then((res)=>setData(res))
//         console.log(data);
//     },[currency])
//     console.log(data);
//     return data;
// }
// export default useCurrencyInfo;

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return; // Prevent fetching if no currency is provided

        fetch(`https://v6.exchangerate-api.com/v6/34d12e288a72a3171dafe998/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.conversion_rates); // Store all conversion rates
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });
    }, [currency]);

    // Log data only when it changes
    useEffect(() => {
        console.log("Updated currency data:", data);
    }, [data]);

    return data;
}

export default useCurrencyInfo;



