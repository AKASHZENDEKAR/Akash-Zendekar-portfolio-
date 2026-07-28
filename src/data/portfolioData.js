export const personalInfo = {
  name: 'Akash Zendekar',
  role: 'Python Full Stack Developer | AI/ML Engineer',
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
// service to actually deliver messages to your inbox. Formspree's free tier
// works with just this endpoint — no extra JS SDK required.
//
// Setup (5 minutes):
// 1. Go to https://formspree.io and sign up with akashzendekar@gmail.com
// 2. Create a new form — Formspree gives you an endpoint like
//    https://formspree.io/f/xxxxxxxx
// 3. Paste that endpoint below, replacing the placeholder.
// 4. Formspree sends a one-time confirmation email to akashzendekar@gmail.com —
//    click it, or your form submissions won't go through.
// Every message submitted on the site will then land directly in that inbox.
export const contactFormEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

export const heroContent = {
  heading: "Hi, I'm Akash Zendekar",
  subtitle: 'Python Full Stack Developer & AI/ML Engineer',
  description:
    'Passionate software engineer specializing in Python, Flask, AI/ML, REST APIs, and modern web development. I enjoy building scalable applications and solving real-world problems.',
};

export const aboutMe = `I'm a fresher software engineer from Bangalore with a genuine curiosity for how things work under the hood — from a Flask route handling a request to a YOLOv8 model spotting an object in a video frame. My engineering degree in Information Science gave me the fundamentals, and my internships at Ashtaksha Labs and Besant Technologies gave me the practice: building REST APIs, wiring up databases, and training computer vision models that actually have to work outside a notebook. I care about writing backend code that's clean and predictable, and I'm equally comfortable moving up the stack to build the interfaces that sit on top of it. Right now I'm focused on backend development, AI/ML, and full-stack web development, and I'm looking for a team where I can keep learning fast while shipping things that matter.`;

export const skills = {
  Programming: ['Python', 'Java', 'SQL', 'JavaScript'],
  Frontend: ['HTML5', 'CSS3', 'Bootstrap'],
  Backend: ['Flask', 'REST APIs', 'SQLAlchemy'],
  Database: ['MySQL', 'SQLite', 'PostgreSQL'],
  'AI & ML': ['TensorFlow', 'Scikit-learn', 'OpenCV', 'YOLOv8'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Linux', 'Postman'],
};

export const internships = [
  {
    title: 'Python Full Stack Developer Intern',
    company: 'Besant Technologies',
    period: 'Jan 2026 – Jun 2026',
    responsibilities: ['Flask Development', 'REST APIs', 'React', 'MySQL', 'Git'],
  },
  {
    title: 'AI/ML Intern',
    company: 'Ashtaksha Labs',
    period: 'Jun 2025 – Dec 2025',
    responsibilities: ['Python', 'OpenCV', 'YOLOv8', 'TensorFlow', 'Computer Vision'],
  },
];

export const projects = [
  {
    name: 'Road Traffic Accident Detection',
    description:
      'A computer vision system that detects and flags road accidents in real time from traffic camera feeds, using a YOLOv8 model for object detection and OpenCV for frame processing, wrapped in a Streamlit dashboard for live monitoring.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit'],
    github: 'https://github.com/AKASHZENDEKAR',
  },
  {
    name: 'Smart Expense Tracker',
    description:
      'A full-stack personal finance app for logging expenses, categorizing spending, and visualizing trends, with a Flask backend and SQLite storage keeping the data layer lightweight and easy to self-host.',
    tech: ['Python', 'Flask', 'SQLite'],
    github: 'https://github.com/AKASHZENDEKAR',
  },
  {
    name: 'Cyberattack Detection System',
    description:
      'A machine learning classifier trained to distinguish malicious network traffic from normal activity, using Scikit-learn models evaluated on labeled intrusion-detection datasets.',
    tech: ['Python', 'Scikit-learn'],
    github: 'https://github.com/AKASHZENDEKAR',
  },
  {
    name: 'Hospital Management System',
    description:
      'A role-based hospital administration platform covering patient records, appointment scheduling, and staff access control, built with Flask blueprints and a Naive Bayes symptom checker.',
    tech: ['Python'],
    github: 'https://github.com/AKASHZENDEKAR/Hospital-management-System-',
  },
  {
    name: 'Customer Behaviour Analysis',
    description:
      'An analytics project mining customer transaction data with SQL to uncover purchasing patterns and churn signals, surfaced through interactive Power BI dashboards for business stakeholders.',
    tech: ['Python', 'SQL', 'Power BI'],
    github: 'https://github.com/AKASHZENDEKAR',
  },
  {
    name: 'Help Desk Ticket Management System',
    description:
      'A support ticketing platform with role-based access for admins, support engineers, and customers, handling ticket creation, categorization, and lifecycle tracking end to end.',
    tech: ['Python'],
    github: 'https://github.com/AKASHZENDEKAR',
  },
];

export const education = {
  degree: 'Bachelor of Engineering',
  field: 'Information Science & Engineering',
  institution: 'Akshaya Institute of Technology',
  cgpa: '8.0',
  year: '2026',
};
