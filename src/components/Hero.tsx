import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const { name, title, subtext, social } = personalInfo;

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-start px-6 py-12 relative">
      {/* Decorative elements: tape strips, thumbtacks, etc. */}
      <div className="absolute top-0 left-0 w-full h-[120px] pointer-events-none">
        {/* Tape strip at the top */}
        <div className="w-full h-[20px] bg-[url('/tape-strip.svg')] bg-repeat-x bg-top"></div>
        {/* Thumbtack corners */}
        <div className="flex justify-between px-4 pt-2">
          <div className="w-[20px] h-[20px] bg-[url('/thumbtack.svg')] bg-contain rotate-[10deg]"></div>
          <div className="w-[20px] h-[20px] bg-[url('/thumbtack.svg')] bg-contain rotate-[-10deg] scale-x-[-1]"></div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 w-full max-w-3xl text-center">
        <h1
          className="font-kalam text-5xl text-accent wobbly border border-[3px] border-border p-4 shadow-hard
                     rotate-1 hover:rotate-0 transition-transform duration-100
                     hover:-translate-y-1 hover:shadow-hard-lg"
        >
          {name}
        </h1>

        <p className="font-kalam text-2xl text-muted wobbly border border-[2px] border-border p-2 shadow-hard
                     rotate-[-1px] hover:rotate-0 transition-transform duration-100
                     hover:-translate-y-0.5 hover:shadow-hard-lg">
          {title}
        </p>

        <p className="font-patrick text-lg text-muted max-w-2xl leading-relaxed">
          {subtext}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects"
            className="flex items-center gap-2 wobbly border border-[3px] border-border px-6 py-3
                       bg-background hover:bg-accent hover:text-background
                       shadow-hard hover:shadow-hard-lg hover:-translate-y-1
                       rotate-1 hover:rotate-0 transition-all duration-100"
          >
            View Projects
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 wobbly border border-[3px] border-border px-6 py-3
                       bg-background hover:bg-secondaryAccent hover:text-background
                       shadow-hard hover:shadow-hard-lg hover:-translate-y-1
                       rotate-1 hover:rotate-0 transition-all duration-100"
          >
            Download Resume
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex gap-6 mt-6">
          <a
            href={`mailto:${social.email}`}
            rel="noopener noreferrer"
            className="wobbly border border-[3px] border-border p-4 hover:bg-accent hover:text-background
                       shadow-hard hover:shadow-hard-lg hover:-translate-y-2
                       rotate-[2px] hover:rotate-0 transition-all duration-200"
          >
            {/* Envelope icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" strokeWidth={2.5} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="wobbly border border-[3px] border-border p-4 hover:bg-accent hover:text-background
                       shadow-hard hover:shadow-hard-lg hover:-translate-y-2
                       rotate-[2px] hover:rotate-0 transition-all duration-200"
          >
            {/* GitHub icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" strokeWidth={2.5} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.01 1.51.51 2.61.51 6.15 2.68 7.69A5.44 5.44 0 006 10.23a5.44 5.44 0 00-6.5 6.5A5.44 5.44 0 002.77 16.37a9 9 0 006.72 3.3M9 19h6"></path>
            </svg>
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="wobbly border border-[3px] border-border p-4 hover:bg-secondaryAccent hover:text-background
                       shadow-hard hover:shadow-hard-lg hover:-translate-y-2
                       rotate-[2px] hover:rotate-0 transition-all duration-200"
          >
            {/* LinkedIn icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" strokeWidth={2.5} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H7m7-6a5 5 0 01-5 5M5 7a5 5 0 015 5m-2 8h3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}