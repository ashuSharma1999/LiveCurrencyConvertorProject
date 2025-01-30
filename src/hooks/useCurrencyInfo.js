import { useState, useEffect } from "react";

export default function useCurrencyInfo(currency) {
    const [currencyData, setCurrencyData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                console.log("API Response:", res);
                if (res[currency]) {
                    setCurrencyData(res[currency]);
                } else {
                    console.error("Currency data not found in response");
                }
            })
            .catch((error) => console.error("Fetch error:", error));
    }, [currency]);

    return currencyData;
}
