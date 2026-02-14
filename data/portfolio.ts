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
};

export const navLinks = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  resume: "https://example.com/om-jain-resume.pdf",
  github: "https://github.com/omjain-12/PortFolio",
  linkedin: "https://www.linkedin.com/in/placeholder-ai-engineer/",
  email: "mailto:om.jain.ai@example.com",
};

export const labMetrics = [
  { label: "Models Trained", value: "3 Production-Grade Pipelines" },
  { label: "Average Inference", value: "<200ms Optimized Serving" },
  { label: "Total Parameters", value: "20M+ Parameters Trained" },
  { label: "Deployment Focus", value: "MLOps + Scalable APIs" },
];

export const projects: Project[] = [
  {
    id: "unet-land-use-segmentation",
    title: "U-Net Land Use Segmentation",
    problemStatement:
      "Built a U-Net with EfficientNetB3 encoder to segment agriculture, urban, and water classes from satellite imagery at deployment-relevant scale.",
    architectureFlow: [
      "Satellite Tiles",
      "Preprocessing & Augmentation",
      "EfficientNetB3 Encoder",
      "U-Net Decoder",
      "Multi-Class Segmentation",
      "IoU/PSNR Evaluation",
    ],
    quantifiableResults: [
      { metric: "Dataset Volume", value: "50k+ image-mask pairs" },
      { metric: "Mean IoU", value: "0.84" },
      { metric: "PSNR", value: "31.2 dB" },
      { metric: "GPU Throughput", value: "4.3 imgs/s" },
    ],
    techStack: ["TensorFlow", "Keras", "EfficientNetB3", "OpenCV", "NumPy"],
    github: "https://github.com/placeholder/unet-land-use-segmentation",
  },
  {
    id: "custom-transformer-en-hi",
    title: "Custom Transformer (English → Hindi)",
    problemStatement:
      "Implemented the Transformer architecture from \"Attention Is All You Need\" from scratch for production-minded English-to-Hindi translation workflows.",
    architectureFlow: [
      "Parallel Corpus",
      "Tokenization",
      "Positional Encoding",
      "Encoder-Decoder Transformer",
      "Beam Search Inference",
      "Perplexity Monitoring",
    ],
    quantifiableResults: [
      { metric: "Validation Perplexity", value: "1.42" },
      { metric: "Training Epochs", value: "42 epochs" },
      { metric: "Parameter Count", value: "18.6M" },
      { metric: "Avg Inference Latency", value: "170ms/sentence" },
    ],
    techStack: ["PyTorch", "SentencePiece", "CUDA", "Python", "Weights & Biases"],
    github: "https://github.com/placeholder/custom-transformer-en-hi",
  },
  {
    id: "biofuel-multimodal-predictor",
    title: "Bio-Fuel Multi-Modal Predictor",
    problemStatement:
      "Designed a multi-modal model combining CNN image features with ANN tabular features to predict net investment and profit for biofuel conversion scenarios.",
    architectureFlow: [
      "Feedstock Images",
      "CNN Feature Extractor",
      "Process Metadata",
      "ANN Tabular Branch",
      "Feature Fusion",
      "Investment/Profit Prediction",
    ],
    quantifiableResults: [
      { metric: "Profit Prediction R²", value: "0.91" },
      { metric: "Investment MAE", value: "±4.8%" },
      { metric: "Pipeline Runtime", value: "-33% after batching" },
      { metric: "Data Processed", value: "120k+ multimodal records" },
    ],
    techStack: ["PyTorch", "Scikit-Learn", "Pandas", "FastAPI", "Docker"],
    github: "https://github.com/placeholder/biofuel-multimodal-predictor",
  },
];

export const caseStudies = projects;

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
    title: "Model Development",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn"],
  },
  {
    title: "MLOps & Infrastructure",
    items: ["Docker", "AWS", "FastAPI", "Linux/Ubuntu"],
  },
  {
    title: "Data Engineering",
    items: ["Pandas", "NumPy", "RAG pipelines"],
  },
];