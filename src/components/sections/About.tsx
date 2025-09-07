import React, { useRef } from 'react';
import { Card } from '../ui/Card';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { skills } from '../../data/portfolio';

export const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(aboutRef);
  const skillsVisible = useIntersectionObserver(skillsRef);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={aboutRef} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
         
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
             I’m an Information Systems undergraduate with a strong passion for back-end development and building scalable solutions. Currently pursuing my degree, I enjoy working on real-world projects that let me apply my technical skills to solve problems and create meaningful impact. Beyond academics, I love blogging and exploring new technologies, sharing insights while constantly learning and growing in the ever-evolving tech space.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Kandy, SriLanka</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">Information System Undergraduate</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Passion</h4>
                  <p className="text-gray-600 dark:text-gray-400">Blogging and Exploring tech</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Focus</h4>
                  <p className="text-gray-600 dark:text-gray-400">Aspiring Software Engineer | Back-End Enthusiast</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills Section */}
          <div ref={skillsRef} className={`transition-all duration-1000 delay-400 ${
            skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: skillsVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};