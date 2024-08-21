"use client";

import { motion, MotionProps } from "framer-motion";

interface SlideInFromLeftProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  xOffset?: number;
}

const SlideInFromLeft = ({
  children,
  delay = 0,
  xOffset = -50,
  ...props
}: SlideInFromLeftProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromLeft;