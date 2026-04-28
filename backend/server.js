const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

db.sequelize.sync().then(() => {
  console.log("Database connected");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});