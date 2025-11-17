import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'
import { useTranslation } from 'react-i18next'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label={isDark ? t('theme.light') : t('theme.dark')}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
