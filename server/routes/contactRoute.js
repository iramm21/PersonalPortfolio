require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Set up the transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML Template for the email
    const mailOptions = {
      from: `"Portfolio Contact" <${email}>`, // The sender's email (user)
      to: "isaac15.ramm@gmail.com", // Your email (the recipient)
      subject: `📧 New Potential Client: ${name}`, // Improved subject line

      // Email in HTML format
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #16213e; color: #ffffff;">
          <h2 style="color: #00f6ff;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #39ff14;">${email}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="background-color: #243447; padding: 10px; border-left: 4px solid #00f6ff;">
            ${message}
          </blockquote>
          <hr style="border: none; height: 1px; background-color: #39ff14;">
          <p style="text-align: center;">This email was sent from your portfolio contact form.</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email." });
  }
});

module.exports = router;
