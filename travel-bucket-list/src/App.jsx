import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BucketList from './pages/BucketList';
import Signup from './Signup';
import Login from './Login';  // Added Login page link

export default function App() {
  return (
    <div>
      <nav className="navbar">
        {/* Navbar with Links */}
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/bucketlist" className="navbar-link">My Bucket List</Link>
        <Link to="/signup" className="navbar-link">Sign Up</Link>  {/* Signup Link */}
        <Link to="/login" className="navbar-link">Login</Link>  {/* Added Login Link */}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/bucketlist" element={<BucketList />} />
        <Route path="/signup" element={<Signup />} />  {/* Signup Route */}
        <Route path="/login" element={<Login />} />  {/* Login Route */}
      </Routes>
    </div>
  );
}
