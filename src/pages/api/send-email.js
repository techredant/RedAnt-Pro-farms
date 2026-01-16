import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { Name, Email, phone, message } = req.body;

    if (!Name || !Email || !message) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields",
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER, // your gmail
                pass: process.env.PASS, // app password
            },
        });

        const mailOptions = {
            from: `"Website Contact" <${process.env.USER}>`,
            to: process.env.USER,
            replyTo: Email,
            subject: `New Quote Request from ${Name}`,
            text: `
Name: ${Name}
Email: ${Email}
Phone: ${phone || "N/A"}

Message:
${message}
      `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: "Email sent successfully!",
        });
    } catch (error) {
        console.error("Email error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to send email",
        });
    }
}
