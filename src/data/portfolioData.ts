export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  category: 'Generative AI' | 'Multimodal AI' | 'Document AI' | 'AI System';
  technologies: string[];
  github: string;
  demo?: string;
  highlights: string[];
  architectureSnippet: string;
  metrics?: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  name: string;
  skills: { name: string; icon?: string; desc?: string }[];
}

export interface ProgressionStep {
  step: string;
  title: string;
  role: string;
  description: string;
  deliverables: string[];
}

export interface JourneyEntry {
  year: string;
  focus: string;
  whatIBuilt: string;
  whatILearned: string;
}

export interface Principle {
  number: string;
  title: string;
  statement: string;
  description: string;
}

export interface LabExperiment {
  name: string;
  explanation: string;
  technologies: string[];
  status: 'Experimenting' | 'Built' | 'Exploring' | 'Prototype';
  tag: string;
}

export const portfolioConfig = {
  name: "Dharmesh Sharma",
  role: "AI / ML Engineer",
  location: "India",
  projectsCount: "30+",
  github: "https://github.com/dharmeshsharma8085",
  linkedin: "https://www.linkedin.com/in/dharmesh-sharma-7a78a0331",
  instagram: "https://www.instagram.com/aiml.eng/",
  instagramHandle: "aiml.eng",
  email: "dharmeshsharma8085@gmail.com",
  status: "Open to opportunities",
  primaryIdentity: "AI Engineer • Machine Learning • Generative AI • LLM • RAG • Agentic AI • Python",
  shortIdentity: "I build intelligent products, AI systems, and machine-learning applications that solve real problems.",
  mainMessage: "I don't just learn AI. I build with it.",
  heroEyebrow: "AI / ML ENGINEER • BUILDER • CREATOR",
  heroHeadline: "Building intelligent\nproducts for the\nreal world.",
  heroSupportingText: "I work across machine learning, generative AI, LLMs, RAG and intelligent applications — turning complex ideas into products people can actually use."
};

