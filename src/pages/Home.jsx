import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { Sparkles, Zap, Users, Award, ArrowRight, Star, TrendingUp, Heart } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 pb-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">AI-Powered Club Matching</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Your <span className="text-yellow-300">Passion</span> Through Online Clubs
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Join exciting clubs, learn from expert coaches, and connect with students who share your interests!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/clubs')}
                className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-2"
              >
                Explore Clubs
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/recommendations')}
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Get AI Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;