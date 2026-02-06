export const GET = async () => {
  return Response.json([
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
  ]);
};
