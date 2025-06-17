import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/Login/Login';
import PrivateRoute from './PrivateRoute.jsx';
import PageStore from '../pages/PageStore/PageStore.jsx';

const MyRoutes = () =>{ 
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home_stores" element={<PrivateRoute> <Home /></PrivateRoute>} />
            <Route path="/stores/:id" element={<PageStore/>} />  
        </Routes>
    </div>
  );

}

export default MyRoutes;