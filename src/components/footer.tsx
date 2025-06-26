import { LuGithub } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";
import { CiMail } from "react-icons/ci";

const footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-xl font-bold">
              Siva's <span className="text-blue-500">Portfolio</span>
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              Building modern web applications with passion and precision.
            </p>
          </div>
          <div className="flex gap-x-6">
            <a href="" target="_blank">
              <LuGithub className="h-8 w-8" />
            </a>
            <a href="" target="_blank">
              <TiSocialLinkedin className="h-8 w-8" />
            </a>
            <a href="mailto:sivasankar8383@gmail.com">
              <CiMail className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Siva's Portfolio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-x-6 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white trasition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white trasition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white trasition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
