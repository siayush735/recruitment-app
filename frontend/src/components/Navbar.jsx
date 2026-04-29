// components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <h1 className="font-bold text-2xl">HireHub</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}