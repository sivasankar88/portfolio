import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "Angular",
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Spring Boot",
        "Express.js",
        "Node.js",
        "RESTful APIs",
        "JWT Authentication",
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "Git",
        "GitHub",
        "Tomcat",
        "AWS (Learning)",
        "Docker (Learning)",
      ],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL"],
    },

    {
      category: "Other",
      skills: [
        "Problem Solving",
        "LeetCode (70+ problems)",
        "Clean Code",
        "Cross-Browser Compatibility",
      ],
    },
  ];
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </motion.div>
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
