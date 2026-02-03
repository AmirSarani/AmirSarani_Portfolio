import Image from "next/image";

const Achievements = () => {
  return (
    <div className="mb-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
            <svg
              viewBox="0 0 512 512"
              className="w-6 h-6 text-blue-400"
              fill="currentColor"
            >
              <path d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z" />
            </svg>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
            Achievements & Badges
          </h2>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {[
          {
            href: "/images/certifications/cert1.webp",
            title: "Full Stack + DevOps",
            img: "/cert1.jpg",
          },
          {
            href: "https://www.hackerrank.com/certificates/bd2d5b312338",
            title: "JavaScript (HackerRank)",
            img: "/cert2.jpg",
          },
          {
            href: "https://www.hackerrank.com/certificates/b3100e423bf5",
            title: "React (HackerRank)",
            img: "/cert3.jpg",
          },
          {
            href: "https://www.udemy.com/certificate/UC-d2bcd2a3-c3de-42d5-8a71-826432170ce1/",
            title: "JavaScript (Udemy)",
            img: "/cert4.jpg",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.title}
            className="group w-[404px] h-[304px] relative bg-gray-900/30 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration1-500 
            
            "
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
