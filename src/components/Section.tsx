import { motion } from "framer-motion";
import { SectionProps } from "../type";

const Section = ({ children, delay = 0 }: SectionProps) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
