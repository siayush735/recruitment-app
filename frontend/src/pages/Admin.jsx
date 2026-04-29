// pages/Admin.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/applications")
      .then((res) => setApps(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Applications</h1>

      {apps.map((app) => (
        <div key={app._id} className="border p-4 mb-2">
          <h2 className="font-bold text-lg">
            {app.jobId ? app.jobId.title : "Job Not Found"}
          </h2>

          <p className="text-gray-600">{app.jobId?.company}</p>
          <h2>{app.name}</h2>
          <p>{app.email}</p>
          <a href={app.resume} target="_blank">
            Resume
          </a>
          <p>Status: {app.status}</p>
        </div>
      ))}
    </div>
  );
}
