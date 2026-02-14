export type Project = {
  id: string;
  title: string;
  problemStatement: string;
  architectureFlow: string[];
  quantifiableResults: Array<{
    metric: string;
    value: string;
  }>;
  techStack: string[];
  github: string;
  liveLink?: string;
};

export const navLinks = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  resume: "/om-jain-resume.pdf",
  github: "https://github.com/omjain-12",
  linkedin: "https://linkedin.com/in/om-jain-iitkgp",
  email: "mailto:oj12work@gmail.com",
};

export const labMetrics = [
  { label: "AI Systems Engineered", value: "5+" },
  { label: "API Endpoints Built", value: "100+" },
  { label: "Parameters Trained", value: "20M+" },
  { label: "API Latency", value: "<200ms" },
];

export const projects: Project[] = [
  {
    id: "document-intelligence-rag",
    title: "Document Intelligence Q&A System",
    problemStatement:
      "Engineered a domain-aware RAG assistant to instantly query dense, multi-page technical manuals and PDFs while strictly minimizing model hallucinations via grounded context retrieval.",
    architectureFlow: [
      "PDF Ingestion",
      "Text Chunking",
      "all-MiniLM Embedding",
      "Vector Indexing",
      "Top-k Retrieval",
      "Qwen 2.5 Inference",
    ],
    quantifiableResults: [
      { metric: "End-to-End Latency", value: "~3s" },
      { metric: "Base Model", value: "Qwen2.5-0.5B" },
      { metric: "Document Handling", value: "Multi-page PDFs" },
      { metric: "Embedding Model", value: "all-MiniLM-L6-v2" },
    ],
    techStack: ["PyTorch", "Transformers", "Flask", "Sentence-Transformers", "Docker"],
    github: "https://github.com/omjain-12/Document-Q-A-Bot-with-RAG",
    liveLink: "https://huggingface.co/spaces/omjx1/rag-qa-bot",
  },
  {
    id: "mini-transformer",
    title: "Mini Transformer Language Model",
    problemStatement:
      "Engineered a compact, decoder-only Transformer from scratch for next-character prediction, implementing modern LLM practices like explicit scaled dot-product attention, causal masking, and weight tying.",
    architectureFlow: [
      "Tiny Shakespeare Dataset",
      "Sinusoidal Positional Encoding",
      "Causal Masked Attention",
      "4-Layer Decoder Stack",
      "Weight Tying",
      "Top-k/Top-p Decoding",
    ],
    quantifiableResults: [
      { metric: "Validation Perplexity", value: "<1.5" },
      { metric: "Parameter Reduction", value: "~2x" },
      { metric: "Sequence Length", value: "128" },
      { metric: "Architecture Depth", value: "4 Layers / 4 Heads" },
    ],
    techStack: ["TensorFlow", "NumPy", "Matplotlib", "Python"],
    github: "https://github.com/omjain-12/Mini-Transformer-for-Character-LM",
  },
  {
    id: "unet-denoising",
    title: "U-Net Image Denoising Pipeline",
    problemStatement:
      "Engineered an end-to-end U-Net convolutional neural network in TensorFlow/Keras to recover clean ground-truth images from high-noise inputs, utilizing aggressive data augmentation to scale dataset variance and stabilize Colab GPU training.",
    architectureFlow: [
      "Paired Ingestion (Noisy/GT)",
      "4x Data Augmentation",
      "Contracting Path (Encoder)",
      "Bottleneck Representation",
      "Expansive Path (Decoder)",
      "PSNR Evaluation",
    ],
    quantifiableResults: [
      { metric: "Validation PSNR", value: "~30 dB" },
      { metric: "Dataset Scale", value: "4x Variance" },
      { metric: "Architecture", value: "Fully Convolutional" },
      { metric: "Framework", value: "TensorFlow / Keras" },
    ],
    techStack: ["TensorFlow", "Keras", "OpenCV", "NumPy", "Python"],
    github: "https://github.com/omjain-12/U-Net-Image-Denoising",
  },
  {
    id: "timeseries-forecasting",
    title: "Time Series Demand Forecasting",
    problemStatement:
      "Engineered reproducible deep learning sequence models (LSTM, GRU, and Seq2Seq) in TensorFlow/Keras for univariate demand forecasting, featuring a highly modular architecture and an automated training CLI with early stopping.",
    architectureFlow: [
      "Airline Passenger Ingestion",
      "Sequence Windowing",
      "Two-Layer LSTM / GRU",
      "Seq2Seq Processing",
      "Automated CLI Training",
      "RMSE Evaluation",
    ],
    quantifiableResults: [
      { metric: "Model Error (RMSE)", value: "<30%" },
      { metric: "Training Epochs", value: "1,000" },
      { metric: "Architecture Depth", value: "Two-Layer RNNs" },
      { metric: "Pipeline Automation", value: "Custom Training CLI" },
    ],
    techStack: ["TensorFlow", "Keras", "Pandas", "NumPy", "Python"],
    github: "https://github.com/omjain-12/Time-Series-Demand-Forecasting",
  },
];

export const caseStudies = projects;

export const engineeringPhilosophy = [
  {
    title: "Measure Before Optimizing",
    description:
      "I instrument first, optimize second. Every improvement is guided by latency, accuracy, throughput, and reliability metrics — not intuition.",
  },
  {
    title: "Design Modular Pipelines",
    description:
      "I architect ingestion, retrieval, training, and serving as independent layers. Clear boundaries allow systems to evolve without breaking downstream components.",
  },
  {
    title: "Engineer Against Hallucination",
    description:
      "Grounded generation is a design constraint. I use retrieval strategies, validation checks, and fallback mechanisms to reduce uncertainty and enforce reliability.",
  },
  {
    title: "Optimize for Inference Efficiency",
    description:
      "I treat latency and throughput as first-class metrics. Caching, batching, and architectural trade-offs are deliberate decisions — not afterthoughts.",
  },
  {
    title: "Build for Reproducibility",
    description:
      "Deterministic configs, seeded runs, experiment tracking, and versioned datasets ensure every result can be replicated and improved systematically.",
  },
];

export const skillGroups = [
  {
    title: "AI Architectures",
    items: ["Transformers", "CNNs", "RNN / LSTM", "U-Net", "Self-Attention"],
  },
  {
    title: "Frameworks",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace"],
  },
  {
    title: "Deployment & Infra",
    items: ["Docker", "FastAPI", "REST APIs", "Linux", "AWS"],
  },
  {
    title: "Data & Retrieval",
    items: ["Pandas", "NumPy", "SQL", "Vector DBs", "RAG Pipelines"],
  },
];

export const infrastructureProjects: Project[] = [
  {
    id: "echo-realtime-chat",
    title: "Echo: Real-Time WebSocket Infrastructure",
    problemStatement:
      "Architected an event-driven, anonymous matchmaking application using WebSockets and Node.js to handle low-latency bi-directional data streaming and dynamic Text-to-Speech API integration.",
    architectureFlow: [
      "React Client",
      "Socket.io Stream",
      "Node/Express Backend",
      "Matchmaking Logic",
      "Google TTS API",
    ],
    quantifiableResults: [
      { metric: "Backend Latency", value: "< 200ms" },
      { metric: "Data Protocol", value: "Bi-directional WS" },
      { metric: "Architecture", value: "Event-Driven" },
    ],
    techStack: ["Node.js", "Express", "Socket.io", "React"],
    github: "https://github.com/omjain-12/Echo-An-anonymous-chatting",
    liveLink: "https://echo-an-anonymous-chatting.vercel.app/",
  },
];