import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const LanguageToggle = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
    </motion.button>
  )
}

export default LanguageToggle
