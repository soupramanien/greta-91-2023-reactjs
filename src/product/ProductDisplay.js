import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

function ProductDisplay(props){
    const [showForm, setShowForm] = useState(false);
    const [products, setProducts] = useState([]);
    //componentDidMount
    useEffect(() => {
        setProducts([
            {id: 1000, name: 'prod1', price: 10.15},
            {id: 1001, name: 'prod2', price: 20.15},
            {id: 1002, name: 'prod3', price: 30.15},
        ])
    }, []);

    const deleteProduct = (id)=>{//1002
        console.log("deleteProduct");
        console.log("product id : "+id);
        // const newProducts = products.filter((prod)=> {return prod.id !== id})
        const newProducts = products.filter((prod)=> prod.id !== id)
        setProducts(newProducts)
    }
    const toggleShowForm = function(){
        setShowForm((oldShowForm)=> !oldShowForm)
    }
    const addProduct = (product)=>{
        product.id = uuidv4();
        const newProducts = products.concat(product)
        // const newProducts = [...products, product]
        setProducts(newProducts)
        setShowForm(false)
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