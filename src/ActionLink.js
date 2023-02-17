export default function ActionLink(props){
    function handleClick(event) {
        // event.preventDefault()
        alert("le lien a été cliqué")
    }
    return (
        <a href="#" onClick={handleClick}>Lien</a>
    )
}