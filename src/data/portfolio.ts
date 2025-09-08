import { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce-Website',
    description: 'A comprehensive admin dashboard for managing e-commerce operations with real-time analytics.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Najla200/ecommerce-project'
  },
  {
    id: '2',
    title: 'Hostel Management System (HMS)',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    image: '/images/hms.png',
    category: 'mobile',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Najla200/HostelManagementSystem-HMS-'
  },
  {
    id: '3',
    title: 'ExploreLanka-TravelAdvisor',
    description: 'Machine learning powered content generation platform with natural language processing.',
    image: '/images/tra.png',
    category: 'ai',
    technologies: ['HTML', 'CSS', 'JavaScript','React'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/a-zahi2002/ExploreLanka-TravelAdvisor'
  },
  {
    id: '4',
    title: 'Circular-Progress-Bar',
    description: 'Modern social networking platform with real-time messaging and content sharing.',
    image: '/images/circularProgress.png',
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'http://127.0.0.1:5500/index.html',
    githubUrl: 'https://github.com/Najla200/Circular-Progress-Bar'
  }
];

/*export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: 'Code'
  },
  {
    id: '2',
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps that deliver exceptional user experiences.',
    icon: 'Smartphone'
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that combine aesthetics with functionality.',
    icon: 'Palette'
  },
  {
    id: '4',
    title: 'Consulting',
    description: 'Strategic technology consulting to help businesses achieve their digital goals.',
    icon: 'Users'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Inc.',
    content: 'Exceptional work quality and attention to detail. The project was delivered on time and exceeded our expectations.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupXYZ',
    content: 'Brilliant technical skills and great communication throughout the project. Highly recommend for any complex development work.',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Design Director',
    company: 'Creative Agency',
    content: 'Perfect balance of technical expertise and design sensibility. The final product was both beautiful and functional.',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];*/

export const skills: Skill[] = [
  { name: 'Java', level: 80 },
  { name: 'SQL', level: 85 },
  { name: 'PHP', level: 85 },
  { name: 'C', level: 80 },
  { name: 'C#', level: 70 },
  { name: 'JavaScript', level: 80 }
];