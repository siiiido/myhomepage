import { motion } from "framer-motion";
import { ChildrenProps } from "../type";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <motion.article
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.article>
  );
};

export default Layout;
