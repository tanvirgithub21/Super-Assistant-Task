import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateTest from './pages/CreateTest/CreateTest';
import Home from './pages/Home/Home';
import Navbar from './SharedComponent/Navbar/Navbar';

function App() {
  return (
    <div className='bg-gray-100'>
      <div className='px-2 min-h-screen'>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-test" element={<CreateTest />} />
        </Routes>


      </div>
    </div>
  );
}

export default App;
