const Application = require("../models/Application");

//   ----------Add application handler------------
exports.addApplication = async (req, res) => {
  try {
    const { company, position, status ,appliedDate,deadline} = req.body;
const today = new Date();


    const applied = new Date(appliedDate);
    const dead = new Date(deadline);

    // Deadline must be after appliedDate
    if (dead <= applied) {
      return res.status(400).json({ message: "Deadline must be after applied date" });
    }

    // Deadline must be in the future
    if (dead <= today) {
      return res.status(400).json({ message: "Deadline cannot be in the past" });
    }
    const newApp = await Application.create({
      userId: req.user.id,
      company,
      position,
      status,
      appliedDate,
      deadline
    });
    


    res.status(201).json({
      success: true,
      message: "Application added successfully",
      application: newApp
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to add application",
      error: err.message
    });
  }
};

// ------------Get all applications for a user-----------
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find({ userId: req.user.id });
    res.status(200).json({
      success: true,
      applications
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
      error: err.message
    });
  }
};

// -------------Updating application ----------
exports.updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const { company, position, status } = req.body;

    const app = await Application.findOne({ _id: id, userId: req.user.id });
    if (!app) {
      return res.status(404).json({ success: false, message: "Application not found" });
    }

    if (company) app.company = company;
    if (position) app.position = position;
    if (status) app.status = status;

    await app.save();

    res.status(200).json({
      success: true,
      message: "Application updated",
      application: app
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update application",
      error: err.message
    });
  }
};

//------------------Delete application ----------
exports.deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const app = await Application.findOneAndDelete({ _id: id, userId: req.user.id });

    if (!app) {
      return res.status(404).json({ success: false, message: "Application not found" });
    }

    res.status(200).json({
      success: true,
      message: "Application deleted"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete application",
      error: err.message
    });
  }
};







 