"use client";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

const GitHubContributions = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full flex justify-center items-center flex-col pb-16"
    >
      {/* Title */}
      <div className="w-full flex items-center gap-4 mb-6">
        <div className=" p-3 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
          <svg
            className="w-6 h-6 text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87
              a3.37 3.37 0 0 0-.94-2.61
              c3.14-.35 6.44-1.54 6.44-7
              A5.44 5.44 0 0 0 20 4.77
              A5.07 5.07 0 0 0 19.91 1
              S18.73.65 16 2.48
              a13.38 13.38 0 0 0-7 0
              C6.27.65 5.09 1 5.09 1
              A5.07 5.07 0 0 0 5 4.77
              a5.44 5.44 0 0 0-1.5 3.78
              c0 5.42 3.3 6.61 6.44 7
              A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
          GitHub Contributions
        </h2>
      </div>

      {/* Grid */}
      <div className="w-[75%]  overflow-x-auto rounded-xl border border-blue-500/30  p-4 shadow-md">
        <div className="bg-[#000000] p-3">
          <GitHubCalendar username="amirsarani" />
        </div>
      </div>
    </motion.section>
  );
};

export default GitHubContributions;
