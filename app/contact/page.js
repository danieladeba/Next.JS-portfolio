// 'use client';
// import { useState } from 'react';

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       body: JSON.stringify(form),
//     });
//     alert(res.ok ? 'Message sent!' : 'Failed to send');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
//       <h1 className="text-2xl font-semibold">Hire Me</h1>
//       <input type="text" name="name" onChange={handleChange} placeholder="Full Name" required className="input" />
//       <input type="email" name="email" onChange={handleChange} placeholder="Email" required className="input" />
//       <textarea name="message" onChange={handleChange} placeholder="Your message" className="input" />
//       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
//     </form>
//   );
// }

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    alert(res.ok ? 'Message sent!' : 'Failed to send');
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto"
    >
      <h1 className="text-2xl font-semibold">Hire Me</h1>
      <input type="text" name="name" onChange={handleChange} placeholder="Full Name" required className="input" />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required className="input" />
      <textarea name="message" onChange={handleChange} placeholder="Your message" className="input" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </motion.form>
  );
}
