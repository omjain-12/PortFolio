export type Project = {
  title: string;
  highlights: string[];
  tech: string[];
  github: string;
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  resume: "#",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  email: "mailto:omjain@example.com",
};

export const projects: Project[] = [
  {
    title: "Document Intelligence Q&A (RAG)",
    highlights: [
      "Achieved ~3s response latency for long document query workflows.",
      "Implemented semantic chunking, vector indexing, and top-k context retrieval.",
      "Reduced hallucination through retrieval conditioning and response validation.",
      "Built API-based modular backend for scalable integration.",
    ],
    tech: ["Python", "FastAPI", "RAG", "Vector DB", "LLMs"],
    github: "https://github.com/",
  },
  {
    title: "Mini Transformer Language Model",
    highlights: [
      "Designed 4-layer decoder-only Transformer with 4 attention heads.",
      "Reached <1.5 perplexity on curated training setup.",
      "Implemented weight tying and top-k sampling for robust generation.",
      "Optimized inference path for efficient token throughput.",
    ],
    tech: ["PyTorch", "Transformers", "NLP", "Inference"],
    github: "https://github.com/",
  },
  {
    title: "U-Net Image Denoising",
    highlights: [
      "Trained on 5k paired images with optimized augmentation strategy.",
      "Delivered ~30 dB PSNR on noisy benchmark sets.",
      "Expanded data variance by 4x through augmentation pipeline.",
      "Optimized GPU utilization for faster training iterations.",
    ],
    tech: ["TensorFlow", "U-Net", "Computer Vision", "CUDA"],
    github: "https://github.com/",
  },
  {
    title: "Time Series Forecasting (LSTM/GRU)",
    highlights: [
      "Benchmarked LSTM and GRU models on airline demand dataset.",
      "Achieved sub-30% RMSE with tuned recurrent architectures.",
      "Built CLI-driven early stopping and checkpoint controls.",
      "Ensured reproducible experiments with versioned configuration.",
    ],
    tech: ["PyTorch", "LSTM", "GRU", "Time Series"],
    github: "https://github.com/",
  },
];

export const skillGroups = [
  {
    title: "AI / ML",
    items: ["TensorFlow", "PyTorch", "Transformers", "NLP", "CV", "RNNs"],
  },
  {
    title: "MLOps",
    items: ["Docker", "AWS", "FastAPI", "REST APIs"],
  },
  {
    title: "Programming",
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Data",
    items: ["NumPy", "Pandas", "Feature Engineering"],
  },
];

export const achievements = [
  "Top 15% on Codeforces",
  "450+ problems solved",
  "Branch change within Top 5%",
  "Gold - Product Management GC",
];