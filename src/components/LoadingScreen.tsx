import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete, key }: { onComplete: () => void; key?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink text-paper"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center gap-8">
        <motion.h1 
          className="font-sans text-4xl font-light tracking-[0.2em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Elan Point
        </motion.h1>
        <div className="h-[1px] w-48 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="font-mono text-xs tracking-widest text-white/50">
          {progress}%
        </div>
      </div>
    </motion.div>
  );
}
