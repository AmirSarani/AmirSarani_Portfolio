"use client";

import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
import Clock from "@/app/components/Clock";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-[56px]  flex justify-center items-center sticky top-0  backdrop-blur-md z-50 "
    >
      <div className="w-[96%] h-[36px]  flex justify-between items-center px-5 md:px-0">
        <Link
          href=""
          className="
        flex justify-between items-center gap-[10px]"
        >
          <Image
            src={logo}
            alt="logo"
            className="w-[32px] h-[32px] rounded-full"
          />

          <span className="text-[22px] md:text-[20px]">Amir.Sarani</span>
        </Link>

        <div className="text-[16px] text-[#99A1AF]">
          <Clock className="text-[18px]  md:text-[20px]" />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
