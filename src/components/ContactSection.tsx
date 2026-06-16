import SectionHeader from "@/components/SectionHeader";
import { personalInfo } from "@/lib/data";

export default function ContactSection() {
  const { social } = personalInfo;

  return (
    <section className="py-12">
      <SectionHeader title="Contact" />
      <div className="flex flex-col items-center gap-6">
        <a
          href={`mailto:${social.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 wobbly border border-[3px] border-border px-6 py-3
                     bg-background hover:bg-accent hover:text-background
                     shadow-hard hover:shadow-hard-lg hover:-translate-y-1
                       rotate-1 hover:rotate-0 transition-all duration-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth={2.5} stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>{social.email}</span>
        </a>

        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 wobbly border border-[3px] border-border px-6 py-3
                     bg-background hover:bg-accent hover:text-background
                     shadow-hard hover:shadow-hard-lg hover:-translate-y-1
                       rotate-1 hover:rotate-0 transition-all duration-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth={2.5} stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.01 1.51.51 2.61.51 6.15 2.68 7.69A5.44 5.44 0 006 10.23a5.44 5.44 0 00-6.5 6.5A5.44 5.44 0 002.77 16.37a9 9 0 006.72 3.3M9 19h6"></path>
          </svg>
          <span>GitHub</span>
        </a>

        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 wobbly border border-[3px] border-border px-6 py-3
                     bg-background hover:bg-secondaryAccent hover:text-background
                     shadow-hard hover:shadow-hard-lg hover:-translate-y-1
                       rotate-1 hover:rotate-0 transition-all duration-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth={2.5} stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H7m7-6a5 5 0 01-5 5M5 7a5 5 0 015 5m-2 8h3"></path>
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}