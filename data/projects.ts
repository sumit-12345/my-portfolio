import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "Microservices Platform",
    description: "Spring Boot microservices with Kubernetes autoscaling and Redis caching.",
    tech: ["Spring Boot", "Kubernetes", "Docker", "PostgreSQL"],
    github: "https://github.com/yourname/ms-platform",
    demo: "https://demo.yourdomain.com",
    image: "/projects/project1.png",
  },
  {
    title: "Dockerized Java API",
    description: "REST API with secure JWT auth and Docker Compose deployment.",
    tech: ["Java", "Spring Security", "Docker Compose", "Swagger"],
    github: "https://github.com/yourname/docker-java-api",
    demo: "https://docker-java-api.yourdomain.com",
    image: "/projects/project2.png",
  },
  {
    title: "AI-Powered Chat",
    description: "Chat app using AI features integration and vector search.",
    tech: ["React", "OpenAI", "Node.js", "TypeScript"],
    github: "https://github.com/yourname/ai-chat",
    demo: "https://ai-chat.yourdomain.com",
    image: "/projects/project3.png",
  },
];
