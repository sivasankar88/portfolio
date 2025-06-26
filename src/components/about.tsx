import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const about = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section id="about" className="h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base dark:text-white lg:text-xl mx-auto">
            <p>
              I am a passionate Full-Stack Developer currently working at TCS
              with over 1 year of experience in building and maintaining web
              applications. My core expertise lies in Next JS, React, Angular,
              Spring Boot, Express.js, and MongoDB. I've also worked on
              revamping and modernizing legacy technologies like JSP and Struts.
            </p>
            <p className="mt-4">
              I've developed and deployed applications on Tomcat servers and
              handled complex integrations between Angular frontends and backend
              APIs hosted on different servers, using techniques like JWT-based
              authentication and cross-origin communication. I always ensure my
              applications are browser-compatible and performance-optimized.
            </p>
            <p className="mt-4">
              I've solved over 70 problems on LeetCode to sharpen my
              problem-solving skills and actively prepare myself for
              opportunities in product-based companies.
            </p>
            <p className="mt-4">
              Right now, I'm exploring AWS services and learning to apply
              concepts like EC2, S3, and containerization.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default about;