export const projects: Project[] = [
  {
    id: "ai-video-assistant",
    number: "01",
    title: "AI Video Assistant",
    category: "Generative AI",
    description: "An AI-powered application for interacting with and extracting useful information from video content.",
    problem: "Scrubbing through hours of technical video recordings to locate specific topics, equations, or code snippets is manual, slow, and disruptive.",
    solution: "Engineered an end-to-end multimodal pipeline parsing audio streams with Whisper, vectorizing chunked transcripts into ChromaDB, and delivering instant timestamp-accurate answers via LLM context reasoning.",
    technologies: ["Python", "LLM", "RAG", "Streamlit", "Audio-Visual Parsing"],
    github: "https://github.com/dharmeshsharma8085/AI-Video-Assistant",
    highlights: [
      "Natural language video interaction & semantic retrieval",
      "Automated timestamp indexing and key-insight summarization",
      "Direct context extraction without manual video scrubbing"
    ],
    architectureSnippet: "Video Ingestion -> Audio Extraction & Whisper Transcribe -> Chunking & Embeddings -> Vector Index -> LLM Reasoning -> Contextual Response",
    metrics: "Production-ready QA pipeline"
  },
  {
    id: "multimodal-research-assistant",
    number: "02",
    title: "Multimodal Research Assistant",
    category: "Multimodal AI",
    description: "An intelligent research assistant designed to work across multiple modalities and help users gather and understand information.",
    problem: "Technical literature combines prose, architectural diagrams, tables, and recorded conference presentations that single-modality models fail to correlate.",
    solution: "Constructed a multi-vector cross-modal retrieval system aligning visual OCR extractions with dense text embeddings, anchored by strict citation verification.",
    technologies: ["Python", "Multimodal LLMs", "Embeddings", "FastAPI", "Vector Search"],
    github: "https://github.com/dharmeshsharma8085/multimodal-research-assistant",
    highlights: [
      "Cross-modal synthesis across PDFs, charts, text, and voice data",
      "Context-grounded citations for verified academic accuracy",
      "Autonomous search query formulation and synthesis loop"
    ],
    architectureSnippet: "Multi-Source Feed -> Vision/OCR + Dense Embedding Model -> Hybrid Vector Store -> Re-ranking Engine -> Synthesizer Agent",
    metrics: "Multi-format context ingestion"
  },
  {
    id: "documind-ai",
    number: "03",
    title: "DocuMind AI",
    category: "Document AI",
    description: "An AI-powered document intelligence application for understanding and working with document content.",
    problem: "Dense corporate documents and compliance manuals break naive fixed-token chunking, producing severe hallucinations and fragmented query contexts.",
    solution: "Architected a structure-preserving document parsing engine utilizing semantic boundary detection, strict hallucination guardrails, and high-throughput FastAPI inference.",
    technologies: ["Python", "LangChain", "RAG", "OCR Pipeline", "FastAPI"],
    github: "https://github.com/dharmeshsharma8085/DocuMind-AI-",
    highlights: [
      "Intelligent layout-aware chunking preserving tables & headers",
      "Strict hallucination guardrails via semantic context verification",
      "Instant query resolution across dense corporate documentation"
    ],
    architectureSnippet: "Document Parser -> Structure-Preserving Chunking -> ChromaDB Vector Storage -> Retrieval-Augmented Generation -> Precision Answers",
    metrics: "Zero-hallucination document search"
  },
  {
    id: "city-intelligence-system",
    number: "04",
    title: "City Intelligence System",
    category: "AI System",
    description: "An intelligent system exploring AI-driven insights for city-scale information and decision making.",
    problem: "Municipal authorities struggle to synthesize disparate streams of urban traffic, infrastructure metrics, and environmental sensors into predictive civic decisions.",
    solution: "Developed an unsupervised spatial clustering and statistical anomaly detection pipeline providing real-time infrastructure forecasting and civic intelligence.",
    technologies: ["Python", "Spatial Analytics", "Machine Learning", "FastAPI", "Scikit-learn"],
    github: "https://github.com/dharmeshsharma8085/City-Intelligence-System",
    highlights: [
      "Large-scale urban indicator ingestion and spatial pattern clustering",
      "Predictive anomaly detection for civic resource management",
      "Real-time analytics dashboard for decision intelligence"
    ],
    architectureSnippet: "Civic Data Stream -> Cleaning & Feature Engineering -> Predictive ML Models -> Spatial Inference Engine -> Decision Support API",
    metrics: "City-scale analytics & clustering"
  },
  {
    id: "generative-ai-projects",
    number: "05",
    title: "Generative AI Projects",
    category: "Generative AI",
    description: "A collection of experiments and applications built around generative AI technologies.",
    problem: "Translating theoretical LLM concepts into dependable systems requires deep empirical testing with LoRA adapters, deterministic agent loops, and evaluation frameworks.",
    solution: "Shipped a public suite of specialized generative AI systems featuring prompt routing, local model inference, parameter-efficient fine-tuning, and interactive Streamlit interfaces.",
    technologies: ["Python", "Transformers", "Prompt Engineering", "Fine-Tuning", "Streamlit"],
    github: "https://github.com/dharmeshsharma8085/generative-ai_projects",
    highlights: [
      "Targeted fine-tuning and parameter-efficient adapters (LoRA)",
      "System prompt orchestration and agent reasoning patterns",
      "Interactive Streamlit applications showcasing modern GenAI paradigms"
    ],
    architectureSnippet: "Foundation Models -> Parameter Efficient Adapters -> Guardrails & Prompt Routing -> Evaluation Benchmarks -> Interactive UI",
    metrics: "Comprehensive GenAI repository"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    number: "01",
    name: "Programming",
    skills: [
      { name: "Python", desc: "Core language for ML & systems" },
      { name: "SQL", desc: "Data modeling & relational queries" },
      { name: "Linux", desc: "Server environments & CLI scripting" },
      { name: "Object-Oriented Programming (OOP)", desc: "Modular, scalable architecture" }
    ]
  },
  {
    id: "data-viz",
    number: "02",
    name: "Data & Visualization",
    skills: [
      { name: "NumPy", desc: "Numerical arrays & matrix math" },
      { name: "Pandas", desc: "Data wrangling & feature engineering" },
      { name: "Matplotlib", desc: "Analytical plots & data distribution" },
      { name: "Seaborn", desc: "Statistical visualization" }
    ]
  },
  {
    id: "machine-learning",
    number: "03",
    name: "Machine Learning",
    skills: [
      { name: "Scikit-learn", desc: "Classical ML algorithms & metrics" },
      { name: "Machine Learning", desc: "Supervised & unsupervised systems" }
    ]
  },
  {
    id: "deep-learning",
    number: "04",
    name: "Deep Learning",
    skills: [
      { name: "Deep Learning", desc: "Neural networks & representation learning" },
      { name: "Transformers", desc: "Self-attention & modern architectures" }
    ]
  },
  {
    id: "nlp-genai",
    number: "05",
    name: "NLP & Generative AI",
    skills: [
      { name: "Natural Language Processing", desc: "Tokenization, embeddings, syntax" },
      { name: "LLMs", desc: "Large language models & prompting" },
      { name: "RAG", desc: "Retrieval-augmented generation pipelines" },
      { name: "Agentic AI", desc: "Autonomous tool use & multi-step agents" }
    ]
  },
  {
    id: "ai-app-dev",
    number: "06",
    name: "AI Application Development",
    skills: [
      { name: "FastAPI", desc: "High-performance asynchronous APIs" },
      { name: "Streamlit", desc: "Rapid AI application prototypes" }
    ]
  },
  {
    id: "dev-tools",
    number: "07",
    name: "Development Tools",
    skills: [
      { name: "Git", desc: "Version control & branching workflows" },
      { name: "GitHub", desc: "Open-source collaboration & CI/CD" }
    ]
  }
];

