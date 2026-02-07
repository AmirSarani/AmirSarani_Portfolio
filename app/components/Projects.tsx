/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import instance from "@/Api/axios";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import Image from "next/image";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiGit,
  SiVercel,
  SiBootstrap,
  SiSass,
} from "react-icons/si";

const skillsMap = {
  javascript: { icon: SiJavascript, color: "text-yellow-400" },
  typescript: { icon: SiTypescript, color: "text-blue-500" },
  react: { icon: SiReact, color: "text-blue-400" },
  next: { icon: SiNextdotjs, color: "text-white" },
  tailwind: { icon: SiTailwindcss, color: "text-cyan-400" },
  bootstrap: { icon: SiBootstrap, color: "text-blue-600" },
  sass: { icon: SiSass, color: "text-pink-600" },
  node: { icon: SiNodedotjs, color: "text-green-500" },
  mongodb: { icon: SiMongodb, color: "text-green-600" },
  docker: { icon: SiDocker, color: "text-blue-500" },
  git: { icon: SiGit, color: "text-orange-500" },
  vercel: { icon: SiVercel, color: "text-white" },
};

type TPprojects = {
  title: string;
  image: string;
  desc: string;
  live: string;
  github: string;
  tech: string[];
};

const Projects = () => {
  const { data, isLoading, error } = useQuery<TPprojects[]>({
    queryKey: ["myProject"],
    queryFn: async () => {
      const res = await instance.get("AllApi/myProject");
      return res.data;
    },
  });

  console.log(data, "data");

  const headerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headerItem = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const iconVariant = {
    hidden: {
      opacity: 0,
      rotate: -90,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const lineVariant = {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <section className="mb-16">
      {/* Title */}
      <motion.div
        variants={headerContainer as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        style={{ opacity: 1, transform: "none" }}
        className="mb-12"
      >
        <motion.div
          variants={headerItem as any}
          className="flex items-center gap-4 mb-4"
        >
          <motion.div
            variants={iconVariant as any}
            style={{ transform: "none" }}
            className="p-3 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-blue-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </motion.div>
          <motion.h2
            variants={headerItem as any}
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
        </motion.div>
        <motion.div
          variants={lineVariant as any}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        />
      </motion.div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {data?.map((p, i) => {
          // const Icon = p.icon;

          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              key={i}
              className="group rounded-xl overflow-hidden border border-blue-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-800">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex justify-between items-center">
                  {p.title}
                  <div className="flex gap-3 mb-3">
                    <div className="flex flex-wrap gap-3 mt-3">
                      {p.tech?.map((t: any, index) => {
                        const skill = (skillsMap as any)[t];
                        if (!skill) return null;

                        const Icon = skill.icon;

                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                          >
                            <Icon
                              key={t}
                              className={`w-6 h-6 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {p.desc}
                </p>

                <div className="flex items-center gap-4 text-sm">
                  <a
                    href={p.live}
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition flex justify-center items-center gap-2 
  duration-300 
  hover:scale-110 
  hover:translate-x-1"
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    className="text-gray-400 hover:text-gray-300 transition flex justify-center items-center gap-2 duration-300 
hover:scale-110 hover:translate-x-1"
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
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
