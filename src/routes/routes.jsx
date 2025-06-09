import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/Login/Login';
import PrivateRoute from './PrivateRoute.jsx';

const MyRoutes = () =>{ 
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home_stores" element={<PrivateRoute> <Home /></PrivateRoute>} />
            <Route path="/stores/:id" element={<h1>Contact Page</h1>} />  
        </Routes>
    </div>
  );

}

export default MyRoutes;