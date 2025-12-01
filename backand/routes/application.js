const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

const {
  addApplication,
  getApplications,
  updateApplication,
  deleteApplication,

} = require("../controllers/application");

router.post("/", auth, addApplication);
router.get("/", auth, getApplications);
router.put("/:id", auth, updateApplication);
router.delete("/:id", auth, deleteApplication);




module.exports = router;