import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useFetch from "../hooks/useFetch";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

function ProductDisplay(props){
    // const {data:products, setData:setProducts, status} = useFetch("http://localhost:7070/products")
    const [showForm, setShowForm] = useState(false);
    const [products, setProducts] = useState([]);
    //componentDidMount
    useEffect(() => {
        // setProducts([
        //     {id: 1000, name: 'prod1', price: 10.15},
        //     {id: 1001, name: 'prod2', price: 20.15},
        //     {id: 1002, name: 'prod3', price: 30.15},
        // ])
        //récupérer les données du serveur localhost:7070
        fetch("http://localhost:7070/products")
            .then((res) => {
                console.log(res);
                // console.log(res.body);
                if (res.ok) {
                    return res.json();//conversion entre json et obj JS
                }
                else {
                    throw new Error("Fetch error")
                }
            })
            .then((data) => {
                setProducts(data)
                // setTimeout(() => {
                //     // setStatus("success")
                //     setProducts(data)
                // }, 5000)
            })
            .catch((error) => {
                console.log(error);
                // setStatus("error")
            })
    }, []);

    const deleteProduct = (id)=>{//1002
        console.log("deleteProduct");
        console.log("product id : "+id);
        // const newProducts = products.filter((prod)=> {return prod.id !== id})
        //envoyer une requete HTTP DELETE pour supprimer le produit
        fetch(`http://localhost:7070/products/${id}`, {method: 'delete'})
            .then((res)=>{
                console.log(res);
                setProducts(()=> products.filter((prod)=> prod.id !== id))
                return res.json();
            })
            .then((data)=>{
                console.log(data);
            }); 
    }
    const toggleShowForm = function(){
        setShowForm((oldShowForm)=> !oldShowForm)
    }
    const addProduct = (product)=>{
        let headers = new Headers();
        headers.set('content-type','Application/json')
        fetch(`http://localhost:7070/products`, 
            {
                method: 'post', 
                headers:headers,
                body:JSON.stringify(product) //JS -> JSON (serialisation)
            }
        ).then((res)=>{
                console.log(res);
                if (res.ok) {
                    return res.json();
                }
                else throw new Error();
            })
            .then((product)=>{
                console.log(product);
                setProducts(()=> [...products, product])
                setShowForm(false)
            })
            .catch((error)=> console.log(error));
        // product.id = uuidv4();
        // const newProducts = products.concat(product)
        // const newProducts = [...products, product]
        // setProducts(newProducts)
        // setShowForm(false)
    }
    return (
        <div>
            <div>
                <button onClick={toggleShowForm} className="btn btn-primary">
                    {showForm ? "Lister produits" : "Ajouter produit"}
                </button>
            </div>
            {showForm ? 
                <ProductForm addProduct={addProduct}/> : 
                <ProductTable 
                    products={products} 
                    deleteProduct={deleteProduct}/>
            }
        </div>
    )
}
export default ProductDisplay;