// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            Email,
            Name,
            Message,
            Phone
        } = req.body;

        if (!Email || !Name) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        const mailOptions = {
            from: Email || "no-reply@broadcast.com",
            to: process.env.USER,
            subject: `Admin request from ${Name || "User"}`,
            text: `
        Name: ${Name || ""}
        LastName: ${Phone || ""}
        Category: ${Message || ""}

      `,
        };


        try {
            await transporter.sendMail(mailOptions);
          
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}