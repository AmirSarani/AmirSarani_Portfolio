"use client";

import Link from "next/link";
import logo from "@/public/logo.webp";
import Image from "next/image";
import Clock from "@/app/components/Clock";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-[56px]  flex justify-center items-center sticky "
    >
      <div className="w-[96%] h-[36px]  flex justify-between items-center">
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

          <span className="text-[18px]">Amir.Sarani</span>
        </Link>

        <div className="text-[16px] text-[#99A1AF]">
          <Clock />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
