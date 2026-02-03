// "use client";

// import { motion, useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";

// type RevealProps = {
//   children: React.ReactNode;
//   duration?: number;
//   delay?: number;
//   ease?: "easeOut" | "linear" | "easeInOut";
//   margin?: string;
// };

// const FadeIn = ({
//   children,
//   duration = 0.6,
//   delay = 0,
//   ease = "easeOut",
//   margin = "-80px",
// }: RevealProps) => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const inView = useInView(ref, { once: true, margin });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start({
//         opacity: 1,
//         transition: {
//           duration,
//           delay,
//           ease,
//         },
//       });
//     }
//   }, [inView, controls, duration, delay, ease]);

//   return (
//     <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
//       {children}
//     </motion.div>
//   );
// };

// export default FadeIn;
