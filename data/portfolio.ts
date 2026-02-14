export type CaseStudy = {
  id: string;
  title: string;
  summaryLine: string;
  architectureFlow: string[];
  primaryMetric: string;
  metricCaption: string;
  github: string;
  caseStudy: string;
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

export const labMetrics = [
  { label: "Language Modeling", value: "<1.5 Perplexity" },
  { label: "RAG Retrieval", value: "~3s Query Latency" },
  { label: "Vision Restoration", value: "30 dB PSNR" },
  { label: "API Performance", value: "<200ms Backend Latency" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "rag-qa",
    title: "Document Intelligence Q&A (RAG)",
    summaryLine: "Low-latency, grounded Q&A over long technical PDFs with retrieval-constrained generation.",
    architectureFlow: ["PDF", "Chunking", "Embedding", "Vector Index", "Top-k", "LLM"],
    primaryMetric: "~3s",
    metricCaption: "Median end-to-end query latency",
    github: "https://github.com/placeholder/document-intelligence-rag",
    caseStudy: "https://example.com/case-study/rag-document-intelligence",
  },
  {
    id: "mini-transformer",
    title: "Mini Transformer Language Model",
    summaryLine: "Decoder-only Transformer from scratch optimized for quality and inference efficiency.",
    architectureFlow: ["Dataset", "Tokenizer", "Decoder-Only Transformer", "KV Cache", "Top-k Sampler", "Output"],
    primaryMetric: "<1.5",
    metricCaption: "Validation perplexity",
    github: "https://github.com/placeholder/mini-transformer-lm",
    caseStudy: "https://example.com/case-study/mini-transformer-lm",
  },
  {
    id: "unet-denoise",
    title: "U-Net Image Denoising",
    summaryLine: "Noise-robust U-Net reconstruction tuned for detail retention and stable training.",
    architectureFlow: ["Noisy Image", "Encoder", "Bottleneck", "Decoder + Skips", "Reconstruction", "PSNR Eval"],
    primaryMetric: "30 dB",
    metricCaption: "PSNR on validation set",
    github: "https://github.com/placeholder/unet-image-denoising",
    caseStudy: "https://example.com/case-study/unet-image-denoising",
  },
  {
    id: "timeseries-forecasting",
    title: "Time Series Forecasting (LSTM/GRU)",
    summaryLine: "Reproducible temporal forecasting pipeline with low-error recurrent baselines.",
    architectureFlow: ["Time Series", "Windowing", "LSTM/GRU", "Validation", "Forecast", "RMSE Monitor"],
    primaryMetric: "27.8%",
    metricCaption: "RMSE",
    github: "https://github.com/placeholder/timeseries-lstm-gru",
    caseStudy: "https://example.com/case-study/time-series-forecasting",
  },
];

export const engineeringPhilosophy = [
  {
    title: "Measure Before Optimizing",
    description:
      "I instrument systems first, then optimize based on real bottlenecks. Every improvement is driven by latency, quality, and reliability metrics.",
  },
  {
    title: "Design Modular Pipelines",
    description:
      "I separate ingestion, retrieval, training, and serving layers so components can evolve independently without collapsing the overall system.",
  },
  {
    title: "Minimize Hallucination",
    description:
      "I treat factual grounding as an engineering objective by adding retrieval constraints, confidence checks, and fallback behavior.",
  },
  {
    title: "Optimize Inference Latency",
    description:
      "Inference paths are designed for throughput and predictability using caching, batching, and architecture-level tradeoffs.",
  },
  {
    title: "Reproducible Training Workflows",
    description:
      "I enforce deterministic runs with seeded configs, experiment tracking, and versioned datasets to make model iteration dependable.",
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