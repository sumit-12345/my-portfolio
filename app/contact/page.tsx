import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-8 pt-24 pb-12 md:pt-28">
      <SEO title="Contact | Your Name" />
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Tell me about your next project and let’s connect.</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Reach out</h2>
            <p className="text-slate-600 dark:text-slate-300">
              Email: <a href="mailto:sumitku.joshi@gmail.com" className="text-blue-600 hover:underline">sumitku.joshi@gmail.com</a>
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Phone: <a href="tel:+91 9611277653" className="text-blue-600 hover:underline">+91 9611277653</a>
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              GitHub: <a href="https://github.com/sumit-12345" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Sumit Kumar Joshi</a>
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              LinkedIn: <a href="https://www.linkedin.com/in/sumitjoshi94/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Sumit Kumar Joshi</a>
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
