
"use client";
import { motion } from "framer-motion";
import { FaReact, FaDatabase, FaJava, FaCss3Alt, FaCloud, FaShieldAlt, FaProjectDiagram } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTensorflow } from "react-icons/si";
export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className=" bg-gradient-to-r from-neutral-700 w-full  text-white px-4 sm:px-6 md:px-12 py-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center">Experience & Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <ul className="space-y-4 list-none">
            <li className="flex items-center gap-3 p-3 sm:p-4 border border-cyan-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition duration-300">
              <FaReact className="text-cyan-400 text-5xl sm:text-6xl md:text-9xl" />
              <span className="text-sm sm:text-base">Full-stack development with Next.js, React.JS, Node.JS</span>
            </li>
            <li className="flex items-center gap-3 p-3 sm:p-4 border border-green-500 rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition duration-300">
              <SiMongodb className="text-green-500 text-5xl sm:text-6xl md:text-9xl" />
              <span className="text-sm sm:text-base">Database: MySQL, MongoDB, NoSQL</span>
            </li>
            <li className="flex items-center gap-3 p-3 sm:p-4 border border-yellow-500 rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 transition duration-300">
              <FaJava className="text-orange-400 text-5xl sm:text-6xl md:text-9xl" />
              <span className="text-sm sm:text-base">Languages: Next.JS, Java, Python, C++, JavaScript</span>
            </li>
            <li className="flex items-center gap-3 p-3 sm:p-4 border border-blue-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition duration-300">
              <SiTailwindcss className="text-blue-400 text-5xl sm:text-6xl md:text-9xl" />
              <span className="text-sm sm:text-base">Frontend: Vue, Next.JS, React.JS, Tailwind CSS</span>
            </li>
            <li className="flex items-center gap-3 p-3 sm:p-4 border border-pink-400 rounded-xl hover:shadow-lg hover:shadow-pink-400/30 transition duration-300">
              <FaDatabase className="text-pink-400 text-5xl sm:text-6xl md:text-9xl" />
              <span className="text-sm sm:text-base">Backend APIs, Express, Node.JS & cloud integration</span>
            </li>
          </ul>
          <ul className="space-y-4 list-none">
            <li className="flex items-center gap-3 p-3 sm:p-4 border border-emerald-400 rounded-xl hover:shadow-lg hover:shadow-emerald-400/30 transition duration-300">
              <FaCss3Alt className="text-emerald-300 text-5xl sm:text-6xl md:text-9xl" />
              <span className="text-sm sm:text-base">Responsive design & cross-device support</span>
            </li>
            <li className="flex items-center gap-3 p-3 sm:p-4 border border-red-400 rounded-xl hover:shadow-lg hover:shadow-red-400/30 transition duration-300">
              <FaShieldAlt className="text-red-400 text-5xl sm:text-6xl md:text-9xl" />
              <span className="text-sm sm:text-base">Cybersecurity & Network Security</span>
            </li>
            <li className="flex items-center gap-3 p-3 sm:p-4 border border-sky-400 rounded-xl hover:shadow-lg hover:shadow-sky-400/30 transition duration-300">
              <FaCloud className="text-sky-400 text-5xl sm:text-6xl md:text-9xl" />
              <span className="text-sm sm:text-base">Cloud: Microsoft Azure</span>
            </li>
            <li className="flex items-center gap-3 p-3 sm:p-4 border border-yellow-300 rounded-xl hover:shadow-lg hover:shadow-yellow-300/30 transition duration-300">
              <SiTensorflow className="text-yellow-300 text-5xl sm:text-6xl md:text-9xl" />
              <span className="text-sm sm:text-base">AI & ML: TensorFlow basics</span>
            </li>
            <li className="flex items-center gap-3 p-3 sm:p-4 border border-purple-400 rounded-xl hover:shadow-lg hover:shadow-purple-400/30 transition duration-300">
              <FaProjectDiagram className="text-purple-400 text-5xl sm:text-6xl md:text-9xl" />
              <span className="text-sm sm:text-base">Projects: Hospital Management, Hotel Management, Music App System</span>
            </li>
          </ul>
        </div>
      </section>
    </motion.div>
  );
}