export const technicalProgression: ProgressionStep[] = [
  {
    step: "01",
    title: "Python Foundation",
    role: "Core Computation",
    description: "Mastering Python fundamentals, object-oriented design, performance optimization, and algorithmic problem-solving.",
    deliverables: ["Clean OOP architecture", "Algorithmic data structures", "Modular scripting"]
  },
  {
    step: "02",
    title: "Data Manipulation & Analytics",
    role: "Data Engineering",
    description: "Transforming raw unstructured data into clean, structured feature matrices using NumPy, Pandas, and exploratory visualization.",
    deliverables: ["Matrix operations", "Outlier detection & imputation", "Statistical visual analysis"]
  },
  {
    step: "03",
    title: "Machine Learning Foundations",
    role: "Predictive Modeling",
    description: "Implementing classical statistical learning models with Scikit-learn, hyperparameter tuning, cross-validation, and performance evaluation.",
    deliverables: ["Supervised classification & regression", "Feature importance metrics", "Model validation pipelines"]
  },
  {
    step: "04",
    title: "Deep Learning & Neural Architectures",
    role: "Representation Learning",
    description: "Building multilayer neural networks, backpropagation optimization, convolutional vision models, and recurrent sequence models.",
    deliverables: ["Loss function dynamics", "Gradient optimization", "Tensor transformations"]
  },
  {
    step: "05",
    title: "Natural Language Processing",
    role: "Text Intelligence",
    description: "Developing computational linguistics systems: tokenization, n-grams, tf-idf, dense semantic vector spaces, and sequence tagging.",
    deliverables: ["Semantic vector similarity", "Text pre-processing pipelines", "Context embeddings"]
  },
  {
    step: "06",
    title: "Transformers & Attention Mechanisms",
    role: "Modern Foundation",
    description: "Understanding encoder-decoder architectures, multi-head self-attention, positional encoding, and pre-training dynamics.",
    deliverables: ["Attention weight analysis", "Transformer block construction", "Context window tuning"]
  },
  {
    step: "07",
    title: "Large Language Models (LLMs)",
    role: "Generative Reasoning",
    description: "Harnessing modern foundation models, prompt engineering, structured output formatting, parameter-efficient fine-tuning, and benchmarking.",
    deliverables: ["Few-shot prompt workflows", "Output schema validation", "Instruction following"]
  },
  {
    step: "08",
    title: "Retrieval-Augmented Generation (RAG)",
    role: "Knowledge Grounding",
    description: "Overcoming model hallucinations by connecting LLMs to private vector stores, chunking strategies, hybrid retrieval, and re-ranking.",
    deliverables: ["Hierarchical chunking", "Embedding distance search", "Contextual synthesis"]
  },
  {
    step: "09",
    title: "Agentic AI & Tool Orchestration",
    role: "Autonomous Execution",
    description: "Constructing multi-agent architectures that plan, reason, invoke external tools, execute code, and reflect on intermediate outputs.",
    deliverables: ["ReAct loop architecture", "Function calling integrations", "Stateful agent graphs"]
  },
  {
    step: "10",
    title: "Production AI Applications",
    role: "End-to-End Delivery",
    description: "Packaging complex AI models into scalable FastAPI microservices, containerized deployments, and clean interactive user interfaces.",
    deliverables: ["FastAPI async endpoints", "Streamlit client apps", "Production monitoring"]
  }
];

