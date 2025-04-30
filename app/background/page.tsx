"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Background() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">My Background</h1>
        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 w-1 bg-amber-300 h-full"></div>

          {/* Timeline Item: ODA Special Boarding School */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative ml-10 md:ml-16"
          >
            <div className="absolute -left-6 top-1 w-4 h-4 bg-amber-500 rounded-full"></div>
            <h2 className="text-lg sm:text-xl font-medium">ODA Special Boarding School</h2>
            <p className="text-sm sm:text-base text-gray-600">2017 - 2021</p>
            <p className="text-sm sm:text-base mt-2">
              Studied from Grade 8 to Grade 12 at ODA Special Boarding School. Achieved top scorer status in the Grade 8
              Regional Examination with an average score of 94/100.
            </p>
          </motion.div>

          {/* Timeline Item: Addis Ababa University */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative ml-10 md:ml-16"
          >
            <div className="absolute -left-6 top-1 w-4 h-4 bg-amber-500 rounded-full"></div>
            <h2 className="text-lg sm:text-xl font-medium">Addis Ababa University</h2>
            <p className="text-sm sm:text-base text-gray-600">2021</p>
            <p className="text-sm sm:text-base mt-2">
              Joined Addis Ababa University after scoring 620/700 in the Grade 12 National Examination of Ethiopia.
            </p>
          </motion.div>

          {/* Timeline Item: AAiT Software Engineering */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative ml-10 md:ml-16"
          >
            <div className="absolute -left-6 top-1 w-4 h-4 bg-amber-500 rounded-full"></div>
            <h2 className="text-lg sm:text-xl font-medium">Addis Ababa Institute of Technology (AAiT)</h2>
            <p className="text-sm sm:text-base text-gray-600">2021 - Present</p>
            <p className="text-sm sm:text-base mt-2">
              Studying Software Engineering, focusing on full-stack development, cloud computing, and cybersecurity.
            </p>
          </motion.div>
        </div>

        {/* Awards Section */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-center">Awards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Award 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <img
                src="/award1.jpg"
                alt="Award 1"
                className="w-full max-w-[200px] h-auto rounded-lg bg-amber-100 object-cover shadow-md"
              />
              <p className="mt-2 text-sm sm:text-base text-center">Award 1</p>
            </motion.div>
            {/* Award 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <img
                src="/award2.jpg"
                alt="Award 2"
                className="w-full max-w-[200px] h-auto rounded-lg bg-amber-100 object-cover shadow-md"
              />
              <p className="mt-2 text-sm sm:text-base text-center">Award 2</p>
            </motion.div>
            {/* Award 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <img
                src="/award3.jpg"
                alt="Award 3"
                className="w-full max-w-[200px] h-auto rounded-lg bg-amber-100 object-cover shadow-md"
              />
              <p className="mt-2 text-sm sm:text-base text-center">Award 3</p>
            </motion.div>
          </div>
        </div>

        {/* Back to About Button */}
        <div className="text-center">
          <Link href="/about">
            <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm sm:text-base">
              Back to About
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}