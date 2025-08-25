import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ganeshghorai444@gmail.com",
      link: "mailto:ganeshghorai444@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8967228774",
      link: "tel:+918967228774"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kolkata, West Bengal, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/share/15u3KBAdqR/",
      color: "text-blue-600 hover:text-blue-800"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/lucifer_626?igsh=MW92aWY1eTM5eWpmeA==",
      color: "text-pink-600 hover:text-pink-800"
    },
    {
      icon: Twitter,
      name: "X (Twitter)",
      url: "https://x.com/GaneshGhor57158?t=tdRTNCOHjGoC5EpgX1grPg&s=09",
      color: "text-black hover:text-gray-700"
    }
  ];

  return (
    <section 
      id="contact" 
      className={`py-12 sm:py-16 ${isDark ? 'bg-gray-900' : ''}`}
      style={!isDark ? {
        background: 'linear-gradient(90deg, #fbf5f3 0%, #fbeeea 25%, #c3b2fc 60%, #805dfd 100%)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3 sm:mb-4`}>
            Get In Touch
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto px-2`}>
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Information */}
          <div className={`p-6 sm:p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 sm:mb-6`}>Contact Information</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base`}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about web development. 
              Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`flex items-start p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? 'hover:bg-gray-700' 
                      : 'hover:bg-gray-50 hover:shadow-md'
                  }`}
                >
                  <div className={`flex-shrink-0 p-2 sm:p-3 rounded-full ${isDark ? 'bg-indigo-900/30' : 'bg-indigo-100'} mr-3 sm:mr-4`}>
                    <info.icon className={`h-4 sm:h-5 w-4 sm:w-5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-sm sm:text-base font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{info.title}</h4>
                    <a 
                      href={info.link} 
                      className={`text-sm sm:text-base ${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'} transition-colors duration-200 break-words`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="pt-4 sm:pt-6">
                <h4 className={`text-sm sm:text-base font-medium ${isDark ? 'text-white' : 'text-gray-900'} mb-3 sm:mb-4`}>Follow Me</h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-sm hover:shadow-md transition-all duration-200 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-6 sm:p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 sm:mb-6`}>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:shadow-sm`}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:shadow-sm`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:shadow-sm`}
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:shadow-sm`}
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className={`w-full flex justify-center items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ${
                    isDark ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'
                  } hover:shadow-md`}
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;