export const journeyTimeline: JourneyEntry[] = [
  {
    year: "Phase 01",
    focus: "Programming & Python Fundamentals",
    whatIBuilt: "Modular Python utilities, data parsing scripts, automation tools, and algorithmic solutions adhering to strict OOP principles.",
    whatILearned: "Clean code structure, error handling, system efficiency, and algorithmic discipline as the bedrocks of AI engineering."
  },
  {
    year: "Phase 02",
    focus: "Data Science & Machine Learning",
    whatIBuilt: "Predictive analytics models, classification systems, exploratory statistical visualizers, and urban data analysis tools.",
    whatILearned: "Feature engineering determines model ceiling; rigorous cross-validation is essential to avoid overfitting."
  },
  {
    year: "Phase 03",
    focus: "Deep Learning, NLP & Transformers",
    whatIBuilt: "Neural text classifiers, semantic search engines, transformer-based embeddings, and sequence representation experiments.",
    whatILearned: "Attention mechanisms revolutionized representation learning; vector embeddings bridge human language with machine computation."
  },
  {
    year: "Phase 04",
    focus: "Generative AI, RAG & Agentic Workflows",
    whatIBuilt: "AI Video Assistant, DocuMind AI document pipeline, Multimodal Research Assistant, and autonomous agent loops.",
    whatILearned: "Practical AI is not just raw model capability, but robust orchestration: retrieval accuracy, system prompts, guardrails, and tool integrations."
  }
];

export const principles: Principle[] = [
  {
    number: "01",
    title: "Build, don't just learn.",
    statement: "Knowledge solidifies through shipping real systems.",
    description: "Reading papers and watching tutorials only provides the blueprint. The real learning happens when debugging pipeline latency, handling edge cases, and making models work in real environments."
  },
  {
    number: "02",
    title: "Turn complexity into simplicity.",
    statement: "Under the hood it's math and vectors; to the user it's magic.",
    description: "AI architecture can be deeply layered, but the end product must feel effortless. Great engineering hides the friction of embeddings, tokens, and model orchestration behind clean interfaces."
  },
  {
    number: "03",
    title: "Ship useful things.",
    statement: "Build for utility, not novelty.",
    description: "An AI system is only as valuable as the real problem it solves. Every project is focused on tangible outcomes: faster video understanding, accurate document intelligence, or actionable insights."
  },
  {
    number: "04",
    title: "Keep experimenting.",
    statement: "The boundary of AI moves every single week.",
    description: "From exploring new embedding spaces to testing agentic planning frameworks, curiosity and rapid prototyping are the greatest competitive advantages in modern AI engineering."
  }
];

export const labExperiments: LabExperiment[] = [
  {
    name: "LLM Reasoning Chains",
    explanation: "Evaluating multi-step chain-of-thought and self-consistency prompts on complex algorithmic tasks.",
    technologies: ["Python", "LLMs", "Prompt Engineering"],
    status: "Built",
    tag: "Reasoning"
  },
  {
    name: "RAG Semantic Chunking",
    explanation: "Experimenting with hierarchical chunking algorithms that respect grammatical and semantic boundaries.",
    technologies: ["LangChain", "Vector DB", "Embeddings"],
    status: "Built",
    tag: "Retrieval"
  },
  {
    name: "Agentic Tool Use & ReAct Loops",
    explanation: "Designing stateful autonomous agents capable of dynamic web queries, code execution, and self-correction.",
    technologies: ["Python", "Function Calling", "Agent Workflows"],
    status: "Experimenting",
    tag: "Agents"
  },
  {
    name: "Transformer Attention Analysis",
    explanation: "Visualizing cross-attention weight distributions across transformer layers during sequence decoding.",
    technologies: ["Transformers", "PyTorch", "Matplotlib"],
    status: "Exploring",
    tag: "Architecture"
  },
  {
    name: "NLP Intent & Entity Extraction",
    explanation: "Benchmarking zero-shot entity extraction models against fine-tuned specialized models.",
    technologies: ["FastAPI", "NLP", "Scikit-learn"],
    status: "Built",
    tag: "Information Extraction"
  },
  {
    name: "Machine Learning Anomaly Detection",
    explanation: "Unsupervised clustering and isolation forest techniques for identifying civic data drift.",
    technologies: ["NumPy", "Pandas", "Scikit-learn"],
    status: "Built",
    tag: "Anomaly Detection"
  },
  {
    name: "AI Automation Workflows",
    explanation: "Asynchronous background pipelines for continuous document processing and scheduled insight synthesis.",
    technologies: ["FastAPI", "Python", "Linux CLI"],
    status: "Prototype",
    tag: "Automation"
  },
  {
    name: "Multimodal Cross-Attention",
    explanation: "Probing multi-format alignment between vision embeddings and textual representation spaces.",
    technologies: ["Multimodal AI", "Embeddings", "Python"],
    status: "Exploring",
    tag: "Multimodal"
  }
];
