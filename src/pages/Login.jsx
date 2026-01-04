import { useState } from 'react';
import Navbar from '../components/NavBar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

      <Navbar />

      <div className="relative z-10 flex items-center justify-center px-8 py-20">
        <div className="bg-sky-400 rounded-3xl p-12 w-full max-w-md shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-slate-800">
            Log In
          </h2>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-center text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-center text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
          </div>

          <p className="text-center mt-4 text-slate-700">
            Don't have an account?{' '}
            <span className="text-red-600 font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>

          <div className="flex justify-center mt-8">
            <button className="bg-sky-200 text-slate-800 px-12 py-3 rounded-full font-semibold hover:bg-sky-300 transition cursor-pointer">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;