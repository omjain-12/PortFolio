export type CaseStudy = {
  id: string;
  title: string;
  problemStatement: string;
  architecture: string[];
  keyDesignDecisions: string[];
  performanceMetrics: Array<{
    label: string;
    value: string;
  }>;
  engineeringChallenges: string[];
  github: string;
};

export const navLinks = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  resume: "https://example.com/om-jain-resume.pdf",
  github: "https://github.com/placeholder/ai-portfolio",
  linkedin: "https://www.linkedin.com/in/placeholder-ai-engineer/",
  email: "mailto:om.jain.ai@example.com",
};

export const caseStudies: CaseStudy[] = [
  {
    id: "rag-qa",
    title: "Document Intelligence Q&A (RAG)",
    problemStatement:
      "Technical teams needed trustworthy, low-latency answers from large internal documents where pure generation produced unstable, often hallucinated outputs.",
    architecture: [
      "Document ingestion and semantic chunking pipeline",
      "Vector indexing with metadata-aware filtering",
      "Top-k retrieval and reranking with contextual compression",
      "Grounded answer generation with response validation",
    ],
    keyDesignDecisions: [
      "Chose hybrid chunking to preserve section semantics while improving recall.",
      "Separated retrieval and generation into modular services for independent scaling.",
      "Added confidence-gated fallback to reduce unsupported claims.",
    ],
    performanceMetrics: [
      { label: "End-to-end Latency", value: "~3.0s" },
      { label: "Hallucination Reduction", value: "-36%" },
      { label: "Top-k Retrieval Precision", value: "0.89" },
    ],
    engineeringChallenges: [
      "Balancing context length with retrieval relevance under strict latency budgets.",
      "Stabilizing answer quality for ambiguous queries with sparse evidence.",
    ],
    github: "https://github.com/placeholder/document-intelligence-rag",
  },
  {
    id: "mini-transformer",
    title: "Mini Transformer Language Model",
    problemStatement:
      "Most educational implementations hide optimization details; this system was built to deeply understand transformer internals while achieving strong perplexity under constrained compute.",
    architecture: [
      "Tokenization and vocabulary pipeline",
      "4-layer decoder-only Transformer (4 heads)",
      "Weight tying and causal masking",
      "Top-k sampling with KV-cache inference path",
    ],
    keyDesignDecisions: [
      "Used weight tying to reduce parameters while retaining output quality.",
      "Implemented KV-cache to improve decoding throughput.",
      "Selected top-k sampling over greedy decoding for better generation diversity.",
    ],
    performanceMetrics: [
      { label: "Validation Perplexity", value: "1.43" },
      { label: "Decoder Layers", value: "4" },
      { label: "Inference Speedup", value: "1.9x" },
    ],
    engineeringChallenges: [
      "Numerical instability during early training at higher learning rates.",
      "Managing memory footprint while preserving sequence context.",
    ],
    github: "https://github.com/placeholder/mini-transformer-lm",
  },
  {
    id: "unet-denoise",
    title: "U-Net Image Denoising",
    problemStatement:
      "Noisy low-light inputs degraded downstream computer vision tasks, requiring a denoiser that preserved structure while minimizing oversmoothing artifacts.",
    architecture: [
      "Paired data loader with synthetic + real noise profiles",
      "Encoder-decoder U-Net with skip connections",
      "Composite loss for structure and pixel fidelity",
      "Mixed precision GPU training loop",
    ],
    keyDesignDecisions: [
      "Introduced mixed noise augmentation to improve real-world robustness.",
      "Kept skip pathways wide to preserve high-frequency detail.",
      "Used lightweight post-processing only when confidence dropped.",
    ],
    performanceMetrics: [
      { label: "PSNR", value: "~30 dB" },
      { label: "SSIM", value: "0.92" },
      { label: "Training Throughput", value: "+32%" },
    ],
    engineeringChallenges: [
      "Preventing edge blurring on fine textures.",
      "Maintaining stable gradients across aggressive augmentations.",
    ],
    github: "https://github.com/placeholder/unet-image-denoising",
  },
  {
    id: "timeseries-forecasting",
    title: "Time Series Forecasting (LSTM/GRU)",
    problemStatement:
      "Forecasting airline passenger demand required robust temporal modeling with reproducible evaluation and error control under seasonal shifts.",
    architecture: [
      "Data normalization and rolling-window sequence generator",
      "Parallel LSTM and GRU training pipelines",
      "Early stopping and checkpoint management CLI",
      "Reproducible experiment runner with seeded configs",
    ],
    keyDesignDecisions: [
      "Compared LSTM and GRU under identical preprocessing and split strategy.",
      "Applied rolling evaluation to avoid leakage from temporal ordering.",
      "Versioned hyperparameters with deterministic seeds.",
    ],
    performanceMetrics: [
      { label: "RMSE", value: "27.8%" },
      { label: "Forecast Horizon", value: "12 steps" },
      { label: "Reproducibility", value: "100% seeded" },
    ],
    engineeringChallenges: [
      "Reducing overfit on short seasonal segments.",
      "Aligning model sensitivity across volatile trend shifts.",
    ],
    github: "https://github.com/placeholder/timeseries-lstm-gru",
  },
];

export const engineeringPhilosophy = [
  {
    title: "Systems Thinking",
    description:
      "I design AI solutions as end-to-end systems, not isolated models. Data flow, retrieval quality, inference behavior, and API reliability are treated as a single architecture.",
  },
  {
    title: "Optimization Mindset",
    description:
      "Latency, memory, and throughput are first-class constraints. I prioritize measurable improvements through profiling, model-aware tradeoffs, and practical infrastructure decisions.",
  },
  {
    title: "Research-to-Production",
    description:
      "I bridge experimentation and deployment by enforcing reproducibility, observability, and modular design so prototypes can evolve into maintainable products.",
  },
];

export const skillGroups = [
  {
    title: "AI & ML",
    items: ["PyTorch", "TensorFlow", "Transformers", "NLP", "Computer Vision", "RNNs"],
  },
  {
    title: "MLOps & Deployment",
    items: ["Docker", "AWS", "FastAPI", "REST APIs", "Experiment Tracking", "Monitoring"],
  },
  {
    title: "Programming",
    items: ["Python", "C++", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "Data & Math",
    items: ["NumPy", "Pandas", "Feature Engineering", "Probability", "Linear Algebra", "Statistics"],
  },
];