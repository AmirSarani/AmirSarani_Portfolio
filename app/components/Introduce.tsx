/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import prof from "@/public/porof.jpeg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

import { useQuery } from "@tanstack/react-query";
import instance from "@/Api/axios";

type TPaboute = {
  title: string;
  body: string;
};

const Introduce = () => {
  const { data, isLoading, error } = useQuery<TPaboute[]>({
    queryKey: ["abouteMe"],
    queryFn: async () => {
      const res = await instance.get("AllApi/abouteMe");
      return res.data;
    },
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.12,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <motion.div
      variants={container as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16"
    >
      {/* LEFT */}
      <div className="flex flex-col items-center lg:items-start">
        {/* Avatar */}
        <motion.div
          variants={item as any}
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
          variants={item as any}
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
          Tehran, Iran
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={item as any}
          className="flex w-full items-center gap-4 justify-start"
        >
          <Link href="https://github.com/AmirSarani" target="_blank">
            <FaGithub className="w-8 h-8 text-gray-200 hover:text-gray-500 transition" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/amir-sarani-6497a5322/"
            target="_blank"
          >
            <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-700 transition" />
          </Link>
          {/* 
          <Link href="https://x.com/env_aditya" target="_blank">
            <FaXTwitter className="w-8 h-8 text-gray-200 hover:text-gray-500 transition" />
          </Link>

          <Link href="https://www.instagram.com/adittya.tsx" target="_blank">
            <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700 transition" />
          </Link> */}
        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 text-center lg:text-left">
        {/* CTA */}
        <motion.div
          variants={item as any}
          className="flex justify-center lg:justify-start items-center gap-4 mb-6"
        ></motion.div>

        {/* Name */}
        <motion.h1
          variants={item as any}
          className="text-4xl lg:text-6xl font-bold mb-3 tracking-tight"
        >
          Amir Sarani
        </motion.h1>

        {/* {data?.map((text, index) => {
          console.log(text, "text");
          return ( */}
        <div>
          <motion.p
            variants={item as any}
            className="text-xl text-gray-400 mb-5"
          >
            {data?.[0]?.title}
          </motion.p>

          <motion.p
            variants={item as any}
            className="text-gray-300 leading-relaxed text-lg max-w-2xl"
          >
            {data?.[0]?.body}
          </motion.p>
        </div>
        {/* );
        })} */}
      </div>
    </motion.div>
  );
};

export default Introduce;
