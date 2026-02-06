"use client";

import { Briefcase } from "lucide-react";
// import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import instance from "@/Api/axios";

const list = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

type TPjourney = {
  roleOne: {
    jobTitle: string;
    jobPlace: string;
    jobDate: string;
    jobBodyText: string;
    jobKeywords: string;
  };
};

const Journey = () => {
  const { data, isLoading, error } = useQuery<TPjourney[]>({
    queryKey: ["myJourney"],
    queryFn: async () => {
      const res = await instance.get("AllApi/myJourney");
      return res.data;
    },
  });

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  };

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
        ease: "easeOut",
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
        ease: "easeOut",
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
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={list}
      initial="hidden"
      animate="visible"
      className="mb-16"
    >
      {/* Header */}

      <motion.div
        className="mb-12"
        variants={headerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div
          className="flex items-center gap-4 mb-4"
          variants={headerItem}
        >
          <motion.div
            variants={iconVariant}
            className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
          >
            <Briefcase className="w-6 h-6 text-blue-400" />
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
            variants={headerItem}
          >
            Professional Journey
          </motion.h2>
        </motion.div>

        <motion.div
          variants={lineVariant}
          style={{ originX: 0 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-full"
        />
      </motion.div>

      {/* Experiences */}
      <div className="space-y-12">
        {/* Experience 1 */}
        {/* <FadeIn delay={0.15}> */}
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {data?.[0]?.roleOne.jobTitle}
              </h3>
              <p className="text-blue-400 font-medium text-lg">
                {data?.[0]?.roleOne.jobPlace}
              </p>
            </div>
            <span className="text-gray-400">{data?.[0]?.roleOne.jobDate}</span>
          </div>
          <p className="text-lg text-gray-200 mb-2">
            {data?.[0]?.roleOne.jobBodyText}
          </p>
          <motion.ul
            // variants={list}
            // initial="hidden"
            // whileInView="show"
            // viewport={{ once: true }}
            className="space-y-2 mb-8 pl-3"
          >
            {data?.[0]?.roleOne.jobKeywords.map((text, index) => (
              <motion.li
                key={index}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                className="flex items-start gap-3 text-gray-300 text-lg"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Journey;
