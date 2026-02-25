import './App.css'


import Home from './components/Home'
import Testing from './components/Testing'
import Contexts from './components/Contexts'
import Form from './components/Form'
import Data from './components/Data'



import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom' 



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/contexts" element={<Contexts />} />
        <Route path="/form" element={<Form />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
