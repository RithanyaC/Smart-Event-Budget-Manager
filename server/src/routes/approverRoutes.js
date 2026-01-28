const express = require("express");
const {
  getPendingExpenses,
  getExpenseHistory
} = require("../controllers/approverController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Pending approvals
router.get(
  "/expenses/pending",
  authMiddleware,
  roleMiddleware("APPROVER"),
  getPendingExpenses
);

// Approval history
router.get(
  "/expenses/history",
  authMiddleware,
  roleMiddleware("APPROVER"),
  getExpenseHistory
);

module.exports = router;
