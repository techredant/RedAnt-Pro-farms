import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // loads USER & PASS from .env

const app = express();
app.use(express.json());

// Allow your Vite frontend (change port if yours is different)
app.use(cors({ origin: "http://localhost:5173" }));

app.post("/api/send-email", async (req, res) => {
    const { Name, Email, phone, message } = req.body;

    if (!Name || !Email) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: Email,
            to: process.env.USER,
            subject: `Admin request from ${Name}`,
            text: `Name: ${Name}\nPhone: ${phone}\nEmail: ${Email}\nMessage: ${message}`,
        });

        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
});

app.listen(8000, () => console.log("Backend running on http://localhost:8000"));
