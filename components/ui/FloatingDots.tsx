import { motion } from "framer-motion";

const FloatingDots = () => {
  const dots = Array.from({ length: 70 });

  return (
    <>
      {dots.map((_, index) => (
        <motion.div
          key={index}
          className="absolute size-2 rounded-full bg-white"
          initial={{
            x: Math.random() * 2000 - 1000,
            y: Math.random() * 1500 - 500,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * 2000 - 1000,
            y: Math.random() * 1500 - 500,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
          }}
        />
      ))}
    </>
  );
};

export default FloatingDots;
