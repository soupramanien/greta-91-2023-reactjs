import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([])
    const [status, setStatus] = useState("idle")
    useEffect(() => {
        setStatus("loading")
        fetch(url)
            .then((res) => {
                console.log(res);
                if (res.ok) {
                    return res.json();//conversion entre json et obj JS
                }
                else {
                    throw new Error("Fetch error")
                }
            })
            .then((data) => {
                setStatus("success")
                setData(data)
                // setTimeout(() => {
                //     setStatus("success")
                //     setData(data)
                // }, 5000)
            })
            .catch((error) => {
                console.log(error);
                setStatus("error")
            })
    }, []);
    return {data, setData, status}
}