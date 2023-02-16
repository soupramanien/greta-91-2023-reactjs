import {formatName} from './utils'
export default function Greeting(props)//props = {user: user}
{
    console.log(props);
    return <h1>Hello, {formatName(props.user)} !</h1>
}