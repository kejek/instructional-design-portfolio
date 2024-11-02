import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: 587,
	auth: {
	  user: process.env.EMAIL_USER,
	  pass: process.env.EMAIL_PASSWORD,
	}
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <mandieportfolio@gmail.com>`,
      to: "mandielcarter@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}