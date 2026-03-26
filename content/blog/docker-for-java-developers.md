---
title: "Docker for Java Developers"
date: "2025-05-15"
summary: "Best practices for building and delivering containerized Java services."
tags: ["Docker", "Java", "CI/CD"]
---

## Docker workflow for Java

1. Create efficient Dockerfiles
2. Use multi-stage builds
3. Keep images small

## Example Dockerfile

```dockerfile
FROM eclipse-temurin:17-jdk-jammy AS build
WORKDIR /app
COPY . .
RUN ./mvnw -DskipTests package

FROM eclipse-temurin:17-jre-jammy
COPY --from=build /app/target/*.jar /app/app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
```
