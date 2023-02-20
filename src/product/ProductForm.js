import { useState } from "react";

export default function ProductForm(props) {
    //contraintes
    //name :
    //doit contenir au moins 2 caracteres
    //ne doit pas contenir des caracteres suivants : %$@£
    const [name, setName] = useState("");
    //contraintes
    //price :
    //doit être un nombre
    //doit être superieur à 0.0
    const [price, setPrice] = useState("");
    const [nameMessage, setNameMessage] = useState("")
    const [priceMessage, setPriceMessage] = useState("")

    const handleChange = (event) => {
        let value = event.target.value;
        switch (event.target.name) {//"name"|"price"
            case "name":
                if (/^[^%$@£]*$/.test(value)) {
                    setName(value)
                    if (value.length < 2) {
                        setNameMessage("il manque " + (2 - value.length) + " caractere(s)");
                    }
                    else {
                        setNameMessage("");
                    }
                }
                break;
            case "price":
                // console.log(parseFloat(value));
                if (value === "0") {
                    setPrice(0)
                } else if (value === "") {
                    setPrice("")
                }
                value = parseFloat(value);//
                if (!isNaN(value) && value > 0) {
                    setPrice(value)
                    setPriceMessage("")
                }
                else {
                    setPriceMessage("prix n'est pas valide")
                }
                break;
            default:
                break;
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let error = false;
        if (!/^[^%$@£]{2,}$/.test(name)) {
            error = true
        }
        if (price <= 0) {
            error = true
        }
        if (error) {
            alert("les données ne sont pas valide !")
            return;
        }
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
                    onChange={handleChange} />
                {nameMessage.length > 0 &&
                    <p className="text-danger">{nameMessage}</p>
                }
            </div>
            <div>
                <label htmlFor="price">Prix</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    name="price"
                    step="0.01"
                    onChange={handleChange} />
                {priceMessage.length > 0 &&
                    <p className="text-danger">{priceMessage}</p>
                }
            </div>
            <div>
                <button onClick={handleSubmit}>Envoyer</button>
            </div>
        </form>
    )
}