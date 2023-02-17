import {formatName} from './utils'
/**
 * 
 * @param {
 *      user: user,
 *      children: <p>test</p>
 * } props 
 * @returns 
 */
export default function Greeting(props)//props = {user: user}
{
    // console.log(props);
    return (
        <div>
            <h1>Hello, {formatName(props.user)} !</h1>
            {props.children}
        </div>
    )
}