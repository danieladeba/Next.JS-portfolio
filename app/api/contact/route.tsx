

// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   const { name, email, message } = await request.json();

//   if (!name || !email || !message) {
//     return new Response(JSON.stringify({ success: false, error: 'Missing fields' }), { status: 200 });
//   }

//   // Transporter setup (for Gmail)
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//        user: process.env.EMAIL_USER, // your Gmail address
//        pass: process.env.EMAIL_PASS, // your Gmail app password
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER, // your receiving email
//     subject: `Message from ${name}`,
//     text: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return new Response(JSON.stringify({ success: false }), { status: 500 });
//   }
// }




import nodemailer from 'nodemailer';
import { z } from 'zod';
// Define schema for input validation
const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  message: z.string().min(1, 'Message is required').max(1000, 'Message is too long'),
});
export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const { name, email, message } = ContactSchema.parse(body);

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration');
      return new Response(
        JSON.stringify({ success: false, error: 'Server configuration error' }),
        { status: 500 }
      );
    }

    // Transporter setup for Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender appears as authenticated user
      replyTo: email, // User’s email for replies
      to: process.env.EMAIL_USER,
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ success: true, error: null }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact route:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ success: false, error: error.errors[0].message }),
        { status: 400 }
      );
    }

    // Handle other errors
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send email' }),
      { status: 500 }
    );
  }
}
