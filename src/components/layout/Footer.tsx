import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/Najla200', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/najla-hamza-206aa6331/', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
Najla Hamza
            </h3>
            <p className="text-gray-400 leading-relaxed">
            Aspiring Software Engineer and Back-End Passionate about creating exceptional digital experiences
              that make a difference in people's lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>najlahamza02@gmail.com</p>
              <p>0776777052</p>
              <p>Kandy,SriLanka</p>
            </div>
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Najla Hamza. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
};