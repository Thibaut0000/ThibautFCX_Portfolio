import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HiArrowRight } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'
import ParticlesBackground from '../components/home/ParticlesBackground'
import TechOrbit from '../components/home/TechOrbit'
import StatsBar from '../components/home/StatsBar'
import SEO from '../components/common/SEO'

const Home = () => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <>
      <SEO 
        path="/"
        keywords="Thibaut Faucheux, portfolio, software developer, full-stack, React, Node.js, CESI, Pilot Corporation"
      />
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <ParticlesBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">
                {t('home.greeting')}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display">
                <span className="gradient-text">{t('home.name')}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 min-h-[3rem] flex items-center">
                <TypeAnimation
                  sequence={[
                    t('home.roles.0'),
                    2000,
                    t('home.roles.1'),
                    2000,
                    t('home.roles.2'),
                    2000,
                    t('home.roles.3'),
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
            >
              {t('home.tagline')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center space-x-2 group"
                >
                  <span>{t('home.cta.projects')}</span>
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-colors"
                >
                  {t('home.cta.contact')}
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats Bar */}
            <motion.div variants={itemVariants}>
              <StatsBar />
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Orbit Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square flex items-center justify-center max-w-lg mx-auto lg:max-w-none">
              <TechOrbit />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
        </motion.div>
      </motion.div>
      </div>
    </>
  )
}

export default Home
