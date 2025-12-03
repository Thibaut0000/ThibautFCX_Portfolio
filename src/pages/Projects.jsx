import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { HiAcademicCap, HiBriefcase, HiCode, HiLockClosed, HiExternalLink, HiChevronDown, HiChevronUp, HiSearch, HiX } from 'react-icons/hi'
import academicProjects from '../data/academicProjects.json'
import SEO from '../components/common/SEO'
import ScrollReveal from '../components/common/ScrollReveal'

const Projects = () => {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedYear, setExpandedYear] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Get all unique categories
  const categories = ['all', ...new Set(academicProjects.flatMap(year => 
    year.projects.map(p => p.category)
  ))]

  // Filter projects by category and search
  const filteredYears = academicProjects.map(year => ({
    ...year,
    projects: year.projects.filter(p => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory
      const matchesSearch = searchQuery === '' || 
        t(`projects.items.${p.id}.title`).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(`projects.items.${p.id}.description`).toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  })).filter(year => year.projects.length > 0)

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

  const yearColors = [
    { from: 'from-indigo-500', to: 'to-purple-500', badge: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' },
    { from: 'from-purple-500', to: 'to-pink-500', badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
    { from: 'from-pink-500', to: 'to-rose-500', badge: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300' },
    { from: 'from-blue-500', to: 'to-cyan-500', badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
    { from: 'from-emerald-500', to: 'to-teal-500', badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' },
  ]

  return (
    <>
      <SEO 
        title={t('projects.title')}
        description={t('projects.subtitle')}
        path="/projects"
        keywords="projects, portfolio, web development, React, Vue.js, MongoDB, software engineering"
      />
      <div className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal direction="down">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-display">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {t('projects.subtitle')}
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {academicProjects.reduce((acc, year) => acc + year.projects.length, 0)} {t('projects.totalProjects')}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {academicProjects.length} {t('projects.yearsLabel')}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {categories.length - 1} {t('projects.categories')}
              </span>
            </div>
          </div>
          
          {/* Academic Notice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 flex items-start space-x-3"
          >
            <HiLockClosed className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" size={20} />
            <p 
              className="text-sm text-amber-800 dark:text-amber-200 text-left"
              dangerouslySetInnerHTML={{ __html: t('projects.confidentialityNote') }}
            />
          </motion.div>
          </motion.div>
        </ScrollReveal>

        {/* Search Bar */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('projects.searchPlaceholder')}
                className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                aria-label={t('projects.searchPlaceholder')}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Clear search"
                >
                  <HiX size={20} />
                </button>
              )}
            </div>
            {searchQuery && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center"
              >
                {filteredYears.reduce((acc, year) => acc + year.projects.length, 0)} {t('projects.resultsFound')}
              </motion.p>
            )}
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal direction="scale" delay={0.3}>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {category === 'all' ? t('projects.allProjects') : category}
            </button>
          ))}
          </motion.div>
        </ScrollReveal>

        {/* Projects Timeline by Year - Modern Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {filteredYears.map((yearData, yearIndex) => {
            const colors = yearColors[yearIndex % yearColors.length]
            
            return (
              <motion.div
                key={yearData.year}
                variants={itemVariants}
                className="relative"
              >
                {/* Year Header with Gradient */}
                <div className="flex items-center mb-8">
                  <div className={`flex-shrink-0 bg-gradient-to-r ${colors.from} ${colors.to} rounded-2xl p-6 shadow-2xl`}>
                    <div className="text-center">
                      <HiAcademicCap className="text-white mx-auto mb-2" size={32} />
                      <h2 className="text-3xl font-bold text-white">{yearData.year}</h2>
                      <p className="text-white/90 text-sm mt-1">{yearData.projects.length} {t('projects.project', { count: yearData.projects.length })}</p>
                    </div>
                  </div>
                  <div className="flex-1 ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {t(`projects.years.${yearData.year}.title`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{t(`projects.years.${yearData.year}.semester`)}</p>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-0 md:pl-8">
                  {yearData.projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: projectIndex * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      onClick={() => setSelectedProject(project)}
                      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 cursor-pointer shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-indigo-500/50"
                    >
                      {/* Gradient Accent Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.from} ${colors.to} rounded-t-2xl`} />
                      
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center flex-wrap gap-2 mb-3">
                            <span className={`px-3 py-1 ${colors.badge} text-xs font-bold rounded-full`}>
                              {project.category}
                            </span>
                            {project.confidential && (
                              <span className="flex items-center space-x-1 px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold rounded-full">
                                <HiLockClosed size={12} />
                              </span>
                            )}
                            {project.inProgress && (
                              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded-full animate-pulse">
                                {t('projects.inProgress')}
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 mb-3">
                            {t(`projects.items.${project.id}.title`)}
                          </h3>
                        </div>
                      </div>

                      {/* Project Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                        {t(`projects.items.${project.id}.description`)}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-lg"
                          >
                            {t(`projects.tech.${tech}`)}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-500 dark:text-gray-400 rounded-lg">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* View Details Button */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-bold group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                          {t('projects.viewDetails')}
                          <HiExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                        </div>
                        {(project.github || project.demo) && (
                          <div className="flex items-center space-x-2">
                            {project.github && <HiCode className="text-gray-400" size={18} />}
                            {project.demo && <HiExternalLink className="text-gray-400" size={18} />}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Separator Line */}
                {yearIndex < filteredYears.length - 1 && (
                  <div className="mt-16 flex items-center">
                    <div className={`flex-1 h-1 bg-gradient-to-r ${colors.from} ${colors.to} opacity-20 rounded-full`} />
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    ✕
                  </button>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur text-sm font-semibold rounded">
                      {selectedProject.category}
                    </span>
                    {selectedProject.confidential && (
                      <span className="flex items-center space-x-1 px-3 py-1 bg-amber-500/20 backdrop-blur text-sm font-semibold rounded">
                        <HiLockClosed size={14} />
                        <span>{t('projects.confidential')}</span>
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{t(`projects.items.${selectedProject.id}.title`)}</h2>
                  <p className="text-indigo-100">{t(`projects.items.${selectedProject.id}.description`)}</p>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  {/* Highlights */}
                  {selectedProject.highlights && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                        <HiCode className="text-indigo-600" />
                        <span>{t('projects.keyPoints')}</span>
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-indigo-600 dark:text-indigo-400 mt-1">▸</span>
                            <span className="text-gray-700 dark:text-gray-300">
                              {t(`projects.items.${selectedProject.id}.highlights.${index}`)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('projects.technologies')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-lg"
                        >
                          {t(`projects.tech.${tech}`)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {(selectedProject.github || selectedProject.demo) && (
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                        >
                          <HiCode size={20} />
                          <span>{t('projects.viewCode')}</span>
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                          <HiExternalLink size={20} />
                          <span>{t('projects.liveDemo')}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Projects
