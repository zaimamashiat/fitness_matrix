// Import necessary dependencies
import React, { useState } from 'react';

const VideoGrid = () => {
  const videos = [
    {
      id: 1,
      title: "10-Minute Full-Body Workout",
      duration: "10 mins",
      category: "Quick Workouts",
      thumbnail: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=KrmYjcQzSsQ"
    },
    {
      id: 2,
      title: "5-Minute Core Strengthening Routine",
      duration: "5 mins",
      category: "Quick Workouts",
      thumbnail: "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=2XVm_am4MeY"
    },
    {
      id: 3,
      title: "7-Minute HIIT",
      duration: "7 mins",
      category: "Quick Workouts",
      thumbnail: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=K1U8tsLcd2E"
    },
    {
      id: 4,
      title: "Full-Body Beginner's Workout",
      duration: "10 mins",
      category: "Beginner-Friendly Workouts",
      thumbnail: "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=6VFLKdfxA24"
    },
    {
      id: 5,
      title: "Low-Impact Cardio for Beginners",
      duration: "10 mins",
      category: "Beginner-Friendly Workouts",
      thumbnail: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=kwEx3l998Ps"
    },
    {
      id: 6,
      title: "Gentle Yoga for Beginners",
      duration: "10 mins",
      category: "Beginner-Friendly Workouts",
      thumbnail: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=6VFLKdfxA24"
    },
    {
      id: 7,
      title: "Upper Body Strength Training",
      duration: "10 mins",
      category: "Targeted Muscle Group Workouts",
      thumbnail: "https://images.unsplash.com/photo-1516481265257-97e5f4bc50d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=9srTREKiXD8"
    },
    {
      id: 8,
      title: "Leg and Glute Workout",
      duration: "10 mins",
      category: "Targeted Muscle Group Workouts",
      thumbnail: "https://images.unsplash.com/photo-1646495001290-39103b31873a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.youtube.com/watch?v=Ks6zEQ3eNsU"
    },
    {
      id: 9,
      title: "Core and Abs Workout",
      duration: "5 mins",
      category: "Targeted Muscle Group Workouts",
      thumbnail: "https://source.unsplash.com/300x200/?core,abs",
      link: "https://www.youtube.com/watch?v=6UWcaE8rR68"
    },
    {
      id: 10,
      title: "No-Equipment Full-Body Workout",
      duration: "10 mins",
      category: "Home Workouts",
      thumbnail: "https://source.unsplash.com/300x200/?no-equipment,workout",
      link: "https://www.youtube.com/watch?v=lfuksOKxlh4"
    },
    {
      id: 11,
      title: "Resistance Band Workout",
      duration: "10 mins",
      category: "Home Workouts",
      thumbnail: "https://source.unsplash.com/300x200/?resistance,band",
      link: "https://www.youtube.com/watch?v=Ks6zEQ3eNsU"
    },
    {
      id: 12,
      title: "Chair-Based Exercises",
      duration: "5 mins",
      category: "Home Workouts",
      thumbnail: "https://source.unsplash.com/300x200/?chair,exercise",
      link: "https://www.youtube.com/watch?v=2XVm_am4MeY"
    },
  ];

  const [filter, setFilter] = useState('All');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredVideos = filter === 'All' ? videos : videos.filter(video => video.category === filter);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-800 mb-6">Workout Videos</h1>

        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            {['All', 'Quick Workouts', 'Beginner-Friendly Workouts', 'Targeted Muscle Group Workouts', 'Home Workouts'].map((category) => (
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

export default VideoGrid;
