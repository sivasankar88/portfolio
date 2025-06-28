import { motion } from "framer-motion";
import { SiTcs } from "react-icons/si";
import { useInView } from "react-intersection-observer";

const experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Tata Consultancy Services (TCS)",
      period: "2023 - Present",
      description: [
        "Developed and maintained web applications using Angular, Spring Boot, Express.js, and MongoDB",
        "Worked on legacy technologies like JSP and Struts, contributing to revamping and modernizing parts of older systems",
        "Deployed applications on Tomcat servers and handled complex integrations between Angular frontends and backend APIs",
        "Implemented JWT-based authentication and cross-origin communication for secure data exchange",
        "Ensured browser compatibility and performance optimization across all applications",
      ],
      icons: <SiTcs className="text-[#ec2024] text-5xl" />,
    },
  ];
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="block max-w-4xl text-sm sm:text-base lg:text-xl p-6 text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-950 dark:border-gray-700">
              <div className="flex gap-x-4 items-center" key={index}>
                {exp.icons}
                <div className="flex flex-col">
                  <h5 className="text-2xl font-bold">{exp.title}</h5>
                  <p>
                    {exp.company} | {exp.period}
                  </p>
                </div>
              </div>
              <ul>
                {exp.description.map((des, i) => (
                  <li
                    key={i}
                    className="mt-4 font-normal text-gray-700 dark:text-gray-400">
                    {des}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default experience;
