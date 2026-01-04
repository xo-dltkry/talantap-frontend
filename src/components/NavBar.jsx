import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="flex gap-4">
        <Link
          to="/home"
          className="bg-slate-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-700 transition cursor-pointer"
        >
          HOMEPAGE
        </Link>
        <Link
          to="/about"
          className="bg-slate-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-700 transition cursor-pointer"
        >
          ABOUT US
        </Link>
        <Link
          to="/clubs"
          className="bg-slate-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-700 transition cursor-pointer"
        >
          CLUBS
        </Link>
        <Link
          to="/contacts"
          className="bg-slate-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-700 transition cursor-pointer"
        >
          CONTACTS
        </Link>
      </div>
      <Link
        to="/profile"
        className="bg-sky-400 p-3 rounded-full hover:bg-sky-500 transition cursor-pointer"
      >
        <User className="w-6 h-6 text-white" />
      </Link>
    </nav>
  );
};

export default Navbar