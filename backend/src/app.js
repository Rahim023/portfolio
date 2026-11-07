const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const app = express();
app.use(express.json({ limit: "20kb" }));
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));

app.get("/api/health", (_request, response) => response.json({ status: "ok" }));

app.post("/api/contact", async (request, response) => {
  const { name, email, subject, message, website } = request.body || {};
  if (website) return response.status(400).json({ message: "Request rejected." });

  if (
    typeof name !== "string" || name.trim().length < 2 || name.trim().length > 80 ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof subject !== "string" || subject.trim().length < 3 || subject.trim().length > 120 ||
    typeof message !== "string" || message.trim().length < 20 || message.trim().length > 2000
  ) {
    return response.status(400).json({ message: "Please check the form fields and try again." });
  }
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return response.status(503).json({ message: "Email service is not configured yet." });
  }

  try {
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeSubject = escapeHtml(subject.trim());
    const safeMessage = escapeHtml(message.trim());
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    const plainMessage = message.trim().replace(/\r/g, "").replace(/\n/g, "\n");
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: email.trim(),
      subject: `${subject.trim()} — ${name.trim()}`,
      text: `New portfolio inquiry\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${plainMessage}\n\nSent from Abdul Rahim's portfolio contact form.`,
      html: `
<!doctype html>
<html>
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Portfolio inquiry</title></head>
  <body style="margin:0;background:#f1f3f6;font-family:Inter,Arial,sans-serif;color:#17191f">
    <div style="max-width:640px;margin:0 auto;padding:32px 16px">
      <div style="margin-bottom:16px;text-align:center;color:#697080;font-size:12px;letter-spacing:.12em;text-transform:uppercase">Abdul Rahim · Portfolio</div>
      <div style="overflow:hidden;border-radius:18px;border:1px solid #e1e5ea;background:#ffffff;box-shadow:0 18px 50px rgba(23,25,31,.08)">
        <div style="padding:28px 34px;background:#111318;color:#ffffff">
          <div style="font-size:11px;color:#67d7a3;text-transform:uppercase;letter-spacing:.14em">New website inquiry</div>
          <h1 style="margin:12px 0 0;font-size:28px;line-height:1.15;letter-spacing:-.03em">${safeSubject}</h1>
        </div>
        <div style="padding:30px 34px">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
            <tr><td style="padding:0 0 18px;width:70px;color:#858b98;font-size:12px;vertical-align:top">From</td><td style="padding:0 0 18px;font-size:15px;font-weight:700">${safeName}</td></tr>
            <tr><td style="padding:0 0 18px;color:#858b98;font-size:12px;vertical-align:top">Email</td><td style="padding:0 0 18px;font-size:15px"><a href="mailto:${safeEmail}" style="color:#4f46e5;text-decoration:none">${safeEmail}</a></td></tr>
          </table>
          <div style="height:1px;background:#e8eaee;margin:3px 0 24px"></div>
          <div style="margin-bottom:10px;color:#858b98;font-size:12px;text-transform:uppercase;letter-spacing:.08em">Message</div>
          <div style="border-radius:12px;background:#f4f5f7;padding:20px;font-size:15px;line-height:1.65;color:#343740;white-space:pre-wrap">${safeMessage}</div>
          <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(subject.trim())}" style="display:inline-block;margin-top:24px;border-radius:999px;background:#111318;color:#ffffff;text-decoration:none;padding:13px 18px;font-size:13px;font-weight:700">Reply to ${safeName}</a>
        </div>
      </div>
      <div style="padding-top:16px;text-align:center;color:#8a909b;font-size:11px">Received through the portfolio contact form</div>
    </div>
  </body>
</html>`
    });
    return response.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email failed:", error.message);
    return response.status(500).json({ message: "Unable to send your message right now." });
  }
});

module.exports = app;
