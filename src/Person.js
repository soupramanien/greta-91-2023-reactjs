import propTypes from 'prop-types'
/**
 * 
 * @param {nom: string, age:number} props 
 */
export default function Person(props){
    return (
        <div>
            <p>Nom: {props.nom}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}
Person.defaultProps = {
    nom: "inconnu"
}
Person.propTypes = {
    nom: propTypes.string,
    age: propTypes.number.isRequired
}