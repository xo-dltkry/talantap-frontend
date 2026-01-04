import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Clubs from './pages/Clubs';
import Contacts from './pages/Contacts';
import Recommendations from './pages/Recommendations';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}