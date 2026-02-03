"use client";
import { motion } from "framer-motion";

const GithubInformation = [
  {
    title: "Followers",
    image: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    counts: "167",
  },

  {
    title: "Following",
    image: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
    counts: "41",
  },

  {
    title: "Love Count",
    image: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    counts: "❤️ 1438",
  },

  {
    title: "Views",
    image: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    counts: "11535",
  },
];

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
      <div className="w-[75%]  overflow-x-auto rounded-xl border border-blue-500/30 bg-[#0d1117] p-4 shadow-md">
        <div className="grid grid-flow-col auto-cols-max gap-1">
          {/* {contributions.map((item, index) => (
            <div
              key={index}
              title={`${item.date}`}
              className={`h-3 w-3 rounded-sm border border-white/5 
                ${levelColors[item.level]}`}
            />
          ))} */}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-[90%] lg:w-[80%] xl:w-[78%] mx-auto mt-6"
      >
        {GithubInformation.map((text, index) => (
          <div
            Key={index}
            className="bg-gray-900/30 border border-blue-500/30 hover:bg-gray-800/50 transition-all duration-300 flex flex-col items-center justify-center p-3 rounded-lg text-center h-[70px] md:h-[80px] lg:h-[85px] w-[90%] md:w-[85%] lg:w-[80%] mx-auto"
          >
            <div className="mb-1 text-blue-400">{text.image}</div>
            <p className="text-[11px] md:text-[12px] font-medium text-gray-400">
              {text.title}
            </p>
            <p className="text-[13px] md:text-[14px] font-semibold text-white">
              {text.counts}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default GitHubContributions;
