import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Person from './Person';
import Clock from './Clock';
import { useEffect, useState } from 'react';
import ActionLink from './ActionLink';
import Toggle from './Toggle';
import MailBox from './MailBox';
import NumberList from './NumberList';
import ProductDisplay from './product/ProductDisplay';
import Posts from './Posts';
import Login from './auth/Login';

let user = {
  firstname: "Kylian",
  lastname: "Mbappé",
}
let user2 = {
  firstname: "toto",
  lastname: "titi",
}
function getRandom(max) {
  let num = Math.random();
  return Math.ceil(num * max);
}
function App() {
  const [num, setNum] = useState(1)
  const tempUser = JSON.parse(localStorage.getItem("user"))
  const [user, setUser] = useState(tempUser)
  useEffect(() => {
    //componentDidMount
    const timerId = setInterval(() => setNum(getRandom(2)), 2000);
    //componentWillUnmount
    return () => clearInterval(timerId)
  }, [])
  let clock = null;
  if (num === 1) {
    clock = <Clock />;
  }
  return (
    <div className="container App">
      {/* {user ? 
        <ProductDisplay setUser={setUser} user={user}/> : 
        <Login setUser={setUser}/>} */}

      <Posts />

      {/* <NumberList numbers={[1,2,3,4,4]}/>
      <MailBox nbMsg={0}/>
      <MailBox nbMsg={1}/>
      <Toggle/>
      <ActionLink/> */}
      {/* {(num == 1) ? <Clock /> : null } */}
      {/* {clock}
      
      <Greeting user={user}>
        <p>test</p>
        <article>article</article>
      </Greeting>
      <Greeting user={user2}/>
      <Greeting user={{firstname:'toto', lastname:'titi'}}/>
      <Person nom="toto" age={24}/>
      <Person age={24}/>
      <Person age={"hjkh"}/>
      <Person/> */}
    </div>
  );
}

export default App;
