'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';

interface ContactProps {
  dict: {
    contact: {
      title: string;
      message: string;
      email: string;
      github: string;
      linkedin: string;
    };
  };
}

export default function Contact({ dict }: ContactProps) {
  const contactLinks = [
    {
      icon: FaEnvelope,
      label: dict.contact.email,
      href: 'mailto:samuel.planet1@gmail.com', // Replace with actual email from CV
      color: 'text-red-600',
    },
    {
      icon: FaGithub,
      label: dict.contact.github,
      href: 'https://github.com/samuelmuabia',
      color: 'text-gray-900',
    },
    {
      icon: FaLinkedin,
      label: dict.contact.linkedin,
      href: 'https://www.linkedin.com/in/samuel-muabia-planet',
      color: 'text-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 sm:mb-6"
        >
          {dict.contact.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4"
        >
          {dict.contact.message}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow w-full sm:w-auto min-w-[140px]"
            >
              <link.icon className={`${link.color}`} size={28} />
              <span className="font-medium text-gray-700 text-sm sm:text-base">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

