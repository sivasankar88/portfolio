import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { useRef, useState, type FormEvent } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const validate = (data: { name: string; email: string; message: string }) => {
    const newErrors = { name: "", email: "", message: "" };
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    else {
      const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      newErrors.email = emailRegex.test(data.email)
        ? ""
        : "Enter a valid Mail format";
    }
    if (!data.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    const formData = new FormData(form!.current);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };
    const validationErrors = validate(data);
    setErrors(validationErrors);
    const hasErrors = Object.values(validationErrors).some(Boolean);
    if (hasErrors) return;
    emailjs
      .sendForm(
        "service_b8renyg",
        "template_ilfj5jv",
        form.current,
        "-zPOsL3UHqgoYb2Tk"
      )
      .then(
        () => {
          Swal.fire({
            title: "Message sent successfully",
            timer: 2000,
            position: "top",
          });
          if (form.current) form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: "Failed to send message",
            timer: 10000,
            position: "top",
          });
          console.error(error);
        }
      );
  };
  const contactInfo = [
    {
      icon: <CgMail className="h-10 w-10 text-blue-400 " />,
      title: "Email",
      value: "sivasankar8383@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="h-10 w-10 text-blue-400 " />,
      title: "Phone",
      value: "6383054716",
    },
    {
      icon: <IoLocation className="h-10 w-10 text-blue-400 " />,
      title: "Location",
      value: "Chennai, India",
    },
  ];
  return (
    <div>
      <section id="contact" className=" py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="dark:text-white">
              Feel free to reach out if you have any questions or want to work
              together.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="dark:text-white lg:text-xl mx-auto">
              <div className="flex items-center justify-center flex-wrap gap-2">
                {contactInfo.map((contact, index) => (
                  <div className="contact_container" key={index}>
                    <div className="flex items-center justify-center">
                      {contact.icon}
                    </div>

                    <h5 className="mb-2 text-center text-xl font-bold  text-gray-900 dark:text-white">
                      {contact.title}
                    </h5>
                    <p className="font-normal text-center text-gray-700 dark:text-gray-400">
                      {contact.value}
                    </p>
                  </div>
                ))}
              </div>
              <div></div>
            </motion.div>
          </div>
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <form ref={form} onSubmit={sendEmail}>
              <input type="hidden" name="title" value="From Portfolio" />
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 my-4 mx-auto">
                <div className="flex items-center justify-center flex-col">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="mt-1 block w-60 px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="flex items-center justify-center flex-col">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    name="email"
                    placeholder="Your Email"
                    className="mt-1 block w-60 px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="mb-4 flex items-center justify-center flex-col">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  className="mt-1 block w-80 md:w-120 px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
                <button
                  type="submit"
                  className="p-2 m-4 bg-black text-white dark:bg-white dark:text-black rounded-xl w-40 hover:cursor-pointer font-bold">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
