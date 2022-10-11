import './App.css';
import Home from './pages/Home/Home';
import Navbar from './SharedComponent/Navbar/Navbar';

function App() {
  return (
    <div className='bg-gray-100'>
      <div className='px-2 min-h-screen'>
        <Navbar />
        <Home />
      </div></div>
  );
}

export default App;
