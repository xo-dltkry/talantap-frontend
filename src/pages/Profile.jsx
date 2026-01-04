import { User } from 'lucide-react';
import Sidebar from '../components/SideBar';
import ClubCard from '../components/ClubCard';
import LessonsTable from '../components/LessonsTable';
import Calendar from '../components/Calendar';

const Profile = () => {
  const kids = ['Mike', 'Aaron'];

  const clubs = [
    { title: 'English', day: '11 December', time: '16:00', location: 'Just Speak It' },
    { title: 'Football', day: '16 December', time: '10:00', location: 'Invictus Marneo' },
    { title: 'Chess', day: '29 December', time: '13:30', location: 'Blinn Club' }
  ];

  const lessons = [
    { child: 'Mike', class: 'Boxing', starting: '11.12.2025' },
    { child: 'Aaron', class: 'Art', starting: '13.12.2025' },
    { child: 'Mike', class: 'Maths', starting: '15.12.2025' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300">
      <div className="flex gap-8 p-8">
        <Sidebar />

        <div className="flex-1 bg-sky-400 rounded-3xl p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Your Kids</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              {kids.map((kid, idx) => (
                <li key={idx}>{kid}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Clubs</h2>
            <div className="grid grid-cols-3 gap-4">
              {clubs.map((club, idx) => (
                <ClubCard
                  key={idx}
                  title={club.title}
                  day={club.day}
                  time={club.time}
                  location={club.location}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Lessons</h2>
            <LessonsTable lessons={lessons} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
            <User className="w-16 h-16 text-sky-400" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800">Mary Smith</h3>
            <p className="text-slate-600">Parent</p>
          </div>

          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Profile;