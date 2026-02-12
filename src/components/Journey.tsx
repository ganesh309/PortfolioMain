import { motion } from 'framer-motion';
import { MapPin, Calendar, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ParticlesBackground from './ParticlesBackground';
import EnergyBeamCanvas from './EnergyBeamCanvas';

const Journey = () => {
  useTheme();

  const education = [
    {
      id: 1,
      title: "Secondary Examination",
      school: "Mabarakpur A. M. Sc. High School",
      period: "2019",
      desc: "Completed secondary education with strong academic performance.",
      grades: "84.14%",
      tags: ["Science", "Mathematics", "Academic Excellence"]
    },
    {
      id: 2,
      title: "Higher Secondary Examination",
      school: "Mabarakpur A. M. Sc. High School",
      period: "2019 – 2021",
      desc: "Focused on the Science stream with a strong foundation in Physics, Chemistry, and Mathematics.",
      grades: "87.6%",
      tags: ["Physics", "Chemistry", "Mathematics"]
    },
    {
      id: 3,
      title: "B.Tech in CSE (Cyber Security)",
      school: "The Neotia University",
      period: "2021 – 2025",
      desc: "In-depth study of computer science, software engineering, cybersecurity principles and Web Development.",
      grades: "8.49 CGPA",
      tags: ["Cyber Security", "Web Development", "Algorithms"]
    }
  ];

  return (
    <section
      id="journey"
      className="py-20 min-h-screen relative overflow-hidden flex items-center"
      style={{ backgroundColor: 'rgb(12 9 13)' }}
    >
      <ParticlesBackground />
      {/* Vertical Energy Stream - lowered opacity for subtle effect */}
      <div className="absolute inset-0 opacity-40">
        <EnergyBeamCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Journey</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            The educational path that shaped my technical foundation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <motion.div
                whileHover={{ scale: 1.03, translateY: -5 }}
                className="relative group h-full"
              >
                {/* Glassmorph Card - Removed group-hover border color */}
                {/* Glassmorph Card - Neutral Black Background */}
                <div className="relative h-full bg-transparent backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col">

                  {/* Top Accent Line - Static */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50"></div>

                  {/* Decorative Blob - Static (Blue instead of Purple) */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl transition-all duration-500" />

                  <div className="flex justify-between items-center mb-4 gap-3 relative z-10">
                    {/* Static Badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-cyan-300 border border-white/10 transition-colors">
                      <Calendar className="w-3 h-3 mr-1.5" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-purple-300 font-medium">
                      <Award className="w-4 h-4" />
                      {item.grades}
                    </span>
                  </div>

                  {/* Static Title Color */}
                  <h3 className="text-xl font-bold text-white mb-2 font-display relative z-10">
                    {item.title}
                  </h3>

                  <div className="flex items-center text-gray-400 text-sm mb-4 relative z-10">
                    <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                    {item.school}
                  </div>

                  {/* Static Border Color */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 border-l-2 border-white/5 pl-4 transition-colors relative z-10 flex-grow">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-black/40 border border-white/5 rounded-lg text-gray-400 transition-all duration-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;