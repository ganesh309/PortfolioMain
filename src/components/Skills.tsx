import { motion } from 'framer-motion';
import { Code, Database, Server, Wrench } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import EnergyCanvas from './EnergyCanvas';

const CircularProgress = ({
  percentage,
  color,
  icon
}: {
  percentage: number;
  color: string;
  icon: string;
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center group/circle">
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
          className={`${color} drop-shadow-[0_0_8px_currentColor]`}
        />
      </svg>

      {/* Central Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-[#1a0b1e]/80 backdrop-blur-sm shadow-inner transition-all duration-300 overflow-hidden border border-white/5 group-hover/circle:border-purple-500/30">
          {/* Icon (Default Visible) */}
          <motion.div
            className="absolute z-10 p-2"
            whileHover={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <img src={icon} alt="tech icon" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          </motion.div>

          {/* Percentage (Hover Reveal) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute z-20 flex flex-col items-center justify-center w-full h-full bg-black/90 rounded-full"
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

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "https://skillicons.dev/icons?i=react", color: "text-cyan-400" },
        { name: "TypeScript", level: 85, icon: "https://skillicons.dev/icons?i=ts", color: "text-blue-500" },
        { name: "Tailwind", level: 95, icon: "https://skillicons.dev/icons?i=tailwind", color: "text-cyan-300" },
        { name: "JavaScript", level: 90, icon: "https://skillicons.dev/icons?i=js", color: "text-yellow-400" }
      ]
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "PHP", level: 95, icon: "https://skillicons.dev/icons?i=php", color: "text-indigo-400" },
        { name: "Laravel", level: 90, icon: "https://skillicons.dev/icons?i=laravel", color: "text-red-500" },
        { name: "Node.js", level: 80, icon: "https://skillicons.dev/icons?i=nodejs", color: "text-green-500" },
        { name: "REST API", level: 90, icon: "https://skillicons.dev/icons?i=postman", color: "text-orange-400" }
      ]
    },
    {
      icon: Database,
      title: "Database",
      skills: [
        { name: "MySQL", level: 90, icon: "https://skillicons.dev/icons?i=mysql", color: "text-blue-300" },
        { name: "PostgreSQL", level: 80, icon: "https://skillicons.dev/icons?i=postgres", color: "text-blue-400" },
        { name: "Redis", level: 70, icon: "https://skillicons.dev/icons?i=redis", color: "text-red-400" },
        { name: "MongoDB", level: 65, icon: "https://skillicons.dev/icons?i=mongo", color: "text-green-400" }
      ]
    },
    {
      icon: Wrench,
      title: "DevOps",
      skills: [
        { name: "Docker", level: 85, icon: "https://skillicons.dev/icons?i=docker", color: "text-blue-500" },
        { name: "Git", level: 90, icon: "https://skillicons.dev/icons?i=git", color: "text-orange-500" },
        { name: "AWS", level: 60, icon: "https://skillicons.dev/icons?i=aws", color: "text-yellow-500" },
        { name: "Linux", level: 80, icon: "https://skillicons.dev/icons?i=linux", color: "text-yellow-400" }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 min-h-screen relative overflow-hidden bg-[rgb(12,9,13)]"
    >
      <div className="absolute inset-0 opacity-80 pointer-events-none">
        <EnergyCanvas showWaves={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[rgb(54,40,61)]/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:border-cyan-500/30 transition-all duration-300 group"
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
    </section>
  );
};

export default Skills;