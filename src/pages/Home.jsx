import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

      <Navbar />

      <div className="relative z-10 flex flex-col items-center justify-center px-8 py-20">
        <div className="text-center mb-12 max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-red-600">Find</span> the{' '}
            <span className="text-yellow-500">Perfect</span>{' '}
            <span className="text-slate-700">Club</span> for{' '}
            <span className="text-orange-500">Your</span>{' '}
            <span className="text-green-600">Child</span>!
          </h1>
          <p className="text-slate-700 text-lg">
            Smart recommendations powered by AI to help your child
          </p>
          <p className="text-slate-700 text-lg">
            <span className="text-green-600 font-semibold">grow</span>,{' '}
            <span className="text-green-600 font-semibold">learn</span>, and{' '}
            <span className="text-blue-500 font-semibold">shine</span>.
          </p>
        </div>

        <button
          onClick={() => navigate('/recommendations')}
          className="bg-slate-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-slate-700 transition shadow-lg cursor-pointer"
        >
          Get Recommendations
        </button>
      </div>
    </div>
  );
};

export default Home;