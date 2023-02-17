export default function NumberList(props) {
    // props.numbers = [1,2,3,4,5]
    const lis = props.numbers.map(function(number, index) {
        return <li key={index}>{number}</li>
    })
    //lis = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>]
    return (
        <ul>{lis}</ul>
    ) 
}