import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { HiDownload, HiAcademicCap, HiHeart, HiLightningBolt } from 'react-icons/hi'
import { 
  SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, 
  SiPython, SiMongodb, SiPostgresql, SiDocker, SiGit 
} from 'react-icons/si'

const About = () => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const skills = {
    frontend: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    backend: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
    tools: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  }

  const timeline = t('about.timeline.items', { returnObjects: true })

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume_ThibautFCX.pdf'
    link.download = 'Thibaut_Faucheux_Resume.pdf'
    link.click()
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-display">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">
                {t('about.bio.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('about.bio.description')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <HiAcademicCap className="text-indigo-600 dark:text-indigo-400 text-2xl mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{t('about.bio.education')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <HiHeart className="text-indigo-600 dark:text-indigo-400 text-2xl mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{t('about.bio.passion')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <HiLightningBolt className="text-indigo-600 dark:text-indigo-400 text-2xl mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{t('about.bio.goal')}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                <HiDownload size={20} />
                <span>{t('about.resume')}</span>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center">
                    <span className="text-9xl font-bold text-white opacity-30">YN</span>
                  </div>
                  {/* Replace with your image:
                  <img
                    src="/about-photo.jpg"
                    alt="About me"
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white font-display">
            {t('about.timeline.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 pb-12 border-l-2 border-indigo-200 dark:border-indigo-800 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full transform -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white font-display">
            {t('about.skills.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                {t('about.skills.frontend')}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.frontend.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    title={skill.name}
                  >
                    <skill.icon size={32} color={skill.color} />
                    <span className="text-xs mt-2 text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                {t('about.skills.backend')}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.backend.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    title={skill.name}
                  >
                    <skill.icon size={32} color={skill.color} />
                    <span className="text-xs mt-2 text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                {t('about.skills.devops')}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.tools.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    title={skill.name}
                  >
                    <skill.icon size={32} color={skill.color} />
                    <span className="text-xs mt-2 text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
