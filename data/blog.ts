export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

export const blogPosts: PostMeta[] = [
  {
    slug: "spring-boot-microservices-architecture",
    title: "Spring Boot Microservices Architecture",
    summary: "Designing resilient microservices patterns with Spring Boot and Kubernetes.",
    date: "2025-01-20",
    tags: ["Spring Boot", "Microservices", "Kubernetes"],
  },
  {
    slug: "deploying-apps-on-kubernetes",
    title: "Deploying Apps on Kubernetes",
    summary: "Step-by-step guide to containerization and production deployment models.",
    date: "2025-03-10",
    tags: ["Kubernetes", "Deployment", "Helm"],
  },
  {
    slug: "docker-for-java-developers",
    title: "Docker for Java Developers",
    summary: "Best practices for building and delivering containerized Java services.",
    date: "2025-05-15",
    tags: ["Docker", "Java", "CI/CD"],
  },
];
