import { useState } from "react";

export default function ProductForm(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const handleChange = (event)=>{
        switch (event.target.name) {//"name"|"price"
            case "name":
                setName(event.target.value)
                break;
            case "price":
                setPrice(event.target.value)
                break;
            default:
                break;
        }
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const product = {
            name: name,
            price: price
        }
        props.addProduct(product)
    }
    return (
        <form>
            <div>
                <label htmlFor="name">Nom</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    name="name" 
                    onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="price">Prix</label>
                <input 
                    type="number" 
                    id="price" 
                    value={price} 
                    name="price"
                    step="0.01"
                    onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleSubmit}>Envoyer</button>
            </div>
        </form>
    )
}