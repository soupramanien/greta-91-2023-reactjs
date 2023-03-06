import { useState } from "react"
import { BASE_URL } from "../consts/API"

export default function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleChange = (event)=>{
        if (event.target.placeholder === 'username') {
            setUsername(event.target.value)
        }
        else{
            setPassword(event.target.value)
        }
    }
    const handleLogin = async ()=>{
        const body = {
            username: username,
            password: password
        }
        // const body = {username,password}
        //création de headers
        const headers = new Headers()
        headers.set("Content-Type", "application/json")
        //envoi de requete
        const res = await fetch(BASE_URL + "/auth/login", 
            {
                method: 'POST', 
                headers: headers,
                body: JSON.stringify(body)
            })
        console.log(res);
        if(res.ok){
            const user = await res.json();
            //enregistrer token dans le stockage local
            localStorage.setItem("user", JSON.stringify(user))
            props.setUser(user)
        }
        else{
            alert("username ou password invalide!")
        }
    }
    return (
        <div>
            <input 
                type="text" 
                placeholder="username"
                onChange={handleChange}
                value={username}
            />
            <input 
                type="password" 
                placeholder="password"
                onChange={handleChange}
                value={password}
            />
            <button onClick={handleLogin}>Se connecter</button>
        </div>
    )
}