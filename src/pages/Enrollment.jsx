import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { ArrowLeft, Star, Award, CheckCircle, Clock, Video, MessageCircle } from 'lucide-react';

const Enrollment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const clubData = location.state?.club;

  const [selectedCoach, setSelectedCoach] = useState(null);

  useEffect(() => {
    if (!clubData) {
      navigate('/clubs');
    }
  }, [clubData, navigate]);

  // Check if user already has a club enrolled
  const enrolledClub = JSON.parse(localStorage.getItem('enrolledClub') || 'null');

  // Sample coaches data
  const coaches = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '👩‍🏫',
      rating: 4.9,
      students: 120,
      experience: '5 years',
      specialization: 'Beginner Friendly',
      availability: 'Available Now',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: '👨‍💼',
      rating: 4.8,
      students: 95,
      experience: '8 years',
      specialization: 'Advanced Training',
      availability: 'Available Now',
      color: 'purple',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: '👩‍🎓',
      rating: 5.0,
      students: 150,
      experience: '6 years',
      specialization: 'All Levels',
      availability: 'Available in 30 min',
      color: 'green',
    },
    {
      id: 4,
      name: 'David Kim',
      avatar: '👨‍🏫',
      rating: 4.7,
      students: 80,
      experience: '4 years',
      specialization: 'Interactive Sessions',
      availability: 'Available Now',
      color: 'orange',
    },
  ];

  const handleEnroll = () => {
    if (!selectedCoach) {
      alert('Please select a coach to continue with enrollment');
      return;
    }

    if (enrolledClub) {
      alert('You are already enrolled in a club. Please unenroll first to join another club.');
      return;
    }

    // Save enrollment data
    const enrollmentData = {
      club: clubData,
      coach: coaches.find(c => c.id === selectedCoach),
      enrollmentDate: new Date().toISOString(),
    };

    localStorage.setItem('enrolledClub', JSON.stringify(enrollmentData));

    // Show success message
    alert(`Successfully enrolled in ${clubData.title} with coach ${coaches.find(c => c.id === selectedCoach).name}!`);

    // Navigate to profile
    navigate('/profile');
  };

  const colorClasses = {
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    green: 'from-green-400 to-green-600',
    orange: 'from-orange-400 to-orange-600',
  };

  if (!clubData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate('/clubs')}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Clubs
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Enroll in {clubData.title}
          </h1>
          <p className="text-xl text-blue-100">
            Choose your online coach and start your journey!
          </p>
        </div>
      </div>

      {/* Club Info Summary */}
      <div className="container mx-auto max-w-6xl px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-5xl">{clubData.icon}</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{clubData.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-slate-600">Schedule:</span>
                  <span className="font-semibold text-slate-800 ml-2">{clubData.day}</span>
                </div>
                <div>
                  <span className="text-slate-600">Time:</span>
                  <span className="font-semibold text-slate-800 ml-2">{clubData.time}</span>
                </div>
                <div>
                  <span className="text-slate-600">Location:</span>
                  <span className="font-semibold text-slate-800 ml-2">{clubData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning if already enrolled */}
        {enrolledClub && (
          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="text-3xl">⚠️</div>
              <div>
                <h3 className="font-bold text-orange-900 text-lg mb-1">Already Enrolled</h3>
                <p className="text-orange-800">
                  You are currently enrolled in <strong>{enrolledClub.club.title}</strong>.
                  Each student can only enroll in one club at a time. Please unenroll from your current club to join a new one.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Coaches Section */}
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Select Your Online Coach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              onClick={() => !enrolledClub && setSelectedCoach(coach.id)}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                selectedCoach === coach.id
                  ? 'ring-4 ring-blue-500 transform scale-105'
                  : 'hover:shadow-xl hover:-translate-y-1'
              } ${enrolledClub ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className={`bg-gradient-to-r ${colorClasses[coach.color]} p-6 relative`}>
                {selectedCoach === coach.id && (
                  <div className="absolute top-3 right-3 bg-white rounded-full p-1">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                )}
                <div className="text-6xl mb-3">{coach.avatar}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{coach.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <span className="text-white text-sm ml-1 font-semibold">{coach.rating}</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                    {coach.students} students
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-slate-700">
                  <Award className="w-5 h-5 text-slate-600" />
                  <div>
                    <p className="text-xs text-slate-500">Experience</p>
                    <p className="text-sm font-semibold">{coach.experience}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Video className="w-5 h-5 text-slate-600" />
                  <div>
                    <p className="text-xs text-slate-500">Specialization</p>
                    <p className="text-sm font-semibold">{coach.specialization}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Clock className="w-5 h-5 text-slate-600" />
                  <div>
                    <p className="text-xs text-slate-500">Availability</p>
                    <p className="text-sm font-semibold text-green-600">{coach.availability}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <MessageCircle className="w-4 h-4" />
                    <span>Online coaching via video call</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enroll Button */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Start?</h3>
            <p className="text-slate-600 mb-6">
              {selectedCoach
                ? `You've selected ${coaches.find(c => c.id === selectedCoach)?.name} as your coach.`
                : 'Please select a coach from the options above to continue.'}
            </p>
            <button
              onClick={handleEnroll}
              disabled={!selectedCoach || enrolledClub}
              className={`w-full md:w-auto px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                !selectedCoach || enrolledClub
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-2xl transform hover:scale-105 active:scale-95'
              }`}
            >
              Complete Enrollment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
