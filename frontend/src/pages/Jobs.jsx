import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-6">Loading jobs...</p>;

  return (
    <div className="p-6 grid md:grid-cols-2 gap-4">
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))
      )}
    </div>
  );
}