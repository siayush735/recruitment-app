import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="font-bold text-lg">{job.title}</h2>
      <p className="text-gray-700">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>
      <p className="mt-2 text-sm">{job.description}</p>

      <button
        onClick={() => navigate(`/apply/${job._id}`)}
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded cursor-pointer"
      >
        Apply
      </button>
    </div>
  );
}