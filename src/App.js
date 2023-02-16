import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

let user = {
  firstname: "Kylian",
  lastname: "Mbappé",
}
let user2 = {
  firstname: "toto",
  lastname: "titi",
}

function App() {
  return (
    <div className="App">
      <Greeting user={user}/>
      <Greeting user={user2}/>
      <Greeting user={{firstname:'toto', lastname:'titi'}}/>
    </div>
  );
}

export default App;
