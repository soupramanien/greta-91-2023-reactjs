import { useEffect, useState } from "react"

export default function Posts(props) {
    const [data, setData] = useState([])
    const [status, setStatus] = useState("idle")
    // const tab = useState([])
    // const data = tab[0];//[]
    // const setData = tab[1];
    useEffect(() => {
        setStatus("loading")
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);
                // console.log(res.body);
                if (res.ok) {
                    return res.json();//conversion entre json et obj JS
                }
                else {
                    setStatus("error")
                    throw new Error("Fetch error")
                }
            })
            .then((data) => {
                setTimeout(() => {
                    setStatus("success")
                    setData(data)
                }, 5000)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    if (status === "error") {
        return <p className="text-danger">Echec de récupération de données !</p>
    }
    if (status !== "success") {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    if (data.length > 0) {
        return (
            <ul>
                {data.map((post) => <li key={post.id}>{post.body}</li>)}
            </ul>
        )
    }
    else {
        return <p>la liste est vide</p>
    }
}