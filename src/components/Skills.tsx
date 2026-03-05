import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Server, Wrench, X, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import EnergyCanvas from './EnergyCanvas';

interface SkillInfo {
  name: string;
  level: number;
  icon: string;
  color: string;
  description: string;
  link: string;
}

const CircularProgress = ({
  percentage,
  color,
  icon,
  onClick
}: {
  percentage: number;
  color: string;
  icon: string;
  onClick: () => void;
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative w-32 h-32 flex items-center justify-center group/circle cursor-pointer will-change-transform"
      onClick={onClick}
    >
      {/* SVG Ring */}
      <svg className="transform -rotate-90 w-full h-full">
        {/* Background Track */}
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          className="text-gray-800/50"
        />
        {/* Animated Progress Circle */}
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          cx="64"
          cy="64"
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          strokeLinecap="round"
          className={`${color} md:drop-shadow-[0_0_8px_currentColor]`}
        />
      </svg>

      {/* Central Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-[#1a0b1e]/80 backdrop-blur-sm shadow-inner transition-colors duration-300 overflow-hidden border border-white/5 group-hover/circle:border-purple-500/30">
          {/* Icon (Default Visible) */}
          <motion.div
            className="absolute z-10 p-2 will-change-transform will-change-opacity"
            whileHover={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <img src={icon} alt="tech icon" className="w-10 h-10 object-contain md:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          </motion.div>

          {/* Percentage (Hover Reveal) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 flex flex-col items-center justify-center w-full h-full bg-black/90 rounded-full will-change-transform will-change-opacity"
          >
            <span className={`text-xl font-bold ${color.replace('text-', '')} text-white`}>
              {percentage}%
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  useTheme();
  const [selectedSkill, setSelectedSkill] = useState<SkillInfo | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedSkill) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedSkill]);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "https://skillicons.dev/icons?i=react", color: "text-cyan-400", description: "A JavaScript library for building user interfaces.", link: "https://react.dev/" },
        { name: "TypeScript", level: 85, icon: "https://skillicons.dev/icons?i=ts", color: "text-blue-500", description: "A strongly typed programming language that builds on JavaScript.", link: "https://www.typescriptlang.org/" },
        { name: "Tailwind", level: 95, icon: "https://skillicons.dev/icons?i=tailwind", color: "text-cyan-300", description: "A utility-first CSS framework for rapidly building custom UI components.", link: "https://tailwindcss.com/" },
        { name: "JavaScript", level: 90, icon: "https://skillicons.dev/icons?i=js", color: "text-yellow-400", description: "The programming language of the Web.", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
      ]
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "PHP", level: 95, icon: "https://skillicons.dev/icons?i=php", color: "text-indigo-400", description: "A popular general-purpose scripting language that is especially suited to web development.", link: "https://www.php.net/" },
        { name: "Laravel", level: 90, icon: "https://skillicons.dev/icons?i=laravel", color: "text-red-500", description: "The PHP framework for web artisans with expressive, elegant syntax.", link: "https://laravel.com/" },
        { name: "Node.js", level: 80, icon: "https://skillicons.dev/icons?i=nodejs", color: "text-green-500", description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 JavaScript engine.", link: "https://nodejs.org/" },
        { name: "REST API", level: 90, icon: "https://skillicons.dev/icons?i=postman", color: "text-orange-400", description: "Representational state transfer (REST) is a software architectural style that describes the architecture of the Web.", link: "https://restfulapi.net/" }
      ]
    },
    {
      icon: Database,
      title: "Database",
      skills: [
        { name: "MySQL", level: 90, icon: "https://skillicons.dev/icons?i=mysql", color: "text-blue-300", description: "An open-source relational database management system.", link: "https://www.mysql.com/" },
        { name: "PostgreSQL", level: 80, icon: "https://skillicons.dev/icons?i=postgres", color: "text-blue-400", description: "A powerful, open source object-relational database system.", link: "https://www.postgresql.org/" },
        { name: "Redis", level: 70, icon: "https://skillicons.dev/icons?i=redis", color: "text-red-400", description: "An open source, in-memory data structure store, used as a database, cache, and message broker.", link: "https://redis.io/" },
        { name: "MongoDB", level: 65, icon: "https://skillicons.dev/icons?i=mongo", color: "text-green-400", description: "A document-oriented NoSQL database used for high volume data storage.", link: "https://www.mongodb.com/" }
      ]
    },
    {
      icon: Wrench,
      title: "DevOps",
      skills: [
        { name: "Docker", level: 85, icon: "https://skillicons.dev/icons?i=docker", color: "text-blue-500", description: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.", link: "https://www.docker.com/" },
        { name: "Git", level: 90, icon: "https://skillicons.dev/icons?i=git", color: "text-orange-500", description: "A free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.", link: "https://git-scm.com/" },
        { name: "AWS", level: 60, icon: "https://skillicons.dev/icons?i=aws", color: "text-yellow-500", description: "Amazon Web Services is the world's most comprehensive and broadly adopted cloud platform.", link: "https://aws.amazon.com/" },
        { name: "Linux", level: 80, icon: "https://skillicons.dev/icons?i=linux", color: "text-yellow-400", description: "A family of open-source Unix-like operating systems based on the Linux kernel.", link: "https://www.linux.org/" }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 min-h-screen relative overflow-hidden bg-[rgb(12,9,13)]"
    >
      <div className="absolute inset-0 opacity-80 pointer-events-none">
        <EnergyCanvas showWaves={false} shouldAnimate={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Skills <span className="text-gray-400">&</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">Expertise</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hover over the skills to see proficiency details
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-[rgb(54,40,61)]/5 md:backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:border-cyan-500/30 transition-all duration-300 group will-change-transform will-change-opacity"
            >
              <div className="flex items-center mb-8 border-b border-white/10 pb-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg mr-3 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                  <category.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <CircularProgress
                      percentage={skill.level}
                      color={skill.color}
                      icon={skill.icon}
                      onClick={() => setSelectedSkill(skill)}
                    />
                    <span className="mt-2 text-sm font-medium text-gray-300 text-center group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 sm:bg-black/60 sm:backdrop-blur-md will-change-[opacity]"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[rgb(9,7,12)] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl sm:shadow-[0_0_40px_rgba(124,58,237,0.15)] max-w-md w-full relative will-change-transform will-change-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <img src={selectedSkill.icon} alt={selectedSkill.name} className="w-12 h-12 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{selectedSkill.name}</h3>
                  <div className={`text-sm font-medium ${selectedSkill.color}`}>
                    Proficiency: {selectedSkill.level}%
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

              <p className="text-gray-300 text-base leading-relaxed mb-8">
                {selectedSkill.description}
              </p>

              <a
                href={selectedSkill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white transition-all duration-300 group/link"
              >
                <span>Visit Official Page</span>
                <ExternalLink size={18} className="text-gray-400 group-hover/link:text-white transition-colors" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;