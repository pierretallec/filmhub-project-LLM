import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [recommendations, setRecommendations] = useState({ movies: [], books: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      // TODO: Add authentication token to headers
      // const token = localStorage.getItem('token');
      // const config = { headers: { Authorization: `Bearer ${token}` } };
      // const response = await axios.get('http://localhost:8000/api/recommendations/suggest/', config);
      
      // Mock data for now until auth is fully integrated in frontend
      const response = await axios.get('http://localhost:8000/api/recommendations/suggest/'); 
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Your Recommendations</h2>

      {loading ? (
        <div className="text-center text-gray-600">Loading recommendations...</div>
      ) : (
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-700 border-b pb-2">Recommended Movies</h3>
            {recommendations.movies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendations.movies.map((movie) => (
                  <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">{movie.title}</h4>
                      <p className="text-gray-600 mb-4 line-clamp-3">{movie.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{movie.director}</span>
                        <span>{movie.release_year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No movie recommendations yet. Rate some items!</p>
            )}
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-700 border-b pb-2">Recommended Books</h3>
            {recommendations.books.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendations.books.map((book) => (
                  <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">{book.title}</h4>
                      <p className="text-gray-600 mb-4 line-clamp-3">{book.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{book.author}</span>
                        <span>{book.publication_year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No book recommendations yet. Rate some items!</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
