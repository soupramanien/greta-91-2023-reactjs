import ProductTableItem from "./ProductTableItem"

export default function ProductTable(props) {
    if (props.products.length === 0) {
        return <p>La liste est vide !</p>
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product)=> <ProductTableItem 
                                                    key={product.id}
                                                    product={product}/>)}
            </tbody>
        </table>
    )
}