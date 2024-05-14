const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 5000;
require("dotenv").config();

app.use(cors());

app.use(express.json({limit: "25mb"}));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ email, OTP }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'aaditya.21bcon517@jecrcu.edu.in', 
        pass: '21bcon517' 
      }
    });


    const mailOptions = {
      from: 'aaditya.21bcon517@jecrcu.edu.in', 
      to: email,
      subject: 'Password Reset',
      text: OTP 
    };


    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      } 
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post("/send_recovery_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${port}`);
});
