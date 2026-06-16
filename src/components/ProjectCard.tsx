import Link from "next/link";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  index?: number; // for varying decorations
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  // Vary decorations based on index
  const rotations = ["rotate-1", "-rotate-2", "rotate-[2px]", "-rotate-[3px]"];
  const rotation = rotations[index % rotations.length];

  const decorations = [
    "tape-top-left",
    "tape-top-right",
    "thumbtack-top-left",
    "thumbtack-top-right",
    "none",
  ];
  const decoration = decorations[index % decorations.length];

  return (
    <article
      className={`relative w-full mb-8 ${rotation} transition-transform duration-100 hover:-translate-y-1 hover:shadow-hard-lg
                   wobbly border border-[3px] border-border bg-background shadow-hard
                   hover:rotate-0`}
    >
      {/* Decorative elements */}
      {decoration === "tape-top-left" && (
        <div className="absolute top-0 left-0 w-[60px] h-[20px] bg-[url('/tape-strip.svg')] bg-repeat-no bg-top-left -rotate-[5deg]"></div>
      )}
      {decoration === "tape-top-right" && (
        <div className="absolute top-0 right-0 w-[60px] h-[20px] bg-[url('/tape-strip.svg')] bg-repeat-no bg-top-right rotate-[5deg]"></div>
      )}
      {decoration === "thumbtack-top-left" && (
        <div className="absolute top-0 left-0 w-[24px] h-[24px] bg-[url('/thumbtack.svg')] bg-contain rotate-[15deg]"></div>
      )}
      {decoration === "thumbtack-top-right" && (
        <div className="absolute top-0 right-0 w-[24px] h-[24px] bg-[url('/thumbtack.svg')] bg-contain rotate-[-15deg] scale-x-[-1]"></div>
      )}

      <div className="p-6">
        <h2 className="font-kalam text-2xl text-accent mb-3">
          {project.title}
        </h2>
        <p className="text-muted mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="wobbly border border-[2px] border-border text-xs px-2 py-1 rounded-[10px_5px_10px_5px]
                         bg-background hover:bg-accent hover:text-background
                         transition-all duration-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 wobbly border border-[3px] border-border px-4 py-2
                       bg-background hover:bg-accent hover:text-background
                       shadow-hard hover:shadow-hard-lg hover:-translate-y-1
                       rotate-1 hover:rotate-0 transition-all duration-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.01 1.51.51 2.61.51 6.15 2.68 7.69A5.44 5.44 0 006 10.23a5.44 5.44 0 00-6.5 6.5A5.44 5.44 0 002.77 16.37a9 9 0 006.72 3.3M9 19h6"></path>
            </svg>
            GitHub
          </Link>

          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 wobbly border border-[3px] border-border px-4 py-2
                         bg-background hover:bg-secondaryAccent hover:text-background
                         shadow-hard hover:shadow-hard-lg hover:-translate-y-1
                         rotate-1 hover:rotate-0 transition-all duration-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-6M21 19a2 2 0 00-2-2h-.01M17 6h4a2 2 0 002 2v1a2 2 0 00-2 2h-.01M9 18h6"></path>
              </svg>
              Live Demo
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}