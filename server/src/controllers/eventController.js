const Event = require("../models/Event");

const createEvent = async (req, res) => {
  try {
    const { title, date, location, totalBudget } = req.body;

    if (!title || !date || !totalBudget) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const event = await Event.create({
      title,
      date,
      location,
      totalBudget,
      createdBy: req.user._id
    });

    res.status(201).json({
      message: "Event created successfully",
      event
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createEvent };
