import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { HiDownload, HiAcademicCap, HiHeart, HiLightningBolt, HiBriefcase, HiBookOpen, HiCheckCircle } from 'react-icons/hi'
import SEO from '../components/common/SEO'
import ScrollReveal from '../components/common/ScrollReveal'
import { 
  SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, 
  SiPython, SiMongodb, SiPostgresql, SiDocker, SiGit,
  SiHtml5, SiCss3, SiPhp, SiVuedotjs, SiCplusplus, SiCsharp,
  SiVisualstudiocode, SiPostman, SiLinux
} from 'react-icons/si'

const About = () => {
  const { t } = useTranslation()
  
  // Parallax effect for illustration
  const { scrollYProgress } = useScroll()
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])

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
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 85 },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: 80 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 80 },
      { name: 'React', icon: SiReact, color: '#61DAFB', level: 75 },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', level: 70 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 75 },
    ],
    backend: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 70 },
      { name: 'PHP', icon: SiPhp, color: '#777BB4', level: 60 },
      { name: 'Python', icon: SiPython, color: '#3776AB', level: 65 },
      { name: 'C++', icon: SiCplusplus, color: '#00599C', level: 60 },
      { name: 'C#', icon: SiCsharp, color: '#239120', level: 65 },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 70 },
      { name: 'SQL', icon: SiPostgresql, color: '#4169E1', level: 75 },
    ],
    tools: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 80 },
      { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 65 },
      { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC', level: 85 },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 70 },
      { name: 'Linux', icon: SiLinux, color: '#FCC624', level: 65 },
    ],
  }

  const timeline = t('about.timeline.items', { returnObjects: true })
  
  const getTimelineIcon = (index) => {
    const icons = [HiBriefcase, HiAcademicCap, HiLightningBolt, HiBookOpen, HiCheckCircle]
    return icons[index] || HiCheckCircle
  }
  
  const getTimelineColor = (index) => {
    const colors = [
      { bg: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-800' },
      { bg: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
      { bg: 'bg-pink-500', text: 'text-pink-600 dark:text-pink-400', border: 'border-pink-200 dark:border-pink-800' },
      { bg: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-800' },
      { bg: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
    ]
    return colors[index] || colors[0]
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume_ThibautFCX.pdf'
    link.download = 'Thibaut_Faucheux_Resume.pdf'
    link.click()
  }

  return (
    <>
      <SEO 
        title={t('about.title')}
        description={t('about.bio.description')}
        path="/about"
        keywords="about, skills, experience, education, CESI, developer, full-stack"
      />
      <div className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal direction="down">
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
          </ScrollReveal>        {/* Bio Section */}
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

            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              {/* Animated gradient background glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main image container */}
              <motion.div
                className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ y: imageY }}
              >
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Profile illustration */}
                <motion.img
                  src="/AboutMeIllustration.png"
                  alt="Thibaut Faucheux"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 bg-indigo-400/20 rounded-full blur-xl"
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-20 h-20 bg-purple-400/20 rounded-full blur-xl"
                  animate={{
                    y: [0, 15, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </motion.div>

              {/* Border highlight effect on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-400/50 transition-colors duration-300" />
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
          
          {/* Vertical Timeline (Mobile & Tablet) */}
          <div className="max-w-4xl mx-auto lg:hidden">
            {timeline.map((item, index) => {
              const TimelineIcon = getTimelineIcon(index)
              const colors = getTimelineColor(index)
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative pl-8 pb-12 border-l-2 ${colors.border} last:pb-0`}
                >
                  {/* Icon circle */}
                  <div className={`absolute left-0 top-0 w-10 h-10 ${colors.bg} rounded-full transform -translate-x-[21px] flex items-center justify-center shadow-lg`}>
                    <TimelineIcon className="text-white" size={20} />
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] ml-4">
                    <span className={`${colors.text} font-bold text-lg`}>
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Horizontal Timeline (Desktop) */}
          <div className="hidden lg:block max-w-7xl mx-auto overflow-x-auto">
            <div className="relative flex items-start space-x-8 pb-8">
              {/* Horizontal line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800" />
              
              {timeline.map((item, index) => {
                const TimelineIcon = getTimelineIcon(index)
                const colors = getTimelineColor(index)
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative flex-1 min-w-[250px]"
                  >
                    {/* Icon circle on line */}
                    <div className="relative flex justify-center mb-8">
                      <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center shadow-xl z-10`}>
                        <TimelineIcon className="text-white" size={24} />
                      </div>
                    </div>
                    
                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                    >
                      <span className={`${colors.text} font-bold text-lg block mb-2`}>
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>

                    {/* Connector line to next item */}
                    {index < timeline.length - 1 && (
                      <div className="absolute top-16 right-0 w-8 h-1 bg-transparent" />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white font-display">
            {t('about.certifications.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* ANSSI */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative h-32 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <HiCheckCircle size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {t('about.certifications.anssi')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('about.certifications.year')}: 2024
                </p>
              </div>
            </motion.div>

            {/* TOEIC */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative h-32 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <HiAcademicCap size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {t('about.certifications.toeic')}
                </h3>
                <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">
                  {t('about.certifications.toeicScore')}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('about.certifications.year')}: 2024
                </p>
              </div>
            </motion.div>

            {/* LVMH */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative h-32 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <HiBriefcase size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {t('about.certifications.lvmh')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {t('about.certifications.lvmhDesc')}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('about.certifications.year')}: 2025
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
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
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <skill.icon size={24} color={skill.color} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="ml-auto text-sm font-semibold text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        className="absolute h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                {t('about.skills.backend')}
              </h3>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <skill.icon size={24} color={skill.color} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="ml-auto text-sm font-semibold text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        className="absolute h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                {t('about.skills.devops')}
              </h3>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <skill.icon size={24} color={skill.color} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="ml-auto text-sm font-semibold text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        className="absolute h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white font-display">
            {t('about.languages.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* French */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-6xl">🇫🇷</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('about.languages.french')}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{t('about.languages.frenchLevel')}</p>
                </div>
              </div>
              <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="absolute h-full bg-gradient-to-r from-blue-500 to-red-500 rounded-full"
                />
              </div>
            </motion.div>

            {/* English */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-6xl">🇬🇧</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('about.languages.english')}</h3>
                  <p className="text-green-600 dark:text-green-400 font-semibold">{t('about.languages.englishLevel')}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '78.5%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="absolute h-full bg-gradient-to-r from-blue-600 to-red-600 rounded-full"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-green-100 dark:bg-green-900/30 rounded-lg py-2">
                <HiAcademicCap className="text-green-600 dark:text-green-400" size={20} />
                <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                  {t('about.languages.toeic')}: 785/990
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white font-display">
            {t('about.softSkills.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '🤝', key: 'teamwork' },
              { icon: '💡', key: 'problemSolving' },
              { icon: '📊', key: 'projectManagement' },
              { icon: '🗣️', key: 'communication' },
              { icon: '⏱️', key: 'timeManagement' },
              { icon: '🎯', key: 'adaptability' },
            ].map((skill, index) => (
              <motion.div
                key={skill.key}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center space-y-3 cursor-pointer group"
              >
                <div className="text-4xl transform group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-center font-semibold text-gray-900 dark:text-white">
                  {t(`about.softSkills.${skill.key}`)}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white font-display">
            {t('about.interests.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Running */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl shadow-lg p-6 group cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className="text-4xl">🏃</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t('about.interests.running')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.interests.runningDesc')}
              </p>
            </motion.div>

            {/* Biking */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl shadow-lg p-6 group cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className="text-4xl">🚴</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t('about.interests.biking')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.interests.bikingDesc')}
              </p>
            </motion.div>

            {/* Tech Blogs */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl shadow-lg p-6 group cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className="text-4xl">💻</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t('about.interests.techBlogs')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {t('about.interests.techBlogsDesc')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Sticky Download CV Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDownloadResume}
        className="fixed top-24 right-4 md:top-24 md:right-8 z-50 flex items-center space-x-2 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-2xl hover:shadow-indigo-500/50 transition-all"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <HiDownload size={20} />
        </motion.div>
        <span className="hidden md:inline">{t('about.downloadCV')}</span>
      </motion.button>
      </div>
    </>
  )
}

export default About
