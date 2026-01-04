import Navbar from '../components/NavBar';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

      <Navbar />

      <div className="relative z-10 flex flex-col items-center justify-center px-8 py-32">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl font-bold mb-12 text-red-600">ABOUT US</h1>

          <div className="space-y-6 text-slate-700 text-lg">
            <p>
              We created this platform to make it easier for parents to find the
            </p>
            <p>right clubs for their children.</p>
            <p className="mt-8">
              Our mission is to connect every child with opportunities that
            </p>
            <p>inspire creativity, learning, and joy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;