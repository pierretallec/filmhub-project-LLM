import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">FilmHub</Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/dashboard" className="hover:text-indigo-600 transition">Dashboard</Link></li>
              <li><Link to="/catalog" className="hover:text-indigo-600 transition">Catalog</Link></li>
              <li><Link to="/login" className="hover:text-indigo-600 transition">Login</Link></li>
              <li><Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">Register</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          &copy; {new Date().getFullYear()} FilmHub. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
