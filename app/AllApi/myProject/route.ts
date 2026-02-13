export const GET = async () => {
  return Response.json([
    {
      title: "MCI Clone Mobile View",
      image: "/HamrahAvalMobileFristProject.png",
      desc: "A clone of Hamrah Aval with a mobile view, high code similarity to the original, and using various modern libraries.",
      live: "https://mci-clone-sarani.netlify.app/",
      github: "https://github.com/AmirSarani/MY_MCI_CLONE_MobileView_React",
      tech: ["react", "tailwind"],
    },
    {
      title: "Flowrise Next",
      image: "/flowrise.png",
      desc: "A modern web application with clean UI, well-structured routing, and fully responsive design across all devices.",
      live: "https://flowrise-next-sarani.netlify.app/",
      github: "https://github.com/AmirSarani/flowrise-next",
      tech: ["next", "tailwind"],
    },
    {
      title: "Resume Builder",
      image: "/ResumeProject.png",
      desc: "A user-focused platform that makes creating professional resumes simple and fast.",
      live: "https://resume-builder-sarani.netlify.app/",
      github: "https://github.com/AmirSarani/ResumeBuilder-React",
      tech: ["react", "redux", "tailwind"],
    },
    {
      title: "Car Rental",
      image: "/CarRentalProject.png",
      desc: "API-driven system to browse, filter, and discover cars based on your needs.",
      live: "https://car-rental-sarani.netlify.app/",
      github: "https://github.com/AmirSarani/Car_Rental_MobileView_React",
      tech: ["react", "tailwind"],
    },
  ]);
};
