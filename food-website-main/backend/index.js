const express = require('express');
require("dotenv").config();
const cors = require('cors');
const bcrypt = require("bcryptjs");
const connectDB = require('./config/db');
const User = require('./models/User');
const nodemailer = require('nodemailer');
const app = express();

 
connectDB();

 
app.use(express.json());
app.use(cors());
 

const transporter = nodemailer.createTransport({
  service: 'gmail',  // You can replace this with your email provider
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Send welcome email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Our Platform!',
      html: `
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        body {
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
        }
        .email-wrapper {
            width: 100%;
            height: 100%;
            background-color: #f4f4f4;
            padding: 40px 0;
        }
        .email-container {
            width: 600px;
            margin: 0 auto;
            background: #111;
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            color: #fff;
        }
        h2 {
            color: green;
            font-size: 24px;
            margin-top: 20px;
        }
        p {
            color: aliceblue;
            font-size: 25px;
            margin-top: 10px;
        }
        .details {
            color: #fff;
            margin-top: 20px;
        }
        h4 {
            color: #00bcd4;
            font-size: 20px;
            margin-top: 15px;
        }
        .footer {
            margin-top: 20px;
            color: #fff;
            font-size: 14px;
        }
        h3 {
            color: #ff5722;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center">
                    <div class="email-container">
                        <h2>Welcome to Our Service, <span style="color:#ffeb3b;">${username}</span></h2>
                        <p>Thank you for registering with us. We are excited to have you onboard!</p>
                        <div class="details">
                            <p>Your account details are as follows:</p>
                            <h4>Username: <span style="color: #ffeb3b;">${username}</span></h4>
                            <h4>Email: <span style="color: #ffeb3b;">${email}</span></h4>
                        </div>
                        <p>We encourage you to log in and explore the features we offer. If you need any help, feel free to reach out to our support team.</p>
                        <div class="footer">
                            <p>Best regards,</p>
                            <h3>The Epic Food Recipe Team</h3>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
   `
   
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials." });

    res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

const PORT = process.env.PORT||5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
