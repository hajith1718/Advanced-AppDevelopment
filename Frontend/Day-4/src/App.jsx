import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AdminDashBoard from './pages/AdminDashBoard';
import ManageListings from './pages/ManageListings';
import ManageBookings from './pages/ManageBookings';
import UserBookings from './pages/UserBookings';
import About from './pages/About';
import Contact from './pages/Contact';
import Analytics from './pages/Analytics';


const App = () => {
  return (
    <Router>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route exact path="/login" element={<><Navbar/> <Login /> </>} />
        <Route path="/signup" element={<><Navbar/><Signup /></>} />
        <Route path="/" element={<><Navbar/><Home /></>} />
        <Route path="/admindb" element={<AdminDashBoard />} />
        <Route path="/admindb/managelistings" element={<ManageListings />} />
        <Route path="/admindb/managebookings" element={<ManageBookings />} />
        <Route path="/admindb/analytics" element={<Analytics />} />
        <Route path="/userdb/userbookings" element={<><Navbar/><UserBookings /></>} />
        <Route path="/about" element={<><Navbar/><About /></>} />
        <Route path="/contact" element={<><Navbar/><Contact /></>} />
      </Routes>
    </Router>
    // <Login />
  );
};

export default App;
