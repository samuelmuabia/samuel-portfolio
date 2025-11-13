'use client';

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

interface ExperienceProps {
  dict: {
    experience: {
      title: string;
      roles: Array<{
        title: string;
        company: string;
        period: string;
        location?: string;
        achievements: string[];
      }>;
    };
  };
}

export default function Experience({ dict }: ExperienceProps) {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
        >
          {dict.experience.title}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {dict.experience.roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start gap-4 sm:gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-2 sm:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="flex-1 ml-0 md:ml-16">
                  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4">
                      <div className="p-2 sm:p-3 bg-blue-100 rounded-lg flex-shrink-0">
                        <FaBriefcase className="text-blue-600" size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                          {role.title}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm sm:text-base">
                          {role.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1">
                          <p className="text-gray-500 text-xs sm:text-sm">{role.period}</p>
                          {role.location && (
                            <>
                              <span className="text-gray-400">•</span>
                              <p className="text-gray-500 text-xs sm:text-sm">{role.location}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 sm:space-y-2.5">
                      {role.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2 text-gray-700 text-sm sm:text-base leading-relaxed"
                        >
                          <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

