
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


function Testing() {
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef(null);
  const renderCount = useRef(1);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    prevValue.current = inputVal;
  }, [inputVal]);

 

  return (
    <>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
      <p>Type here</p>
      <input
        type="text"
        ref={inputRef}
        value={inputVal}
        onChange={(x) => setInputVal(x.target.value)}
      />
      
      <h2>Current value: {inputVal}</h2>
      <h3>Previous value: {prevValue.current}</h3>
      <h3>Render count: {renderCount.current}</h3>
    
    </>
  );
}

export default Testing;