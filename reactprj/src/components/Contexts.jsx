import {useState, useEffect, useContext, useRef, createContext} from 'react';
import { Link } from 'react-router-dom';


const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
  const { user, setUser } = useContext(UserContext);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleUpdate() {
    setUser(input);
    setInput("");
  }

  return (
    <>
      <h2>{`Hello ${user} again!`}</h2>
      <input
        type="text"
        placeholder="Change user name"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleUpdate} disabled={!input.trim()}>
        Update Name
      </button>
      <br /><br />
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </>
  );
}

export default function ContextDemo() {
  return <Component1 />;
}


