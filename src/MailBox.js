export default function MailBox(props) {
    return (
        <div>
            <h2>Bonjour</h2>
            {props.nbMsg > 0 &&
                <p>vous avez {props.nbMsg} messages non lus</p>}
        </div>
    )
}