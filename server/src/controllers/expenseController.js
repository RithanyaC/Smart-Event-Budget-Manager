const Expense = require("../models/Expense");
const Event = require("../models/Event");

const addExpense = async (req, res) => {
  try {
    const { eventId, category, description, amount } = req.body;

    if (!eventId || !category || !amount) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // Ensure event belongs to this organizer
    const event = await Event.findOne({
      _id: eventId,
      createdBy: req.user._id
    });

    if (!event) {
      return res.status(403).json({
        message: "You are not allowed to add expenses to this event"
      });
    }

    const expense = await Expense.create({
      eventId,
      category,
      description,
      amount,
      createdBy: req.user._id
      // status defaults to PENDING
    });

    res.status(201).json({
      message: "Expense submitted for approval",
      expense
    });
  } catch (error) {
  console.error("ADD EXPENSE ERROR:", error);
  res.status(500).json({ message: error.message });
}

};

module.exports = { addExpense };

