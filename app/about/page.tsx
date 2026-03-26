import SEO from "@/components/SEO";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-8 pt-24 pb-12 md:pt-28">
      <SEO title="About | Your Name" />
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-4xl font-bold">About Me</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-3 md:items-start">
          <div className="flex items-center justify-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-blue-300 shadow-lg dark:border-blue-500">
              <Image src="/images/profile.png" alt="Your photo" fill className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="text-slate-600 dark:text-slate-300">
              I am a software engineer specialized in Spring Boot, microservices, Kubernetes, and Docker. I design scalable distributed systems, secure APIs, and cloud operating patterns for enterprise software.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Experience includes building and deploying cloud-native platforms at scale, implementing CI/CD pipelines and automation, and integrating AI-based tools to accelerate software delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/resume.docx" target="_blank" rel="noreferrer" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                Download Resume
              </a>
              <a href="/contact" className="rounded-lg border border-blue-200 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
