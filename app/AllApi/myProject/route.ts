export const GET = async () => {
  return Response.json([
    {
      title: "Green Card",
      image: "/GreenCardProject.png",
      desc: " Modern grocery store web application with clean UI and Zustand state management.",
      live: "https://research2.vercel.app/",
      github: "https://github.com/noorami369/green-cart-vshoping",
      tech: ["next", "tailwind"],
    },
    {
      title: "Resume Builder.(In processing)",
      image: "/ResumeProject.png",
      desc: "A user-focused platform that makes creating professional resumes simple and fast.",
      live: "https://freshmart-store.vercel.app",
      github: "https://github.com/AmirSarani/ResumeBuilder-React",
      tech: ["react", "redux", "tailwind"],
    },
    {
      title: "Car Rental",
      image: "/CarRentalProject.png",
      desc: "API-driven system to browse, filter, and discover cars based on your needs.",
      live: "https://nike-reimagined-mu.vercel.app/",
      github: "https://github.com/AmirSarani/Car_Rental_MobileView_React",
      tech: ["react", "tailwind"],
    },
    {
      title: "MCI Clone Mobile View",
      image: "/HamrahAvalMobileFristProject.png",
      desc: "A clone of Hamrah Aval with a mobile view, high code similarity to the original, and using various modern libraries.",
      live: "https://nike-reimagined-mu.vercel.app/",
      github: "https://github.com/AmirSarani/MY_MCI_CLONE_MobileView_React",
      tech: ["react", "tailwind"],
    },
  ]);
};
