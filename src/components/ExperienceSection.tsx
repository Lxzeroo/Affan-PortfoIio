import SectionHeader from "@/components/SectionHeader";

export default function ExperienceSection() {
  return (
    <section className="py-12">
      <SectionHeader title="Experience & Achievements" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* AI Development */}
        <div className="relative wobbly border border-[3px] border-border p-6 bg-background shadow-hard
                     rotate-[1px] hover:rotate-0 transition-transform duration-100
                     hover:-translate-y-1 hover:shadow-hard-lg">
          <h3 className="font-kalam text-xl text-accent mb-2">AI Development</h3>
          <p className="font-patrick text-muted">Built autonomous AI systems, intelligent applications, and AI-powered tools using NVIDIA Nemotron, FastAPI, and machine learning techniques.</p>
        </div>
        {/* Full-Stack Development */}
        <div className="relative wobbly border border-[3px] border-border p-6 bg-background shadow-hard
                     rotate-[-1px] hover:rotate-0 transition-transform duration-100
                     hover:-translate-y-1 hover:shadow-hard-lg">
          <h3 className="font-kalam text-xl text-accent mb-2">Full-Stack Development</h3>
          <p className="font-patrick text-muted">Developed scalable web applications from frontend to backend using React, Node.js, Java, and various databases.</p>
        </div>
        {/* Product Building */}
        <div className="relative wobbly border border-[3px] border-border p-6 bg-background shadow-hard
                     rotate-[2px] hover:rotate-0 transition-transform duration-100
                     hover:-translate-y-1 hover:shadow-hard-lg">
          <h3 className="font-kalam text-xl text-accent mb-2">Product Building</h3>
          <p className="font-patrick text-muted">Created end-to-end products from concept to launch, focusing on user needs and technical excellence.</p>
        </div>
        {/* Software Engineering */}
        <div className="relative wobbly border border-[3px] border-border p-6 bg-background shadow-hard
                     rotate-[-2px] hover:rotate-0 transition-transform duration-100
                     hover:-translate-y-1 hover:shadow-hard-lg">
          <h3 className="font-kalam text-xl text-accent mb-2">Software Engineering</h3>
          <p className="font-patrick text-muted">Applied software engineering principles, OOP, and best practices to build reliable, maintainable systems.</p>
        </div>
      </div>
    </section>
  );
}