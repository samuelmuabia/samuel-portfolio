'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectsProps {
  dict: {
    projects: {
      title: string;
      note?: string;
      items: Array<{
        title: string;
        description: string;
        technologies: string[];
        liveUrl?: string;
        image?: string;
        category?: string;
      }>;
    };
  };
}

export default function Projects({ dict }: ProjectsProps) {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 sm:mb-6"
        >
          {dict.projects.title}
        </motion.h2>

        {dict.projects.note && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-600 text-xs sm:text-sm mb-8 sm:mb-12 max-w-3xl mx-auto italic px-4"
          >
            {dict.projects.note}
          </motion.p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {dict.projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative w-full h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-indigo-200 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-4xl sm:text-6xl opacity-30">🚀</div>
                  </div>
                )}
                {project.category && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm transition-colors"
                  >
                    <FaExternalLinkAlt size={14} />
                    Visit Live Website
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
