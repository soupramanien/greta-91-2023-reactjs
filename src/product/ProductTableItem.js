export default function ProductTableItem(props){
    return (
        <tr>
            <td>{props.product.id}</td>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>
                <button className="btn btn-danger">Supprimer</button>
            </td>
        </tr>
    )
}