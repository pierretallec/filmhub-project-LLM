import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Discover Your Next Favorite Story
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Personalized recommendations for movies and books, tailored just for you.
        Join our community and start exploring today.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/register" className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
          Get Started
        </Link>
        <Link to="/catalog" className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold border border-indigo-200 hover:bg-indigo-50 transition shadow-sm">
          Browse Catalog
        </Link>
      </div>
    </div>
  );
};

export default Home;
