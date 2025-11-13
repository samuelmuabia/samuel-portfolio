'use client';

import { motion } from 'framer-motion';
import {
  SiPhp,
  SiJavascript,
  SiPython,
  SiGo,
  SiSelenium,
  SiDocker,
  SiAmazon,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiGithubactions,
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

interface SkillsProps {
  dict: {
    skills: {
      title: string;
      programming: { title: string; items: string[] };
      automation: { title: string; items: string[] };
      cloud: { title: string; items: string[] };
      databases: { title: string; items: string[] };
    };
  };
}

const iconMap: { [key: string]: any } = {
  'PHP': SiPhp,
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'Golang': SiGo,
  'Appium': FaCode,
  'Mocha': SiJavascript,
  'Selenium': SiSelenium,
  'AWS': SiAmazon,
  'Docker': SiDocker,
  'CI/CD': SiGithubactions,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Redis': SiRedis,
};

export default function Skills({ dict }: SkillsProps) {
  const skillCategories = [
    {
      title: dict.skills.programming.title,
      items: dict.skills.programming.items,
    },
    {
      title: dict.skills.automation.title,
      items: dict.skills.automation.items,
    },
    {
      title: dict.skills.cloud.title,
      items: dict.skills.cloud.items,
    },
    {
      title: dict.skills.databases.title,
      items: dict.skills.databases.items,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
        >
          {dict.skills.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 rounded-lg p-4 sm:p-6"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.items.map((skill, skillIndex) => {
                  const Icon = iconMap[skill] || FaCode;
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                    >
                      <Icon className="text-blue-600 flex-shrink-0" size={16} />
                      <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

