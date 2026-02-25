import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

DataTable.use(DT);

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);


  useEffect(() => {
    setCalc(count * 2);
  }, [count]);


  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(res => setData(res.data))
      .catch(() => alert('Failed to load photos'))
      .finally(() => setLoading(false));
  }, []);

  const columns = [
    { title: 'Album ID', data: 'albumId' },
    { title: 'ID', data: 'id' },
    { title: 'Title', data: 'title' },
    { title: 'URL', data: 'url' },
    { title: 'Thumbnail URL', data: 'thumbnailUrl' }
  ];




  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  return (
    <>

    
    <br />
    <p>Count: {count}</p>
    <br />
    <p>Calc: {calc}</p>
    <br />
    <button onClick={() => setCount(count + 1)}>Increment + </button>
    <br />

    <Link to="/testing">
      <button>Go to Testing</button>
    </Link>
    <Link to="/contexts">
      <button>Go to Contexts</button>
    </Link>
    <Link to="/form">
      <button>Go to Form</button>
    </Link>
    <Link to="/home">
        <button>Go to Home</button>
    </Link>

    <div className="container py-5">
      <h2 className="text-center mb-4">Photos Directory</h2>

      <DataTable
        data={data}
        columns={columns}
        className="table table-striped table-bordered"
        options={{
          pageLength: 10,
          lengthMenu: [5, 10, 25, 50, 100],
          language: {
            search: "Filter:",
            lengthMenu: "Show _MENU_ entries"
          }
        }}
      />
    </div>
    </>
  );
  
}

export default Home;