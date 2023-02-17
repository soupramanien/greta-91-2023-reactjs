import { useEffect, useState } from "react";
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
    return (
        <div>
            {showForm ? 
                <p>formulaire</p> : 
                <ProductTable 
                    products={products} 
                    deleteProduct={deleteProduct}/>
            }
        </div>
    )
}
export default ProductDisplay;