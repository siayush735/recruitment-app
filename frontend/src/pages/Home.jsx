import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 🔥 HERO SECTION */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Find Your Dream Job 🚀
        </h1>
        <p className="text-lg mb-6">
          Explore top opportunities from leading companies
        </p>

        <button
          onClick={() => navigate("/jobs")}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer"
        >
          Browse Jobs
        </button>
      </div>

      {/* 🔥 FEATURES */}
      <div className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-bold mb-2">💼 Easy Apply</h3>
          <p>Apply to jobs in one click with our simple process</p>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-bold mb-2">📊 Track Applications</h3>
          <p>Keep track of your job applications easily</p>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-bold mb-2">🌐 Top Companies</h3>
          <p>Get hired by the best companies worldwide</p>
        </div>
      </div>

      {/* 🔥 CALL TO ACTION */}
      <div className="text-center py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">
          Ready to get hired?
        </h2>

        <button
          onClick={() => navigate("/jobs")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Explore Jobs
        </button>
      </div>

    </div>
  );
}