
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </div>
  );
}

export default App;
