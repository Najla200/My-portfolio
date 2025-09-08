import React, { useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../utils/smoothScroll';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(heroRef);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div
        ref={heroRef}
        className={`max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hello, I’m{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Najla Hamza
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Aspiring Software Engineer | Back-End Enthusiast
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            Crafting robust back-end solutions while building seamless digital
            experiences. Passionate about turning ideas into efficient,
            impactful software.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="gap-2"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {[
              { Icon: Github, href: 'https://github.com/Najla200', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/najla-hamza-206aa6331/', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:najlahamza02@gmail.com', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/profile.jpg"
            alt="Najla Hamza"
            className="w-80 h-96 object-cover rounded-lg shadow-2xl border-4 border-white dark:border-gray-700"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
