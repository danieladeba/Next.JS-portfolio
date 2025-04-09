// export default function Experience() {
//     return (
//       <div>
//         <h1 className="text-3xl font-semibold mb-4">Skills & Experience</h1>
//         <ul className="list-disc pl-6">
//           <li>Frontend: React, Tailwind CSS</li>
//           <li>Backend: Node.js, Express, MongoDB</li>
//           <li>Cybersecurity: Penetration Testing, Network Security</li>
//           <li>Cloud: Microsoft Azure</li>
//           <li>AI & ML: Basics of TensorFlow and AI concepts</li>
//           <li>Project: Hospital Management System, Hotel Management System, Music App</li>
//         </ul>
//       </div>
//     );
//   }

  'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      <h1 className="text-3xl font-semibold">Skills & Experience</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>Frontend: React, Tailwind CSS</li>
        <li>Backend: Node.js, Express, MongoDB</li>
        <li>Cybersecurity: Penetration Testing, Network Security</li>
        <li>Cloud: Microsoft Azure</li>
        <li>AI & ML: Basics of TensorFlow and AI concepts</li>
        <li>Projects: Hospital & Hotel Management Systems, Music App</li>
      </ul>
    </motion.div>
  );
}
