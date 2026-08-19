
export const personalInfo = {
  name: 'Akash Zendekar',
  role: 'Software Engineer | Python Full Stack Developer',
  location: 'Bangalore, Karnataka',
  email: 'akashzendekar@gmail.com',
  phone: '+91 9591563645',
  linkedin: 'https://www.linkedin.com/in/akash-zendekar-42a63a284/',
  github: 'https://github.com/AKASHZENDEKAR',
  leetcode: 'https://leetcode.com/u/95915/',
  resumeUrl: '/resume/Akash_Zendekar_Resume.pdf',
  photo: '/profile-placeholder.svg',
};

// Contact form delivery
// This is a static frontend with no server, so the form needs a form-backend
// service to actually deliver messages to your inbox.
//
// Setup:
// 1. Go to https://formspree.io and create an account.
// 2. Create a new form.
// 3. Replace YOUR_FORM_ID with your actual Formspree form ID.
// 4. Verify your email address when Formspree sends the confirmation email.
export const contactFormEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

export const heroContent = {
  heading: "Hi, I'm Akash Zendekar",
  subtitle: 'Software Engineer | Python Full Stack Developer',
  description:
    'Software Engineer specializing in Python, Flask, FastAPI, REST APIs, SQL, and AI/ML. I enjoy building reliable backend systems, full-stack applications, and practical AI-powered solutions.',
};

export const aboutMe = `I'm a software engineer and 2026 Information Science & Engineering graduate from Bangalore. I have hands-on internship experience in Python full-stack development and AI/ML, where I worked with Flask, REST APIs, databases, Git, OpenCV, and YOLOv8. I enjoy building clean and reliable backend systems, integrating APIs and databases, and developing practical AI-powered applications. I'm currently focused on software engineering, Python backend development, and full-stack development, and I'm looking for opportunities where I can contribute, learn quickly, and build real-world products.`;

export const skills = {
  Programming: ['Python', 'Java', 'SQL', 'JavaScript'],
  Frontend: ['HTML5', 'CSS3', 'Bootstrap', 'React.js'],
  Backend: ['Flask', 'FastAPI', 'REST APIs', 'SQLAlchemy', 'CRUD'],
  Database: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
  'AI & ML': ['TensorFlow', 'Scikit-learn', 'OpenCV', 'YOLOv8'],
  'Software Engineering': [
    'OOP',
    'DSA',
    'Testing',
    'Debugging',
    'SDLC',
    'Agile',
  ],
  Tools: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Linux'],
};

export const internships = [
  {
    title: 'Python Full Stack Developer Intern',
    company: 'Besant Technologies',
    period: 'Jan 2026 – Jun 2026',
    responsibilities: [
      'Flask Development',
      'REST APIs',
      'React',
      'MySQL',
      'Git',
    ],
  },
  {
    title: 'AI/ML Intern',
    company: 'Ashtaksha Labs',
    period: 'Jun 2025 – Dec 2025',
    responsibilities: [
      'Python',
      'OpenCV',
      'YOLOv8',
      'TensorFlow',
      'Computer Vision',
    ],
  },
];

export const projects = [
  {
    name: 'Smart Expense Tracker',
    description:
      'A full-stack AI-powered expense tracker for managing expenses, budgets, and spending trends, with a Flask backend, SQLite database, REST APIs, authentication, and AI-powered financial insights.',
    tech: ['Python', 'Flask', 'SQLite', 'REST APIs', 'Google Gemini'],
    github: 'https://github.com/AKASHZENDEKAR',
  },
  {
    name: 'Help Desk Ticket Management System',
    description:
      'A full-stack support ticketing platform with authentication, role-based access, ticket management, REST APIs, and AI-powered ticket classification and troubleshooting assistance.',
    tech: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'MySQL',
      'REST APIs',
      'OpenAI API',
    ],
    github: 'https://github.com/AKASHZENDEKAR',
  },
  {
    name: 'Hospital Management System',
    description:
      'A role-based hospital management platform covering patient records, doctor management, appointment scheduling, and authentication, with a Flask backend and MySQL database.',
    tech: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github:
      'https://github.com/AKASHZENDEKAR/Hospital-management-System-',
  },
  {
    name: 'Road Traffic Accident Detection',
    description:
      'A computer vision system that detects and flags road accidents from traffic videos using a custom YOLOv8 model and OpenCV, with a Streamlit dashboard for visualization and monitoring.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit'],
    github: 'https://github.com/AKASHZENDEKAR',
  },
  {
    name: 'Cyberattack Detection System',
    description:
      'A machine learning system that analyzes network traffic and classifies malicious activity using Scikit-learn models trained and evaluated on labeled intrusion-detection datasets.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/AKASHZENDEKAR',
  },
  {
    name: 'Customer Behaviour Analysis',
    description:
      'An analytics project using Python and SQL to analyze customer transaction data, identify purchasing patterns and trends, and present insights through interactive Power BI dashboards.',
    tech: ['Python', 'SQL', 'Power BI'],
    github: 'https://github.com/AKASHZENDEKAR',
  },
];

export const education = {
  degree: 'Bachelor of Engineering',
  field: 'Information Science & Engineering',
  institution: 'Akshaya Institute of Technology',
  cgpa: '8.0',
  year: 'May 2026',
};
