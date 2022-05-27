const express = require("express");
const app = express();
require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/send_mail", cors(), async (req, res) => {
  let { text, sender, senderEmail } = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: senderEmail,
    to: process.env.MAIL_USER,
    subject: `Portfolio email from ${sender}`,
    html: `<div className="email" style="
    padding; 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
    ">
    <p>${text}</p>
    </div>
  `,
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
