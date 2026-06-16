import SectionHeader from "@/components/SectionHeader";
import SkillTag from "@/components/SkillTag";
import { skillGroups } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section className="py-12">
      <SectionHeader title="Skills" />
      <div className="flex flex-wrap gap-6">
        {skillGroups.map((group, groupIdx) => (
          <div
            key={group.title}
            className={`mb-8 ${groupIdx % 2 === 0 ? 'rotate-[2px]' : '-rotate-[1px]'} ${groupIdx % 3 === 0 ? '-translate-y-2' : groupIdx % 3 === 1 ? 'translate-y-0' : 'translate-y-2'} bg-white wobbly border border-[2px] border-foreground p-6 shadow-hard`}
          >
            <h3 className="font-kalam text-xl text-foreground mb-4 wobbly border border-[2px] border-foreground
                     p-2 shadow-hard inline-block rotate-1 hover:rotate-0 transition-transform duration-100">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, skillIdx) => (
                <SkillTag key={skill} skill={skill} index={groupIdx * 10 + skillIdx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}