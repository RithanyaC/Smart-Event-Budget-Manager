const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    date: {
      type: Date,
      required: true
    },

    location: {
      type: String,
      trim: true
    },

    totalBudget: {
      type: Number,
      required: true,
      min: 0
    },

    status: {
      type: String,
      enum: ["PLANNING", "ACTIVE", "CLOSED"],
      default: "PLANNING"
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Event", eventSchema);
