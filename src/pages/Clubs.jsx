import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Carousel from '../components/Carousel';
import ClubCard from '../components/ClubCard';
import { Sparkles, TrendingUp, Users, Award, Search, Filter } from 'lucide-react';

const Clubs = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Clubs');
  const navigate = useNavigate();

  // Sample template data - replace with your actual data
  const initialClubsData = [
    {
      id: 1,
      title: 'Chess Club',
      day: 'Monday & Wednesday',
      time: '4:00 PM - 6:00 PM',
      icon: '♟️',
      color: 'indigo',
      capacity: 20,
      enrolled: 15,
      ageRange: '8+',
      rating: 4.8,
      featured: true,
      category: 'STEM',
    },
    {
      id: 2,
      title: 'Robotics Club',
      day: 'Tuesday & Thursday',
      time: '3:30 PM - 5:30 PM',
      icon: '🤖',
      color: 'blue',
      capacity: 15,
      enrolled: 12,
      ageRange: '10-16',
      rating: 4.9,
      featured: true,
      category: 'STEM',
    },
    {
      id: 3,
      title: 'Art & Crafts',
      day: 'Wednesday',
      time: '4:00 PM - 5:30 PM',
      icon: '🎨',
      color: 'pink',
      capacity: 25,
      enrolled: 18,
      ageRange: '6-12',
      rating: 4.7,
      featured: false,
      category: 'Arts',
    },
    {
      id: 4,
      title: 'Coding Club',
      day: 'Friday',
      time: '4:00 PM - 6:00 PM',
      icon: '💻',
      color: 'green',
      capacity: 20,
      enrolled: 16,
      ageRange: '9-16',
      rating: 4.8,
      featured: true,
      category: 'STEM',
    },
    {
      id: 5,
      title: 'Music & Band',
      day: 'Monday & Friday',
      time: '3:00 PM - 5:00 PM',
      icon: '🎵',
      color: 'orange',
      capacity: 25,
      enrolled: 20,
      ageRange: '7-14',
      rating: 4.7,
      featured: false,
      category: 'Music',
    },
    {
      id: 6,
      title: 'Science Club',
      day: 'Wednesday',
      time: '3:30 PM - 5:30 PM',
      icon: '🔬',
      color: 'yellow',
      capacity: 18,
      enrolled: 14,
      ageRange: '8-13',
      rating: 4.6,
      featured: false,
      category: 'STEM',
    },
  ];

  const [clubsData, setClubsData] = useState(initialClubsData);

  // Filter categories
  const filterCategories = ['All Clubs', 'STEM', 'Arts', 'Sports', 'Music', 'Available Spots'];

  // Handlers
  const handleSearch = () => {
    // Search is already applied via filteredClubs
    console.log('Searching for:', searchQuery);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleAIRecommendations = () => {
    navigate('/recommendations');
  };

  // Filter clubs based on search query and active filter
  const filteredClubs = clubsData.filter(club => {
    // Search filter
    const matchesSearch = club.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          club.location.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    let matchesCategory = true;
    if (activeFilter === 'Available Spots') {
      matchesCategory = club.enrolled < club.capacity;
    } else if (activeFilter !== 'All Clubs') {
      matchesCategory = club.category === activeFilter;
    }

    return matchesSearch && matchesCategory;
  });

  // Convert filtered data to carousel items
  const carouselItems = filteredClubs.map((club) => (
    <ClubCard
      key={club.id}
      clubData={club}
      title={club.title}
      day={club.day}
      time={club.time}
      icon={club.icon}
      color={club.color}
      capacity={club.capacity}
      enrolled={club.enrolled}
      ageRange={club.ageRange}
      rating={club.rating}
      featured={club.featured}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">AI-Powered Club Recommendations</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Discover Amazing Clubs based on your Interests
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Join exciting activities, make new friends, and develop valuable skills!
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-2 flex items-center gap-2">
              <Search className="w-5 h-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search clubs by name, activity, or interest..."
                className="flex-1 px-2 py-3 text-gray-700 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-800 mb-1">500+</div>
            <div className="text-sm text-slate-600">Active Members</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-800 mb-1">{clubsData.length}</div>
            <div className="text-sm text-slate-600">Active Clubs</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-800 mb-1">95%</div>
            <div className="text-sm text-slate-600">Satisfaction Rate</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-800 mb-1">AI</div>
            <div className="text-sm text-slate-600">Smart Matching</div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <h3 className="text-lg font-bold text-slate-800">Filter Clubs</h3>
            {filteredClubs.length !== clubsData.length && (
              <span className="text-sm text-slate-600">
                ({filteredClubs.length} result{filteredClubs.length !== 1 ? 's' : ''})
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Clubs Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-xl">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {activeFilter === 'All Clubs' ? 'Popular Clubs' : `${activeFilter} Clubs`}
            </h2>
          </div>
          {filteredClubs.length > 0 ? (
            <div className="px-12">
              <Carousel items={carouselItems} itemsPerView={3} gap={24} />
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No Clubs Found</h3>
              <p className="text-slate-600 mb-6">
                {searchQuery
                  ? `No clubs match "${searchQuery}". Try a different search term.`
                  : `No clubs available in the ${activeFilter} category.`}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('All Clubs');
                }}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* AI Recommendation CTA */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Club to Choose?
            </h2>
            <p className="text-lg md:text-xl mb-6 text-blue-100">
              Get personalized AI recommendations based on your child's interests, age, and schedule!
            </p>
            <button
              onClick={handleAIRecommendations}
              className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Get AI Recommendations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs