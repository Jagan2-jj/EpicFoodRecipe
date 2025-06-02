const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const crypto = require("crypto");

const app = express();
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Email Transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Generate OTP
function generateOTP() {
  return crypto.randomInt(100000, 999999).toString();
}

// Signup Route
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  const otp = generateOTP();

  // Save user with OTP (without activating account)
  const query = "INSERT INTO users (username, email, password, otp) VALUES (?, ?, ?, ?)";
  db.query(query, [username, email, password, otp], (err) => {
    if (err) return res.status(500).send("Database error");

    // Send OTP to email
    const mailOptions = {
      from: "your-email@gmail.com",
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) return res.status(500).send("Error sending email");
      res.send("OTP sent. Please verify your email.");
    });
  });
});

// Verify OTP Route
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  const query = "SELECT * FROM users WHERE email = ? AND otp = ?";
  db.query(query, [email, otp], (err, results) => {
    if (err) return res.status(500).send("Database error");
    if (results.length === 0) return res.status(400).send("Invalid OTP");

    // Activate user account (remove OTP)
    const updateQuery = "UPDATE users SET otp = NULL WHERE email = ?";
    db.query(updateQuery, [email], (err) => {
      if (err) return res.status(500).send("Database error");
      res.send("Account verified successfully!");
    });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
