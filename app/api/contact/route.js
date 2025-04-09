

import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ success: false, error: 'Missing fields' }), { status: 400 });
  }

  // Transporter setup (for Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
       user: process.env.EMAIL_USER, // your Gmail address
       pass: process.env.EMAIL_PASS, // your Gmail app password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // your receiving email
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}

