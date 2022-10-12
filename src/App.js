import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateTest from './pages/CreateTest/CreateTest';
import Home from './pages/Home/Home';
import Navbar from './SharedComponent/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QuestionStoreProvider } from './State/StateProvider';
import Test from './pages/Test/Test';

function App() {
  return (
    <QuestionStoreProvider>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-white'>
        <div className='px-2 min-h-screen'>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create-test" element={<CreateTest />} />
            <Route path="/test" element={<Test />} />
          </Routes>

          <ToastContainer />
        </div>
      </div>
    </QuestionStoreProvider>
  );
}

export default App;
