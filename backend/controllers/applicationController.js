// controllers/applicationController.js
import Application from "../models/Application.js";
import sendEmail from "../utils/sendEmail.js";

// Create Application
export const createApplication = async (req, res) => {
  try {
    const { name, email, resume, jobId } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name & Email required" });
    }

    const app = await Application.create({
      name,
      email,
      resume,
      jobId,
    });

    // 🔥 Email should NOT break API
    try {
      await sendEmail(
        process.env.EMAIL_USER,
        "New Job Application",
        `${name} applied for job ${jobId}`
      );
    } catch (err) {
      console.log("Email failed but app saved:", err.message);
    }

    res.status(201).json(app); // ✅ ALWAYS SUCCESS if saved
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all applications (Admin)
export const getApplications = async (req, res) => {
  try {
    const apps = await Application.find()
      .populate("jobId") // 🔥 THIS IS KEY
      .sort({ createdAt: -1 });

    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update status
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const app = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(app);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete application
export const deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};