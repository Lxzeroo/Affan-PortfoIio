import DropCap from "@/components/DropCap";
import SectionHeader from "@/components/SectionHeader";
import { personalInfo } from "@/lib/data";

export default function AboutSection() {
  const { bio } = personalInfo;

  return (
    <section className="py-12">
      <SectionHeader title="About Me" />
      <p className="text-lg text-muted leading-relaxed max-w-3xl">
        <DropCap>{bio}</DropCap>
      </p>
    </section>
  );
}