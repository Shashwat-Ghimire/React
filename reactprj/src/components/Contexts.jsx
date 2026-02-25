import {useState, useEffect, useContext, useRef, createContext} from 'react';
import { Link } from 'react-router-dom';


const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h3>Component 2</h3>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);

  return (
    <>
    
      
      <h2>{`Hello ${user} again!`}</h2>
      <Link to="/">
      <button>Go to Home</button>
    </Link>
    </>
  );
}

export default Component1;
