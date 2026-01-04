import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Target } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { path: '/home', label: 'Home', Icon: Home },
    { path: '/clubs', label: 'Clubs', Icon: Users },
    { path: '/recommendations', label: 'Get Recommendations', Icon: Target }
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-blue-200 to-blue-400 rounded-3xl p-6 flex flex-col gap-4">
      <div className="bg-white rounded-full px-6 py-3 mb-4">
        <span className="font-bold text-2xl">
          <span className="text-red-500">T</span>
          <span className="text-orange-500">A</span>
          <span className="text-yellow-500">L</span>
          <span className="text-green-500">A</span>
          <span className="text-blue-500">N</span>
          <span className="text-purple-500">T</span>
          <span className="text-red-500">I</span>
          <span className="text-orange-500">X</span>
        </span>
      </div>

      {menuItems.map((item) => {
        const { Icon } = item;
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-6 py-3 rounded-full transition cursor-pointer ${
              isActive
                ? 'bg-white text-slate-700'
                : 'text-slate-700 hover:bg-white/50'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-semibold">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;