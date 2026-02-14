export type Project = {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  tech: string[];
  github: string;
  demo: string;
  thumbnail: string;
};

export type EngineeringItem = {
  title: string;
  description: string;
  metric: string;
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  resume: "https://example.com/om-jain-resume.pdf",
  github: "https://github.com/placeholder/ai-portfolio",
  linkedin: "https://www.linkedin.com/in/placeholder-ai-engineer/",
  email: "mailto:om.jain.ai@example.com",
};

export const projects: Project[] = [
  {
    id: "rag-qa",
    title: "Document Intelligence Q&A (RAG)",
    summary:
      "A retrieval-augmented question-answering system for technical documents with robust chunk ranking and constrained generation.",
    highlights: [
      "Median latency of 2.9s on 120-page PDFs with asynchronous retrieval.",
      "Hybrid chunking + vector indexing with top-k reranking for precision context selection.",
      "Hallucination rate reduced by 36% via retrieval-grounded response constraints.",
      "Modular API architecture with swappable embedding and inference providers.",
    ],
    tech: ["FastAPI", "LangChain", "ChromaDB", "OpenAI API", "Docker"],
    github: "https://github.com/placeholder/document-intelligence-rag",
    demo: "https://demo.example.com/rag-qa",
    thumbnail: "/placeholders/project-rag.svg",
  },
  {
    id: "mini-transformer",
    title: "Mini Transformer Language Model",
    summary:
      "A decoder-only Transformer built from first principles with optimized sampling and efficient inference for short-form technical text.",
    highlights: [
      "4-layer decoder-only architecture with 4 attention heads and rotary position embeddings.",
      "Validation perplexity of 1.43 on a curated corpus of structured technical data.",
      "Weight tying + top-k sampling for coherent generation under low compute budgets.",
      "KV-cache optimized decoding for 1.9x faster token throughput.",
    ],
    tech: ["PyTorch", "Transformers", "NumPy", "CUDA", "Weights & Biases"],
    github: "https://github.com/placeholder/mini-transformer-lm",
    demo: "https://demo.example.com/mini-transformer",
    thumbnail: "/placeholders/project-transformer.svg",
  },
  {
    id: "unet-denoise",
    title: "U-Net Image Denoising",
    summary:
      "A U-Net denoising pipeline for low-light and synthetic noise conditions, tuned for reconstruction quality and stable training.",
    highlights: [
      "Trained on 5k aligned image pairs with mixed Gaussian and Poisson corruption.",
      "Reached 30.4 dB PSNR and 0.92 SSIM on validation patches.",
      "4x effective data variance with geometric and frequency-space augmentation.",
      "Mixed precision training improved throughput by 32% on a single GPU.",
    ],
    tech: ["TensorFlow", "OpenCV", "U-Net", "Albumentations", "CUDA"],
    github: "https://github.com/placeholder/unet-image-denoising",
    demo: "https://demo.example.com/unet-denoising",
    thumbnail: "/placeholders/project-unet.svg",
  },
  {
    id: "timeseries-forecasting",
    title: "Time Series Forecasting (LSTM/GRU)",
    summary:
      "A reproducible forecasting framework comparing recurrent models for airline passenger demand under strict evaluation controls.",
    highlights: [
      "Benchmarked LSTM and GRU baselines with rolling-window evaluation.",
      "Achieved 27.8% RMSE with tuned sequence length and dropout schedule.",
      "CLI-driven early stopping, checkpointing, and experiment tracking.",
      "Reproducible runs through fixed seeds and versioned YAML configs.",
    ],
    tech: ["PyTorch", "Pandas", "Matplotlib", "Hydra", "CLI"],
    github: "https://github.com/placeholder/timeseries-lstm-gru",
    demo: "https://demo.example.com/timeseries-forecasting",
    thumbnail: "/placeholders/project-timeseries.svg",
  },
];

export const engineeringItems: EngineeringItem[] = [
  {
    title: "Real-time Product Workflows",
    description: "Designed event-aware interfaces and streaming update pipelines for collaborative dashboards.",
    metric: "95th percentile render latency under 120ms",
  },
  {
    title: "REST API Systems",
    description: "Built and maintained 25+ APIs with typed contracts, validation middleware, and observability hooks.",
    metric: "Throughput improved by 41% after endpoint refactors",
  },
  {
    title: "Authentication & Security",
    description: "Implemented JWT auth, role-based access patterns, and refresh-token session hardening.",
    metric: "Zero critical auth regressions across releases",
  },
  {
    title: "Dockerized Deployments",
    description: "Containerized services with reproducible local/prod parity and staged rollout workflows.",
    metric: "Deployment setup time reduced by 55%",
  },
  {
    title: "Backend Optimization",
    description: "Focused on query tuning, cache strategy, and payload minimization for production APIs.",
    metric: "Key endpoints stabilized under 200ms",
  },
];

export const skillGroups = [
  {
    title: "AI & ML",
    items: ["TensorFlow", "PyTorch", "Transformers", "NLP", "Computer Vision", "RNNs"],
  },
  {
    title: "MLOps & Deployment",
    items: ["Docker", "AWS", "FastAPI", "REST APIs", "CI/CD", "Monitoring"],
  },
  {
    title: "Programming",
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    title: "Data & Math",
    items: ["NumPy", "Pandas", "Feature Engineering", "Probability", "Linear Algebra"],
  },
];

export const achievements = [
  "Competitive programming rank in top 15% cohort",
  "450+ algorithmic problems solved across coding platforms",
  "Academic branch change secured within top 5%",
  "Gold recognition in product and AI innovation challenge",
];