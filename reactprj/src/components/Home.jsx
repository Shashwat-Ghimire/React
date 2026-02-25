import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-bg-container">
      <div className="home-content">
        <h1>Welcome to the Home Page</h1>
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
      </div>
    </div>
  );
}

export default Home;