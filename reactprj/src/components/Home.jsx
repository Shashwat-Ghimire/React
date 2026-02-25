import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';



function Home() {
  return (
  <>
    <Link to="/data">
      <button>Go to Data</button>
    </Link>
    <Link to="/contexts">
      <button>Go to Contexts</button>
    </Link>
    <Link to="/form">
      <button>Go to Form</button>
    </Link>
    <Link to="/testing">
      <button>Go to Testing</button>
    </Link>
  </>
)
};

export default Home;