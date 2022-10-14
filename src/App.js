import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateTest from './pages/CreateTest/CreateTest';
import Home from './pages/Home/Home';
import Navbar from './SharedComponent/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QuestionStoreProvider } from './State/StateProvider';
import Test from './pages/Test/Test';
import Login from './pages/Login/Login';
import RequireAuth from './SharedComponent/RequireAuth';

function App() {
  return (
    <QuestionStoreProvider>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-white'>
        <div className='min-h-screen'>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-test" element={<RequireAuth>
              <CreateTest />
            </RequireAuth>} />
            <Route path="/test" element={<RequireAuth>
              <Test />
            </RequireAuth>} />
          </Routes>

          <ToastContainer />
        </div>
      </div>
    </QuestionStoreProvider>
  );
}

export default App;
