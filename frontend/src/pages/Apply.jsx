import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Apply() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // 🔥 disable button

    try {
      await axios.post("https://recruitment-app-cz6l.onrender.com/api/applications", {
        ...form,
        jobId: id,
      });

      alert("Application submitted ✅");

      setForm({
        name: "",
        email: "",
        resume: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to submit ❌");
    } finally {
      setLoading(false); // 🔥 re-enable if needed
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4 font-bold">Apply for Job</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          className="border p-2 w-full"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          name="email"
          value={form.email}
          className="border p-2 w-full"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          name="resume"
          value={form.resume}
          className="border p-2 w-full"
          placeholder="Resume Link"
          onChange={(e) => setForm({ ...form, resume: e.target.value })}
        />

        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded w-full text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 cursor-pointer"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
