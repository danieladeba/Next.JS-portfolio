
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { main } from 'framer-motion/client';

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
  
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
  
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
  
//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     });
//     alert(res.ok ? 'Message sent!' : 'Failed to send');
//   };
//   return (
//     <motion.form
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       onSubmit={handleSubmit}
//        className=" space-y-16 max-w-40 text-left left-0 mx-auto rounded-bl-lg border-b-purple-700">
//       <h1 className="px-10 py-0.5 text-left bg-emerald-500 rounded text-lg flex-row font-semibold" >Hire Me</h1>
// {/* //        <main className=" flex justify-content: space-between align-items: center gap: 20px" >
// //       <div className=" flex-col text-left left-0 w-full justify-content space between items-center gap-4">
      
// //       < label className="block w-[350px] text-left text-lg font-medium mb-2"> Name<input type="text" className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter your name"/></label>
// //       <label className="block  w-[350px] text-lg font-medium mb-2">Email
// //       <input type="email" required className="input w-full p-7 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" name="email" onChange={handleChange} placeholder="Email" /></label>
// //       <label className="block w-[360px] text-lg font-medium mb-2">Message
// //       <textarea  required className="input rows={5} w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[200px]"  name="message" onChange={handleChange} placeholder="Your message" /></label>
// //       <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Send Message</button></div>
// //       <div  className=' max-w-full ' >
// //         <h3>Hiiring means Boosting your Company </h3>
// //         </div>
// //       </main> 
// //     </motion.form>
// //   );
// // } */}

// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     });

//     alert(res.ok ? 'Message sent!' : 'Failed to send');
//   };

//   return (
//     <motion.form
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       onSubmit={handleSubmit}
//       className="w-full"
//     >
//       {/* Section Title */}
//       <h1 className="bg-emerald-500 text-white text-lg font-semibold py-2 px-4 w-fit rounded">Hire Me</h1>

//       {/* Main Layout */}
//       <main className="flex flex-col md:flex-row gap-10 w-full px-4 md:px-12 mt-8">

//         {/* LEFT SIDE — FORM */}
//         <div className="w-full md:w-1/2 space-y-6">
//           <label className="block text-left text-lg font-medium">
//             Name
//             <input
//               type="text"
//               name="name"
//               onChange={handleChange}
//               className="w-full p-4 mt-1 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your name"
//             />
//           </label>

//           <label className="block text-left text-lg font-medium">
//             Email
//             <input
//               type="email"
//               required
//               name="email"
//               onChange={handleChange}
//               className="w-full p-4 mt-1 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="Email"
//             />
//           </label>

//           <label className="block text-left text-lg font-medium">
//             Message
//             <textarea
//               name="message"
//               required
//               onChange={handleChange}
//               className="w-full p-4 mt-1 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[200px]"
//               placeholder="Your message"
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
//           >
//             Send Message
//           </button>
//         </div>

//         {/* RIGHT SIDE — SLOGAN */}
//         <div className="w-full md:w-1/2 flex items-center justify-center text-white">
//           <h3 className="text-center text-6xl font-semibold leading-relaxed max-w-sm">
//             Hiring me <br />
//             means <br />
//             Boosting your <br />
//             Company 🚀
//           </h3>
//         </div>
//       </main>

//       {/* Footer */}
//       <div className="text-center text-sm text-gray-400 mt-10">
//         {/* © 2025 Daniel Adeba */}
//       </div>
//     </motion.form>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaTelegram, FaGithub, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert(res.ok ? "Message sent!" : "Failed to send");
  };
  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="w-full"
    >
      {/* Section Title */}
      <h1 className="bg-emerald-500 text-white text-lg font-semibold py-2 px-4 w-fit rounded">Hire Me</h1>

      {/* Main Layout */}
      <main className="flex flex-col md:flex-row gap-8 w-full px-4 sm:px-6 md:px-12 mt-8">
        {/* LEFT SIDE — FORM */}
        <div className="w-full md:w-1/2 space-y-6">
          <label className="block text-left text-base sm:text-lg font-medium">
            Name
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full p-3 sm:p-4 mt-1 text-base sm:text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </label>

          <label className="block text-left text-base sm:text-lg font-medium">
            Email
            <input
              type="email"
              required
              name="email"
              onChange={handleChange}
              className="w-full p-3 sm:p-4 mt-1 text-base sm:text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </label>

          <label className="block text-left text-base sm:text-lg font-medium">
            Message
            <textarea
              name="message"
              required
              onChange={handleChange}
              className="w-full p-3 sm:p-4 mt-1 text-base sm:text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[150px] sm:min-h-[200px]"
              placeholder="Your message"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-base sm:text-lg"
          >
            Send Message
          </button>
        </div>

        {/* RIGHT SIDE — SLOGAN, LET'S WORK TOGETHER, SOCIAL BUTTONS */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-white space-y-6 sm:space-y-8">
          {/* Slogan */}
          {/* <h3 className="text-center text-1xl sm:text-5xl md:text-6xl font-semibold leading-relaxed max-w-sm">
            Hiring me <br />
            means <br />
            Boosting your <br />
            Company 🚀
            I am an energetic web developer with qualities of being punctual, a problem solver, sociable, extrovert, and
            caring, with a dedication to adding value to your company... so reach me!
          </h3> */}

          {/* Let's Work Together Section */}
          <div className="bg-gradient-to-r from-emerald-400 to-blue-500 p-4 sm:p-6 rounded-xl shadow-lg max-w-md w-full text-center">
            <h1 className="text-3xl text-amber-300 font-bold mb-3 sm:mb-4">Let's Work Together</h1>
            <p className="text-2xl  leading-relaxed">
              I am an energetic web developer with qualities of being punctual, a problem solver, sociable, extrovert, and
              Team Worker, with a dedication to adding value to your company... <br />
               Reach me!
            </p>
          </div>
          {/* Social Media Buttons */}
          <div className="flex  py-60 flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full hover:bg-green-600 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-white text-xl sm:text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-full hover:bg-blue-800 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-white text-xl sm:text-2xl" />
            </a>
            <a
              href="https://t.me/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 rounded-full hover:bg-blue-500 transition"
              aria-label="Telegram"
            >
              <FaTelegram className="text-white text-xl sm:text-2xl" />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full hover:bg-gray-900 transition"
              aria-label="GitHub"
            >
              <FaGithub className="text-white text-xl sm:text-2xl" />
            </a>
            <a
              href="https://youtube.com/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full hover:bg-red-700 transition"
              aria-label="YouTube"
            >
              <FaYoutube className="text-white text-xl sm:text-2xl" />
            </a>
          </div>
        </div>
      </main>
    </motion.form>
  );
}