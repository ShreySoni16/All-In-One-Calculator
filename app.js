const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const authRoutes = require("./routes/auth");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "your_secret_key", // Change this to a strong secret key
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/login.ejs`);
});

// const express = require('express');
// const app = express();
// const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Set up EJS as the templating engine
app.set("view engine", "ejs");

// Your other routes and server configurations...

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });
