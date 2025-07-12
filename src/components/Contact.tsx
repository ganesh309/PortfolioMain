import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
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
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Your City, Country",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "text-gray-600 hover:text-gray-900"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "text-blue-600 hover:text-blue-800"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "text-sky-500 hover:text-sky-700"
    }
  ];

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Get In Touch</h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Contact Information</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about web development. 
              Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className={`p-3 ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'} rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    <info.icon className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} group-hover:text-white transition-all duration-300`} />
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-all duration-300`}>{info.title}</h4>
                    <a 
                      href={info.link}
                      className={`${isDark ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-600 group-hover:text-purple-600 transition-all duration-300 hover:underline`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 hover:text-blue-600 transition-all duration-300`}>Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 ${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg ${social.color} transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg group`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6 group-hover:scale-110 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border ${isDark ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 hover:shadow-md transition-all duration-300`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border ${isDark ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 hover:shadow-md transition-all duration-300`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border ${isDark ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 hover:shadow-md transition-all duration-300`}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border ${isDark ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 hover:shadow-md transition-all duration-300 resize-none`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Send className="h-5 w-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;