const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const approverRoutes = require("./routes/approverRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/approver", approverRoutes);


app.get("/", (req, res) => {
  res.send("Event Budget Manager API is running");
});

module.exports = app;


