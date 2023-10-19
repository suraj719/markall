const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
const { transporter } = require("./nodemailer");

const port = process.env.PORT || 5000;

app.post("/send", async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    await transporter.sendMail({
      from: process.env.Email,
      to: `assignment@spreadinindia.in`,
      subject: "MarkAll contact form",
      text: `Name: ${name}\nEmail: ${email}\nPhone number: ${phone}\nMessage: ${message}`,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

const start = async () => {
  try {
    app.listen(port, console.log(`server is listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
