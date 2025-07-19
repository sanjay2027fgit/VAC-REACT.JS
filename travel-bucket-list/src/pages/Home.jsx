import { Link } from "react-router-dom";
import "./Home.css"; // We will create this CSS file

export default function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">🌍 Travel Bucket List</h1>
        <p className="home-subtitle">
          Plan your dream destinations and visualize them on a map.
        </p>
        <Link to="/Login" className="home-btn">
          Start Your Journey
        </Link>
      </div>
    </div>
  );
}