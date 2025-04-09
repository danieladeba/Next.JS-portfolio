// export default function About() {
//     return (
//       <div>
//         <h1 className="text-3xl font-semibold mb-4">About Me</h1>
//         <p>
//           I'm a final-year Computer Engineering student at Addis Ababa Institute of Technology with experience in full-stack development, cloud computing, and cybersecurity.
//         </p>
//         <p className="mt-2">
//           I've built applications like a Hospital Management System and Hotel Management System. Currently working as an IT practitioner at the Commercial Bank of Ethiopia.
//         </p>
//       </div>
//     );
//   }
  

  'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      <h1 className="text-3xl font-semibold">About Me</h1>
      <p>
        I'm a final-year Computer Engineering student at AAiT with experience in full-stack development, cloud computing, and cybersecurity.
      </p>
      <p>
        I’ve built applications like a Hospital Management System and Hotel Management System, and worked as an IT practitioner at Commercial Bank of Ethiopia.
      </p>
    </motion.div>
  );
}
