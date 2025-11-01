import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ParticlesBackground from './ParticlesBackground';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!formRef.current) return;
      
      // EmailJS credentials
      const serviceId = 'service_q2s5su8';
      const publicKey = 'eL81L9YZdPpU7MiCL';

      // 1. Send email to you (admin)
      const adminTemplateId = 'template_yizuwak'; // Your existing template
      await emailjs.send(
        serviceId,
        adminTemplateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `${formData.subject}`,
          message: formData.message,
          to_email: 'ganeshghorai444@gmail.com',
          reply_to: formData.email
        },
        publicKey
      );

      // 2. Send automatic reply to the sender
      const autoReplyTemplateId = 'template_p8mcgd1'; // You'll need to create this template
      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        {
          to_name: formData.name,
          to_email: formData.email,
          subject: formData.subject,
         },
        publicKey
      );

      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
      className="py-20 min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(26, 11, 30) 25%, rgb(27, 16, 31) 60%, rgb(0, 0, 0) 100%)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Information */}
          <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-purple-900/50 shadow-lg hover:shadow-purple-900/20 transition-all duration-300" style={{ backgroundColor: 'rgb(26 11 30 / 0.8)' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about web development. 
              Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-3 sm:p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/50 hover:shadow-md hover:shadow-purple-500/10"
                >
                  <div className="flex-shrink-0 p-2 sm:p-3 rounded-full bg-purple-900/30 mr-4">
                    <info.icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-medium text-white">{info.title}</h4>
                    <a 
                      href={info.link} 
                      className="text-base text-purple-300 hover:text-white transition-colors duration-200 break-words"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="pt-4 sm:pt-6">
                <h4 className="text-base font-medium text-white mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-purple-900/30 hover:bg-purple-800/50 shadow-md hover:shadow-purple-500/20 transition-all duration-300 text-purple-300 hover:text-white"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-purple-900/50 shadow-lg hover:shadow-purple-900/20 transition-all duration-300" style={{ backgroundColor: 'rgb(26 11 30 / 0.8)' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:shadow-sm focus:shadow-purple-500/20"
                  style={{ backgroundColor: 'rgb(17 4 23 / 50%)' }}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:shadow-sm focus:shadow-purple-500/20"
                  style={{ backgroundColor: 'rgb(17 4 23 / 50%)' }}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:shadow-sm focus:shadow-purple-500/20"
                  style={{ backgroundColor: 'rgb(17 4 23 / 50%)' }}
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:shadow-sm focus:shadow-purple-500/20"
                  style={{ backgroundColor: 'rgb(17 4 23 / 50%)' }}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitStatus && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.success ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'
                  }`}>
                    <p className={`text-sm ${submitStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                      {submitStatus.message}
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;