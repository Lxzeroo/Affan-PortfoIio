import SectionHeader from "@/components/SectionHeader";

export default function StatsSection() {
  return (
    <section className="py-12">
      <SectionHeader title="Stats" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="relative wobbly border border-[3px] border-border p-6 bg-background shadow-hard
                     rotate-[1px] hover:rotate-0 transition-transform duration-100
                     hover:-translate-y-1 hover:shadow-hard-lg">
          <h3 className="font-kalam text-3xl text-accent mb-2">6+</h3>
          <p className="font-patrick text-muted text-center">Projects Built</p>
        </div>
        {/* Card 2 */}
        <div className="relative wobbly border border-[3px] border-border p-6 bg-background shadow-hard
                     rotate-[-1px] hover:rotate-0 transition-transform duration-100
                     hover:-translate-y-1 hover:shadow-hard-lg">
          <h3 className="font-kalam text-3xl text-accent mb-2">AI-Powered</h3>
          <p className="font-patrick text-muted text-center">Applications</p>
        </div>
        {/* Card 3 */}
        <div className="relative wobbly border border-[3px] border-border p-6 bg-background shadow-hard
                     rotate-[2px] hover:rotate-0 transition-transform duration-100
                     hover:-translate-y-1 hover:shadow-hard-lg">
          <h3 className="font-kalam text-3xl text-accent mb-2">Full-Stack</h3>
          <p className="font-patrick text-muted text-center">Development</p>
        </div>
        {/* Card 4 */}
        <div className="relative wobbly border border-[3px] border-border p-6 bg-background shadow-hard
                     rotate-[-2px] hover:rotate-0 transition-transform duration-100
                     hover:-translate-y-1 hover:shadow-hard-lg">
          <h3 className="font-kalam text-3xl text-accent mb-2">Product</h3>
          <p className="font-patrick text-muted text-center">Builder</p>
        </div>
      </div>
    </section>
  );
}