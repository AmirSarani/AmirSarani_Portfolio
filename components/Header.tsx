import Link from "next/link";
import logo from "@/public/logo.webp";
import Image from "next/image";
import Clock from "@/app/components/Clock";

const Header = () => {
  return (
    <div className="w-full h-[56px]  flex justify-center items-center sticky ">
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
    </div>
  );
};

export default Header;
