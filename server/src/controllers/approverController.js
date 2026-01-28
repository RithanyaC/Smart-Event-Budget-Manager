const Expense = require("../models/Expense");

// 1. Pending expenses (actionable)
const getPendingExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ status: "PENDING" })
      .populate("eventId", "title totalBudget")
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// 2. Expense history (approved + rejected)
const getExpenseHistory = async (req, res) => {
  try {
    const expenses = await Expense.find({
      status: { $in: ["APPROVED", "REJECTED"] }
    })
      .populate("eventId", "title totalBudget")
      .populate("createdBy", "name email")
      .populate("reviewedBy", "name email")
      .sort({ reviewedAt: -1 });

    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getPendingExpenses,
  getExpenseHistory
};
