const express = require("express");
const { addExpense } = require("../controllers/expenseController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ORGANIZER"),
  addExpense
);

module.exports = router;

