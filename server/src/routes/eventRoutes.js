const express = require("express");
const { createEvent } = require("../controllers/eventController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Organizer only
router.post(
  "/",
  authMiddleware,
  roleMiddleware("ORGANIZER"),
  createEvent
);

module.exports = router;
