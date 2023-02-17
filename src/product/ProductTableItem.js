export default function ProductTableItem(props){
    const handleDelete = ()=>{
        props.deleteProduct(props.product.id);
    }
    return (
        <tr>
            <td>{props.product.id}</td>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>
                <button 
                    className="btn btn-danger"
                    onClick={handleDelete}>Supprimer</button>
            </td>
        </tr>
    )
}