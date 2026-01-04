import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar as CalendarIcon, Clock, MapPin, UserCircle, Star, CheckCircle } from 'lucide-react';
import Sidebar from '../components/SideBar';
import LessonsTable from '../components/LessonsTable';
import Calendar from '../components/Calendar';

const Profile = () => {
  const navigate = useNavigate();
  const [enrolledClub, setEnrolledClub] = useState(null);
  const [upcomingLessons, setUpcomingLessons] = useState([]);

  useEffect(() => {
    // Load enrolled club from localStorage
    const storedEnrollment = localStorage.getItem('enrolledClub');
    if (storedEnrollment) {
      setEnrolledClub(JSON.parse(storedEnrollment));
    }
  }, []);

  useEffect(() => {
    // Generate upcoming lessons based on enrolled club
    if (enrolledClub) {
      const lessons = generateUpcomingLessons(enrolledClub);
      setUpcomingLessons(lessons);
    } else {
      setUpcomingLessons([]);
    }
  }, [enrolledClub]);

  const generateUpcomingLessons = (enrollment) => {
    const lessons = [];
    const today = new Date();
    const { club, coach } = enrollment;

    // Parse the days from club.day (e.g., "Monday & Wednesday" or "Friday")
    const dayString = club.day;
    const dayMapping = {
      'Monday': 1,
      'Tuesday': 2,
      'Wednesday': 3,
      'Thursday': 4,
      'Friday': 5,
      'Saturday': 6,
      'Sunday': 0
    };

    // Extract days from the string
    const clubDays = [];
    Object.keys(dayMapping).forEach(day => {
      if (dayString.includes(day)) {
        clubDays.push(dayMapping[day]);
      }
    });

    // Generate next 8 lessons
    let lessonsGenerated = 0;
    let currentDate = new Date(today);

    while (lessonsGenerated < 8) {
      const dayOfWeek = currentDate.getDay();

      if (clubDays.includes(dayOfWeek)) {
        lessons.push({
          time: club.time,
          club: club.title,
          coach: coach.name,
          date: new Date(currentDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })
        });
        lessonsGenerated++;
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return lessons;
  };

  const handleUnenroll = () => {
    if (window.confirm('Are you sure you want to unenroll from this club?')) {
      localStorage.removeItem('enrolledClub');
      setEnrolledClub(null);
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-400 to-blue-600',
      purple: 'from-purple-400 to-purple-600',
      green: 'from-green-400 to-green-600',
      orange: 'from-orange-400 to-orange-600',
      pink: 'from-pink-400 to-pink-600',
      yellow: 'from-yellow-400 to-yellow-600',
      red: 'from-red-400 to-red-600',
      indigo: 'from-indigo-400 to-indigo-600',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300">
      <div className="flex gap-8 p-8">
        <Sidebar />

        <div className="flex-1 bg-sky-400 rounded-3xl p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">My Enrolled Club</h2>
            {enrolledClub ? (
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Club Header */}
                <div className={`bg-gradient-to-r ${getColorClasses(enrolledClub.club.color)} p-6 relative`}>
                  <div className="absolute top-3 right-3 bg-green-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 fill-current" />
                    Enrolled
                  </div>
                  <div className="text-5xl mb-3">{enrolledClub.club.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{enrolledClub.club.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-4 h-4 text-yellow-300 fill-current" />
                      <span className="text-white text-sm ml-1 font-semibold">{enrolledClub.club.rating}</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                      Ages {enrolledClub.club.ageRange}
                    </div>
                  </div>
                </div>

                {/* Club Details */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-4">Club Information</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-700">
                          <CalendarIcon className="w-5 h-5 text-slate-600" />
                          <div>
                            <p className="text-xs text-slate-500">Schedule</p>
                            <p className="text-sm font-semibold">{enrolledClub.club.day}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                          <Clock className="w-5 h-5 text-slate-600" />
                          <div>
                            <p className="text-xs text-slate-500">Time</p>
                            <p className="text-sm font-semibold">{enrolledClub.club.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                          <MapPin className="w-5 h-5 text-slate-600" />
                          <div>
                            <p className="text-xs text-slate-500">Location</p>
                            <p className="text-sm font-semibold">{enrolledClub.club.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-4">Your Coach</h4>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-4xl">{enrolledClub.coach.avatar}</div>
                          <div>
                            <p className="font-bold text-slate-800">{enrolledClub.coach.name}</p>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-current" />
                              <span className="text-sm text-slate-600">{enrolledClub.coach.rating}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 mb-1">
                          <span className="font-semibold">Experience:</span> {enrolledClub.coach.experience}
                        </p>
                        <p className="text-xs text-slate-600">
                          <span className="font-semibold">Specialization:</span> {enrolledClub.coach.specialization}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-slate-200">
                    <button
                      onClick={handleUnenroll}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                    >
                      Unenroll
                    </button>
                    <button
                      onClick={() => navigate('/clubs')}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                    >
                      Browse More Clubs
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No Club Enrolled</h3>
                <p className="text-slate-600 mb-6">
                  You haven't enrolled in any club yet. Explore our amazing clubs and find the perfect fit!
                </p>
                <button
                  onClick={() => navigate('/clubs')}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold px-8 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Explore Clubs
                </button>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Upcoming Lessons</h2>
            {upcomingLessons.length > 0 ? (
              <LessonsTable lessons={upcomingLessons} />
            ) : (
              <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No Upcoming Lessons</h3>
                <p className="text-slate-600 mb-6">
                  Enroll in a club to see your upcoming lessons schedule!
                </p>
                <button
                  onClick={() => navigate('/clubs')}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold px-8 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Browse Clubs
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
            <User className="w-16 h-16 text-sky-400" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800">Dauletkerey Kelgenbay</h3>
            <p className="text-slate-600">Student</p>
          </div>

          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Profile;