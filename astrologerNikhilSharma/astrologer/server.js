import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
  auth: {
    user: 'takmonboostleadform@gmail.com', // Replace with your email
    pass: process.env.EMAIL_PASS,  // Replace with your email password or an App Password if using 2FA
  },
});

// Route to handle form submission and send an email
app.post('/send-email', (req, res) => {
  const { name, email, phone, city, query } = req.body;

  const mailOptions = {
    from: 'takmonboostleadform@gmail.com',
    to: 'help@astrologernikhilsharma.in', // The email address to receive the query
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      City: ${city}
      Query: ${query}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error sending email', error });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
