import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Farmer Expense Management System",
      description:
        "A full-stack application that helps farmers register, log in, and manage their crops by adding incomes and expenses. The app calculates whether each crop is profitable and allows filtering of data by day, month, year, or custom date ranges.",
      image: "/farmerExpenseTracker.pn",
      technologies: ["Next.js", "Express.js", "MongoDB", "JWT Authentication"],
      liveLink: "https://v0-farmer-expense-calculator.vercel.app/",
      githubLink: "https://github.com/sivasankar88",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p>
            Here are some of the projects I've worked on that showcase my skills
            and experience.
          </p>
        </motion.div>

        <div className="flex gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}>
              <div className="relative h-60 w-full">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-4">{project.description}</p>

                <div className="mt-8 flex justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center gap-2 p-2 border-1 rounded-xl">
                    <LuGithub size={16} />
                    Code
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2  rounded-xl bg-blue-500">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
