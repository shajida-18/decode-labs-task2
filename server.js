const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Decode Labs Backend API",
  });
});

// GET Users
app.get("/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Alice",
    },
  ];

  res.json(users);
});

// POST User
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and Email are required",
    });
  }

  res.status(201).json({
    message: "User Added Successfully",

    user: {
      name,
      email,
    },
  });
});

// Start Server

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
