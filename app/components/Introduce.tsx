"use client";

import prof from "@/public/porof.jpeg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Introduce = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.12,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16"
    >
      {/* LEFT */}
      <div className="flex flex-col items-center lg:items-start">
        {/* Avatar */}
        <motion.div
          variants={item}
          className="relative w-40 h-40 mb-6 rounded-full ring-2 ring-gray-800 overflow-hidden bg-gray-900/50"
        >
          <Image
            src={prof}
            alt="Amir Sarani"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Location */}
        <motion.div
          variants={item}
          className="flex items-center gap-2 text-sm text-gray-400 mb-4"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Ngp, Maharashtra, India
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={item}
          className="flex w-full items-center gap-4 justify-between"
        >
          <Link href="https://github.com/adityadomle" target="_blank">
            <FaGithub className="w-8 h-8 text-gray-200 hover:text-gray-500 transition" />
          </Link>

          <Link href="https://www.linkedin.com/in/adityadomle" target="_blank">
            <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-700 transition" />
          </Link>

          <Link href="https://x.com/env_aditya" target="_blank">
            <FaXTwitter className="w-8 h-8 text-gray-200 hover:text-gray-500 transition" />
          </Link>

          <Link href="https://www.instagram.com/adittya.tsx" target="_blank">
            <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700 transition" />
          </Link>
        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 text-center lg:text-left">
        {/* CTA */}
        <motion.div
          variants={item}
          className="flex justify-center lg:justify-start items-center gap-4 mb-6"
        >
          <Link
            href="mailto:adityadomle14@gmail.com"
            className="flex items-center border border-blue-700/50 text-blue-300 hover:bg-blue-900/30 transition-all duration-300 py-2 px-4 rounded-sm"
          >
            {/* <Calendar className="w-4 h-4 mr-2" /> */}
            Schedule a call
          </Link>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-4xl lg:text-6xl font-bold mb-3 tracking-tight"
        >
          Amir Sarani
        </motion.h1>

        {/* Role */}
        <motion.p variants={item} className="text-xl text-gray-400 mb-5">
          Full-Stack Developer | Next.js, React, Node.js
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={item}
          className="text-gray-300 leading-relaxed text-lg max-w-2xl"
        >
          Self-taught Full-Stack Developer from India, specializing in modern
          web technologies and open-source development. Passionate about
          building scalable applications with Next.js and contributing to the
          developer community through open-source projects.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Introduce;
