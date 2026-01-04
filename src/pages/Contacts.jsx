import Navbar from '../components/NavBar';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300">
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-slate-700">Contacts Page</h1>
      </div>
    </div>
  );
};

export default Contacts;