import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { HiCode, HiBriefcase, HiLightningBolt } from 'react-icons/hi'
import { useEffect, useState } from 'react'

const StatsBar = () => {
  const { t } = useTranslation()
  const [counts, setCounts] = useState({ projects: 0, experience: 0, technologies: 0 })

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const targets = { projects: 10, experience: 2, technologies: 10 }
    let current = { projects: 0, experience: 0, technologies: 0 }

    const timer = setInterval(() => {
      let allReached = true
      Object.keys(targets).forEach(key => {
        if (current[key] < targets[key]) {
          current[key] += targets[key] / steps
          if (current[key] > targets[key]) current[key] = targets[key]
          allReached = false
        }
      })

      setCounts({ ...current })

      if (allReached) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      icon: HiCode,
      value: `${Math.floor(counts.projects)}+`,
      label: t('home.stats.projects'),
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: HiBriefcase,
      value: `${Math.floor(counts.experience)}`,
      label: t('home.stats.experience'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: HiLightningBolt,
      value: `${Math.floor(counts.technologies)}+`,
      label: t('home.stats.technologies'),
      color: 'from-pink-500 to-red-500'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="relative group"
        >
          {/* Glass morphism card */}
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            {/* Content */}
            <div className="relative flex items-center space-x-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
                <stat.icon size={24} />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StatsBar
