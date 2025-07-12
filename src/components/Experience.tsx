import React from 'react';
import { Briefcase, MapPin, Clock, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { isDark } = useTheme();

  const experiences = [
    {
      type: "internship",
      title: "PHP Developer Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "Jun 2023 - Aug 2023",
      description: "Worked on developing and maintaining web applications using PHP and Laravel framework. Collaborated with senior developers to implement new features and optimize existing code.",
      achievements: [
        "Improved application performance by 30%",
        "Implemented 5 new API endpoints",
        "Contributed to code review process",
        "Learned advanced Laravel concepts"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Git", "Postman"]
    },
    {
      type: "internship",
      title: "Web Development Intern",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "Jan 2023 - Mar 2023",
      description: "Assisted in building responsive websites for clients using modern web technologies. Gained experience in both frontend and backend development.",
      achievements: [
        "Delivered 3 client projects successfully",
        "Reduced page load time by 40%",
        "Implemented responsive design principles",
        "Collaborated with design team"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"]
    },
    {
      type: "freelance",
      title: "Freelance PHP Developer",
      company: "Self-employed",
      location: "Remote",
      period: "Sep 2022 - Present",
      description: "Providing web development services to small businesses and startups. Specializing in PHP-based solutions and custom web applications.",
      achievements: [
        "Completed 15+ projects successfully",
        "Maintained 5-star client rating",
        "Built long-term client relationships",
        "Expanded skill set continuously"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "WordPress"]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Experience & Internships</h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            My professional journey and hands-on experience in web development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'} rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500 group cursor-pointer border hover:border-blue-200`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <div className={`p-3 ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'} rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    <Briefcase className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} group-hover:text-white transition-all duration-300`} />
                  </div>
                  <div className="ml-4">
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-all duration-300`}>{exp.title}</h3>
                    <p className={`text-lg ${isDark ? 'text-blue-400' : 'text-blue-600'} font-medium group-hover:text-purple-600 transition-all duration-300`}>{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end">
                  <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-1 group-hover:text-blue-600 transition-all duration-300`}>
                    <Clock className="h-4 w-4 mr-1 group-hover:rotate-12 transition-all duration-300" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-500'} group-hover:text-blue-600 transition-all duration-300`}>
                    <MapPin className="h-4 w-4 mr-1 group-hover:rotate-12 transition-all duration-300" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  exp.type === 'internship' 
                    ? `${isDark ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'} group-hover:bg-green-600 group-hover:text-white` 
                    : `${isDark ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-800'} group-hover:bg-purple-600 group-hover:text-white`
                } transition-all duration-300 group-hover:scale-105`}>
                  {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                </span>
              </div>

              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300`}>{exp.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3 flex items-center group-hover:text-blue-600 transition-all duration-300`}>
                    <Award className={`h-4 w-4 mr-2 ${isDark ? 'text-green-400' : 'text-green-600'} group-hover:text-blue-600 group-hover:rotate-12 transition-all duration-300`} />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} flex items-start group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300`}>
                        <span className={`w-2 h-2 ${isDark ? 'bg-green-400' : 'bg-green-500'} rounded-full mr-2 mt-2 flex-shrink-0 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300`}></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-blue-600 transition-all duration-300`}>Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className={`inline-block ${isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'} text-xs px-2 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;