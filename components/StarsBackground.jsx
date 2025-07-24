// components/StarsBackground.jsx
import { motion } from "framer-motion";

const StarsBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
