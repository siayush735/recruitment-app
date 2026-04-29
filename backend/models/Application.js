import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    resume: String,

    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job", // 🔥 MUST MATCH model name
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);