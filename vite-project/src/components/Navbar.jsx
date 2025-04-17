

import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Zainab Bilal</h1>
        <div className="space-x-6">
          <Link to="about" smooth className="cursor-pointer hover:text-blue-500">About</Link>
          <Link to="projects" smooth className="cursor-pointer hover:text-blue-500">Projects</Link>
          <Link to="contact" smooth className="cursor-pointer hover:text-blue-500">Contact</Link>
          <a href="/ZainabBilal-CV.pdf" download className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Download CV</a>
        </div>
      </div>
    </nav>
  );
}