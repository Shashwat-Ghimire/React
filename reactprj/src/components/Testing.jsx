
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Testing() {
  const [inputVal, setInputVal] = useState("");
  const inpck = useRef(0);

  useEffect(() => {
    inpck.current = inputVal.length;
  });

  return (
    <>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
      <p>Type here</p>
      <input
        type="text"
        value={inputVal}
        onChange={(x) => setInputVal(x.target.value)}
      />
      <h1>
        Render num : {inpck.current}
      </h1>
    </>
  );
}

export default Testing;