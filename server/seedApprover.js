require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./src/models/User");

const seedApprover = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const hashedPassword = await bcrypt.hash("password123", 10);

  await User.create({
    name: "Finance Approver",
    email: "approver@test.com",
    password: hashedPassword,
    role: "APPROVER"
  });

  console.log("Approver created");
  process.exit();
};

seedApprover();
