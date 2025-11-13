'use client';

import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';

interface HeroProps {
  dict: {
    hero: {
      headline: string;
      summary: string;
      ctaWork: string;
      ctaCV: string;
    };
  };
}

export default function Hero({ dict }: HeroProps) {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 sm:pt-24 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl relative bg-gradient-to-br from-blue-200 to-indigo-300">
                <Image
                  src="/profile.jpg"
                  alt="Samuel Muabia Planet"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
                />
                {/* Fallback initials if image fails to load */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-4xl sm:text-6xl font-bold text-white opacity-0">SM</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl sm:text-2xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              {dict.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto lg:mx-0 mb-6 sm:mb-10 px-2 sm:px-0"
            >
              {dict.hero.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                {dict.hero.ctaWork}
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/cv_samuel_planet.pdf"
                download="Samuel_Muabia_Planet_CV.pdf"
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 border-2 border-blue-600 text-sm sm:text-base"
              >
                <FaDownload />
                {dict.hero.ctaCV}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

