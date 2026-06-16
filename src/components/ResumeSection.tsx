import SectionHeader from "@/components/SectionHeader";
import { personalInfo } from "@/lib/data";

export default function ResumeSection() {
  const { resumeUrl } = personalInfo;

  return (
    <section className="py-12">
      <SectionHeader title="Resume" />
      <div className="wobbly border border-[3px] border-border p-8 bg-background shadow-hard
                       rotate-1 hover:rotate-0 transition-transform duration-100
                       hover:-translate-y-1 hover:shadow-hard-lg max-w-xl">
        <h3 className="font-kalam text-2xl text-accent mb-4 text-center">
          Download My Resume
        </h3>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full wobbly border border-[3px] border-border px-6 py-3
                     bg-background hover:bg-accent hover:text-background
                     shadow-hard hover:shadow-hard-lg hover:-translate-y-1
                       rotate-1 hover:rotate-0 transition-all duration-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth={2.5} stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M5 10h14M12 2v8.5l2.557 1.465A2 2 0 0016.009 15h-2.018A2 2 0 0012 13.5V2z"></path>
          </svg>
          Download PDF
        </a>
      </div>
    </section>
  );
}