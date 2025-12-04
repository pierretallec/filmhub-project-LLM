import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Catalog = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('movies'); // 'movies' or 'books'
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchItems();
  }, [activeTab, searchQuery]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const endpoint = activeTab === 'movies' ? 'movies' : 'books';
      // Append search query if present
      const url = `http://localhost:8000/api/catalog/${endpoint}/${searchQuery ? `?search=${searchQuery}` : ''}`;
      const response = await axios.get(url);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Browse Catalog</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex">
          <button
            className={`px-6 py-2 rounded-l-lg font-semibold ${activeTab === 'movies' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => setActiveTab('movies')}
          >
            Movies
          </button>
          <button
            className={`px-6 py-2 rounded-r-lg font-semibold ${activeTab === 'books' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => setActiveTab('books')}
          >
            Books
          </button>
        </div>

        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{activeTab === 'movies' ? item.director : item.author}</span>
                  <span>{activeTab === 'movies' ? item.release_year : item.publication_year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!loading && items.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          No {activeTab} found.
        </div>
      )}
    </div>
  );
};

export default Catalog;
