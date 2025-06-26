import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";

const hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Full-Stack Developer
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Building modern web applications with Angular, Spring Boot,
              Express.js, and MongoDB
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rounded-full bg-gray-950 text-white dark:bg-white dark:text-black px-3 py-2">
              <a href="#contact">Get in Touch</a>
            </button>
            <button className="rounded-full bg-gray-950 text-white dark:bg-white dark:text-black px-3 py-2">
              <a href="#projects">View Projects</a>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex justify-center space-x-4">
            <button className="rounded-full border-1 p-2 text-gray-700  dark:text-gray-300  transition-colors cursor-pointer">
              <a href="https://github.com" target="_blank">
                <LuGithub className="h-8 w-8" />
              </a>
            </button>
            <button className="rounded-full border-1 p-2 text-gray-700  dark:text-gray-300 transition-colors cursor-pointer">
              <a href="https://linkedin.com" target="_blank">
                <TiSocialLinkedin className="h-8 w-8" />
              </a>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}>
          <a
            href="#about"
            className="rounded-full text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors cursor-pointer">
            <ArrowDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default hero;
