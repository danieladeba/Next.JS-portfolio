
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full py-8">
      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 space-y-6"
      >
        <h1 className="text-2xl sm:text-3xl text-emerald-200 font-semibold text-center">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
          {/* Project 1: Hotel Management System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center">
         
            <img
              src="h-m-s.jpeg"
              alt="Hotel Management System"
              className="w-full max-w-[400px] h-auto rounded-lg bg-amber-100 object-cover shadow-md"/>
            
            <h2 className="mt-2 text-sm sm:text-base font-medium text-center">Hotel Management System</h2>
            <p className="mt-1 text-xs sm:text-sm text-center text-gray-600">
              A Web application for managing hotel bookings, staff, and inventory, built with full-stack technologies.
            </p>
          </motion.div>
          {/* Project 2: Hospital Management System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center">
            <img
              src="hospital.jpeg"
              alt="Hospital Management System"
              className="w-full max-w-[400px] h-auto rounded-lg bg-amber-100 object-cover shadow-md"
            />
            <h2 className="mt-2 text-sm sm:text-base font-medium text-center">Hospital Management System</h2>
            <p className="mt-1 text-xs sm:text-sm text-center text-gray-600">
              A Web app for patient records, appointments, and hospital operations, designed for efficiency.
            </p>
          </motion.div>
          {/* Project 3: Microsoft Azure Clouding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <img
              src="msa.avif"
              alt="Microsoft Azure Clouding"
              className="w-full max-w-[400px] h-auto rounded-lg bg-amber-100 object-cover shadow-md"
            />
            <h2 className="mt-2 text-sm sm:text-base font-medium text-center">Microsoft Azure Clouding</h2>
            <p className="mt-1 text-xs sm:text-sm text-center text-gray-600">
              A cloud-based project leveraging Azure for scalable infrastructure and data management.
            </p>
          </motion.div>
          {/* Project 4: Music Player App */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <img
              src="mas.jpeg"
              alt="Music Player App"
              className="w-full max-w-[400px] h-auto rounded-lg bg-amber-100 object-cover shadow-md"
            />
            <h2 className="mt-2 text-sm sm:text-base font-medium text-center">Music Player App</h2>
            <p className="mt-1 text-xs sm:text-sm text-center text-gray-600">
              A web-based music player with playlist management and a user-friendly interface.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row md:gap-12 lg:gap-16 items-start justify-between px-4 sm:px-6 lg:px-8">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0 w-full md:w-5/12"
        >
          <img
            src="/Ph.jpg"
            alt="Daniel Adeba"
            className=" w-100 h-100 rounded-full  sm:max-w-[350px] md:max-w-[400px] bg-amber-100 object-cover shadow-lg mx-auto md:mx-0 "
          />
        </motion.div>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-7/12 mt-6 md:mt-0 space-y-4 sm:space-y-5"
        >
          <h1 className="text-2xl  text-cyan-200 sm:text-3xl  font-semibold">About Me</h1>
          <p className="text-sm sm:text-base">
            I'm a final-year Computer Engineering student at AAiT with experience in full-stack development, cloud
            computing, and cybersecurity.
          </p>
              <p className="text-sm sm:text-base">
                I’ve built applications like a Hospital Management System and Hotel Management System, and worked as an IT
                practitioner at Commercial Bank of Ethiopia...
              </p>
              {isExpanded && (
            < >
              <p className="text-sm sm:text-base">
                I am a skilled web designer with over 3 years of experience in the industry. My passion lies in creating
                captivating website designs and implementing them through frontend development. I take pride in staying
                up-to-date with current design trends and leveraging my creativity to produce visually appealing and
                user-friendly websites. Throughout my progress, I have developed a deep understanding of user experience (UX)
                and user interface (UI) principles. By putting myself in the shoes of the end users, I strive to create
                intuitive and seamless browsing experiences. I believe that a well-designed website should not only look
                visually appealing but also provide a smooth and enjoyable interaction for visitors. When starting a new
                project, I thoroughly research and analyze the target audience and the client's specific requirements. This
                enables me to tailor my designs to meet their expectations and deliver a unique online presence that aligns with
                their brand identity.
              </p>
            </>
          )}
          <button
            onClick={toggleExpand}
            className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm sm:text-base"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
          <Link href="/background">
            <button className="mt-10 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm sm:text-base">
              View Background
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}