type SkillTagProps = {
  skill: string;
  index?: number;
};

export default function SkillTag({ skill, index = 0 }: SkillTagProps) {
  // Vary rotation and position for a sticky-note feel
  const rotations = ["rotate-1", "-rotate-2", "rotate-[3px]", "-rotate-[1px]"];
  const rotation = rotations[index % rotations.length];

  // Sticky note style: white background, black text, black border
  return (
    <span
      className={`${rotation} inline-block wobbly border border-[2px] border-foreground
                 px-3 py-1 mx-1 my-1
                 bg-white text-foreground
                 shadow-hard hover:shadow-hard-lg hover:-translate-y-1
                 transition-all duration-100`}
    >
      {skill}
    </span>
  );
}