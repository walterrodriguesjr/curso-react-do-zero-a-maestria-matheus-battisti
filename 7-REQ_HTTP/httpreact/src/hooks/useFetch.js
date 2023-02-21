import { useState, useEffect } from "react";

/* 4 - custom hook */
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    /* 5- refatorando post */
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    /* 6 - loading */
    const [loading, setLoading] = useState(false)

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        }

        fetchData();

    }, [url, callFetch]);

    /* 5- refatorando post */
    useEffect(() => {

        const httpRequest = async () => {

            /* 6 - loading */
            setLoading(true)

            if (method === 'POST') {
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                const json = await res.json();

                setCallFetch(json);

                setLoading(false)
            }
        };
        httpRequest();

    }, [config, method, url]);


    return { data, httpConfig, loading };

}

