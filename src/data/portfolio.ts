import { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce-Website',
    description: 'A fully functional e-commerce platform developed using HTML, CSS, JavaScript, PHP, and MySQL. The system allows users to browse products, add items to their cart, and manage orders seamlessly. It features user authentication, secure login, and a dynamic shopping cart with real-time updates. The admin panel enables product management (CRUD operations), inventory tracking, and order monitoring. Designed with responsiveness and usability in mind, the project demonstrates core full-stack development skills by integrating a front-end interface with a robust back-end and database.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Najla200/ecommerce-project'
  },
  {
    id: '2',
    title: 'Hostel Management System (HMS)',
    description: 'A web-based Hostel Management System built with HTML, CSS, JavaScript, PHP, and MySQL to streamline hostel operations. The system enables students to register, request leaves, log complaints, and manage personal details, while administrators can track entries/exits, allocate rooms, and oversee maintenance requests. With secure authentication and a user-friendly dashboard, the project ensures efficient record-keeping and reduces manual paperwork by digitizing core hostel management tasks.',
    image: '/images/hms.png',
    category: 'mobile',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Najla200/HostelManagementSystem-HMS-'
  },
  {
    id: '3',
    title: 'ExploreLanka-TravelAdvisor',
    description: 'A collaborative project developed with my teammates, ExploreLanka-TravelAdvisor is a travel advisory website built using HTML, CSS, JavaScript, and React. The platform helps users discover tourist destinations in Sri Lanka with details such as attractions, accommodations, and travel tips. Designed with a responsive interface, the system allows users to search and explore locations seamlessly. My role focused on contributing to the front-end and ensuring smooth integration of project components through effective teamwork and version control.',
    image: '/images/tra.png',
    category: 'ai',
    technologies: ['HTML', 'CSS', 'JavaScript','React'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/a-zahi2002/ExploreLanka-TravelAdvisor'
  },
  {
    id: '4',
    title: 'Circular-Progress-Bar',
    description: 'An interactive circular progress bar component built using HTML, CSS, and JavaScript. The project visually represents progress in a modern, animated circular design, making it ideal for dashboards, task trackers, or performance indicators. It demonstrates dynamic updates with smooth transitions and showcases skills in creating reusable UI components with responsive and visually appealing design.',
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