import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import MessageInput from './components/layout/MessageInput';
import Navbar from './components/layout/Navbar';
import ChatWindow from './components/layout/ChatWindow';
import Dashboard from './components/layout/Dashboard';




function App() {
  

  return (
    <>
    <Navbar/>
    {/* <Signup/> */}
    {/* <Login/> */}
    {/* <ChatWindow/> */}
    {/* <MessageInput/> */}
    <Routes>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Dashboard/>} />
    </Routes>
    </>
  );
}

export default App;
