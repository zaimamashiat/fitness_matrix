// Import necessary dependencies
import React, { useState } from 'react';

const YogaMeditationGrid = () => {
  const videos = [
    {
      id: 1,
      title: "10-Minute Morning Yoga",
      duration: "10 mins",
      category: "Yoga",
      thumbnail: "https://images.unsplash.com/photo-1488228469209-c141f8bcd723?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=abc123"
    },
    {
      id: 2,
      title: "5-Minute Meditation for Beginners",
      duration: "5 mins",
      category: "Meditation",
      thumbnail: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=def456"
    },
    {
      id: 3,
      title: "20-Minute Stress Relief Yoga",
      duration: "20 mins",
      category: "Yoga",
      thumbnail: "https://images.unsplash.com/photo-1526718583451-e88ebf774771?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=ghi789"
    },
    {
      id: 4,
      title: "10-Minute Guided Meditation",
      duration: "10 mins",
      category: "Meditation",
      thumbnail: "https://images.unsplash.com/photo-1517363898874-737b62a7db91?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=jkl012"
    },
    {
      id: 5,
      title: "15-Minute Vinyasa Yoga",
      duration: "15 mins",
      category: "Yoga",
      thumbnail: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=mno345"
    },
    {
      id: 6,
      title: "30-Minute Deep Relaxation Meditation",
      duration: "30 mins",
      category: "Meditation",
      thumbnail: "https://images.unsplash.com/photo-1484452330304-377cdeb05340?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=pqr678"
    },
    {
      id: 7,
      title: "Yoga for Better Sleep",
      duration: "15 mins",
      category: "Yoga",
      thumbnail: "https://images.unsplash.com/photo-1552196527-bffef41ef674?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=stu901"
    },
    {
      id: 8,
      title: "Meditation for Anxiety Relief",
      duration: "20 mins",
      category: "Meditation",
      thumbnail: "https://images.unsplash.com/photo-1548687979-86cda6b97310?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=vwx234"
    },
    {
      id: 9,
      title: "Power Yoga for Strength",
      duration: "25 mins",
      category: "Yoga",
      thumbnail: "https://images.unsplash.com/photo-1526718583451-e88ebf774771?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=yzx567"
    }
  ];

  const [filter, setFilter] = useState('All');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredVideos = filter === 'All' ? videos : videos.filter(video => video.category === filter);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-800 mb-6">Yoga and Meditation Tutorials</h1>

        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            {['All', 'Yoga', 'Meditation'].map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 rounded-lg shadow-md ${filter === category ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-teal-600 hover:text-white`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-700 truncate">
                  {video.title}
                </h3>
                <p className="text-gray-500 text-sm">{video.duration}</p>
                <p className="text-gray-500 text-sm">{video.category}</p>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-block bg-teal-500 text-white px-4 py-2 rounded-lg text-center hover:bg-teal-600"
                >
                  Watch Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaMeditationGrid;
