export interface ProjectEvolutionStage {
  id: string;
  name: string;
  year: string;
  focus: string;
  technologies: string[];
  status: string;
}

export interface ProjectEvolution {
  title: string;
  description: string;
  stages: ProjectEvolutionStage[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  status: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  role: string;
  highlights: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
  evolution?: {
    from?: string;
    to?: string;
    description: string;
  };
}

export const projects: Project[] = [
  {
    id: 'raphaid-ai',
    name: 'RaphaID AI',
    category: 'HealthTech / AI / Computer Vision',
    status: 'Active / Evolving',
    shortDescription: 'An offline-first, edge-native AI multi-disease diagnostic assistance platform designed to support healthcare workflows in resource-constrained environments.',
    fullDescription: `RaphaID AI is an offline-first, edge-native AI diagnostic assistance platform designed to support healthcare workflows in resource-constrained environments. It evolved from PlasmoID AI, expanding from a malaria-specific detection system into a broader diagnostic support platform.

The system leverages computer vision and machine learning to provide AI-assisted diagnostic support for clinical workflows — not as a replacement for medical professionals, but as a tool to augment and accelerate diagnostic processes in settings where specialist access is limited.

Key architectural decisions:
- Offline/edge-first: Models run locally on device, no internet dependency
- Resource-constrained optimization: Lightweight models optimized for edge deployment
- Extensible architecture: Modular design allowing new diagnostic modules to be added
- Clinical workflow integration: Designed to fit into existing healthcare processes`,
    problem: 'Healthcare facilities in resource-constrained environments often lack access to specialist diagnosticians and reliable internet connectivity, creating delays in diagnosis and treatment.',
    solution: 'An edge-deployable AI platform that runs offline, providing real-time diagnostic assistance across multiple pathologies with a focus on computer vision analysis of medical imagery.',
    technologies: [
      'Python', 'YOLO', 'OpenCV', 'Computer Vision',
      'Streamlit', 'Machine Learning', 'PyTorch', 'Edge Deployment'
    ],
    role: 'Lead AI/ML Engineer & Product Builder',
    highlights: [
      'Offline/edge-first architecture',
      'Computer vision for medical imaging',
      'Resource-constrained optimization',
      'Multi-diagnostic extensibility',
      'Clinical workflow integration'
    ],
    githubUrl: '#',
    demoUrl: '#',
    image: '/projects/RaphaID_AI.png',
    evolution: {
      from: 'plasmoid-ai',
      description: 'Evolved from PlasmoID AI — expanding from malaria-specific detection to a general diagnostic platform'
    }
  },
  {
    id: 'plasmoid-ai',
    name: 'PlasmoID AI',
    category: 'Computer Vision / HealthTech',
    status: 'V1 — Evolved into RaphaID AI',
    shortDescription: 'The first version of my AI-powered malaria detection system, built around computer vision and object detection for blood-smear analysis.',
    fullDescription: `PlasmoID AI was the genesis of my work in medical AI — a computer vision system for automated malaria detection from blood smear microscopy images. Built as a focused solution for a specific, high-impact problem.

The system uses YOLOv8 for object detection to identify and classify malaria parasites in digitized blood smear images, providing parasite counts and density estimation (parasitemia) to assist laboratory technicians and clinicians.`,
    problem: 'Manual microscopic examination of blood smears for malaria diagnosis is time-consuming, requires expert microscopists, and is prone to human error and fatigue.',
    solution: 'An automated computer vision pipeline that detects, classifies, and counts malaria parasites in blood smear images, generating diagnostic reports with visualization overlays.',
    technologies: [
      'Python', 'YOLOv8', 'OpenCV', 'Streamlit',
      'Machine Learning', 'Computer Vision'
    ],
    role: 'AI/ML Engineer & Developer',
    highlights: [
      'Blood smear image analysis',
      'Parasite detection & classification',
      'Parasitemia estimation',
      'Detection visualization overlays',
      'Automated report generation'
    ],
    githubUrl: '#',
    demoUrl: 'https://malaria-ai-detection.streamlit.app',
    image: '/projects/PlasmoID_AI1.jpg',
    evolution: {
      to: 'raphaid-ai',
      description: 'Foundation for RaphaID AI — proved the concept, revealed need for broader platform'
    }
  },
  {
    id: 'intellict',
    name: 'IntelliCT',
    category: 'Computer Vision / Intelligent Transportation',
    status: 'Active Development',
    shortDescription: 'An intelligent traffic monitoring and vehicle-classification system using computer vision to identify and analyze road traffic.',
    fullDescription: `IntelliCT is an intelligent traffic monitoring system that uses computer vision to detect, classify, and analyze vehicle traffic in real-time. Designed with deployment constraints in mind — low-bandwidth environments, variable lighting, and diverse vehicle types common in African road contexts.

The system classifies vehicles into six categories: Cars, Buses, Trucks, Motorcycles, Tricycles (keke), and Bicycles. Built with practical deployment in mind, considering the realities of infrastructure in emerging markets.`,
    problem: 'Traffic management in growing urban centers lacks real-time, automated vehicle classification data. Existing solutions are often expensive, require high bandwidth, or don\'t account for local vehicle types like tricycles and motorcycles.',
    solution: 'A computer vision-based traffic monitoring system optimized for local vehicle categories, designed for edge deployment with minimal bandwidth requirements.',
    technologies: [
      'Python', 'Computer Vision', 'AI/ML', 'PostgreSQL',
      'OpenCV', 'YOLO', 'Real-time Processing'
    ],
    role: 'ML Engineer and data analytics',
    highlights: [
      '6-class vehicle classification (incl. tricycles & motorcycles)',
      'Real-time detection & tracking',
      'Low-bandwidth/edge deployment ready',
      'Traffic flow analytics',
      'Environment-aware design'
    ],
    githubUrl: '#',
    demoUrl: '#',
    image: '/projects/intellict-placeholder.svg'
  },
  {
    id: 'padeespace',
    name: 'PadeeSpace',
    category: 'EdTech / Student Platform / Product',
    status: 'Active Development',
    shortDescription: 'A platform focused on connecting students with opportunities, learning and practical experiences.',
    fullDescription: `PadeeSpace is a student-focused platform built to bridge the gap between academic learning and real-world opportunities. It's a product-first project — emphasizing user research, product strategy, and iterative development over pure technical implementation.

The platform connects students with internships, mentorship, learning resources, and peer communities. Built by students, for students, with a deep understanding of the Nigerian university ecosystem.`,
    problem: 'University students in Nigeria struggle to discover relevant opportunities, connect with mentors, and access practical learning experiences that complement their academic curriculum.',
    solution: 'A curated platform aggregating opportunities, learning resources, and community connections tailored to the Nigerian student context.',
    technologies: [
      'React', 'JavaScript', 'HTML/CSS', 'Product Design',
      'User Research', 'API Integration'
    ],
    role: 'Product design, management & Frontend Engineer',
    highlights: [
      'Product thinking & user-centered design',
      'Student ecosystem understanding',
      'Opportunity discovery & curation',
      'Team/product development',
      'Iterative development process'
    ],
    githubUrl: '#',
    demoUrl: 'https://www.padeespace.com',
    image: '/projects/Padeespace_logo.jpg'
  }
];

export const projectEvolution: ProjectEvolution = {
  title: 'Project Evolution',
  description: 'PlasmoID AI was the initial malaria-focused computer vision system. RaphaID AI represents the broader evolution toward a general health-tech AI platform — demonstrating iteration, learning, and product evolution.',
  stages: [
    {
      id: 'plasmoid-ai',
      name: 'PlasmoID AI',
      year: 'Early 2026',
      focus: 'Malaria Detection',
      technologies: ['YOLOv8', 'OpenCV', 'Streamlit'],
      status: 'Foundation'
    },
    {
      id: 'raphaid-ai',
      name: 'RaphaID AI',
      year: '2026–Present',
      focus: 'Multi-Diagnostic Platform',
      technologies: ['YOLO', 'PyTorch', 'Edge Deployment', 'Modular Architecture'],
      status: 'Active Evolution'
    }
  ]
};