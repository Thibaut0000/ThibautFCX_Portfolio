
import { motion } from 'framer-motion'
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiGit,
  SiCsharp,
  SiPython
} from 'react-icons/si'

/**
 * TechOrbit Component
 * Creates an interactive orbital animation with technology icons
 * rotating around a centered profile image
 */
const TechOrbit = () => {
  // Get responsive radius based on screen size
  const getResponsiveRadius = (baseRadius) => {
    if (typeof window === 'undefined') return baseRadius
    const width = window.innerWidth
    if (width < 640) return baseRadius * 0.5 // mobile
    if (width < 1024) return baseRadius * 0.7 // tablet
    return baseRadius // desktop
  }

  // Technology configurations for each orbit ring
  const techStacks = [
    {
      // Inner orbit - Frontend technologies
      radius: getResponsiveRadius(180),
      speed: 20,
      icons: [
        { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript', delay: 0 },
        { Icon: SiReact, color: '#61DAFB', name: 'React', delay: 0.33 },
        { Icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS', delay: 0.66 },
      ],
    },
    {
      // Middle orbit - Backend & Database
      radius: getResponsiveRadius(260),
      speed: 30,
      icons: [
        { Icon: SiNodedotjs, color: '#339933', name: 'Node.js', delay: 0 },
        { Icon: SiMongodb, color: '#47A248', name: 'MongoDB', delay: 0.25 },
        { Icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL', delay: 0.5 },
        { Icon: SiPython, color: '#3776AB', name: 'Python', delay: 0.75 },
      ],
    },
    {
      // Outer orbit - DevOps & Tools
      radius: getResponsiveRadius(340),
      speed: 40,
      icons: [
        { Icon: SiDocker, color: '#2496ED', name: 'Docker', delay: 0 },
        { Icon: SiGit, color: '#F05032', name: 'Git', delay: 0.33 },
        { Icon: SiCsharp, color: '#239120', name: 'C#', delay: 0.66 },
      ],
    },
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central profile image container */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
        {/* Glow effect behind profile */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient opacity-20 blur-3xl" />
        
        {/* Profile image */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-white dark:border-gray-800 shadow-2xl z-10">
          <img
            src="/profilPicture.jpeg"
            alt="Thibaut Faucheux"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Orbit rings and icons */}
        {techStacks.map((orbit, orbitIndex) => (
          <div key={orbitIndex} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Dashed orbit ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: orbitIndex * 0.2 }}
              className="absolute rounded-full border-2 border-dashed border-indigo-300 dark:border-indigo-700 opacity-30 pointer-events-none"
              style={{
                width: `${orbit.radius * 2}px`,
                height: `${orbit.radius * 2}px`,
              }}
            />

            {/* Technology icons on orbit */}
            {orbit.icons.map((tech, iconIndex) => {
              const angle = (iconIndex / orbit.icons.length) * 360
              
              return (
                <div
                  key={tech.name}
                  className="absolute pointer-events-none"
                  style={{
                    width: `${orbit.radius * 2}px`,
                    height: `${orbit.radius * 2}px`,
                  }}
                >
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: orbit.speed,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: tech.delay,
                    }}
                  >
                    <div
                      className="pointer-events-none"
                      style={{
                        transform: `rotate(${angle}deg) translateX(${orbit.radius}px) rotate(-${angle}deg)`,
                      }}
                    >
                      {/* Icon container with hover effect */}
                      <motion.div
                        className="relative group cursor-pointer pointer-events-auto"
                        animate={{
                          rotate: [0, -360],
                        }}
                        transition={{
                          duration: orbit.speed,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: tech.delay,
                        }}
                        whileHover={{ 
                          scale: 1.3,
                        }}
                      >
                        {/* Glow effect on hover */}
                        <div 
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"
                          style={{ backgroundColor: tech.color }}
                        />
                        
                        {/* Icon background */}
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border-2 border-gray-100 dark:border-gray-700 group-hover:border-opacity-0 transition-all">
                          <tech.Icon 
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" 
                            style={{ color: tech.color }}
                          />
                        </div>

                        {/* Tooltip on hover */}
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50">
                          {tech.name}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechOrbit
