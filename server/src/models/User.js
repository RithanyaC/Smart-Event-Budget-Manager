const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
  type: String,
  enum: ["ORGANIZER", "APPROVER", "FINANCE_ADMIN"],
  default: "ORGANIZER"
}

  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
