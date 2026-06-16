type SkillTagProps = {
  skill: string;
  index?: number;
};

export default function SkillTag({ skill, index = 0 }: SkillTagProps) {
  // Vary rotation and position for a sticky-note feel
  const rotations = ["rotate-1", "-rotate-2", "rotate-[3px]", "-rotate-[1px]"];
  const rotation = rotations[index % rotations.length];

  // Alternate between accent and secondaryAccent for background
  const bgColor = index % 2 === 0 ? "bg-accent" : "bg-secondaryAccent";
  const textColor = index % 2 === 0 ? "text-background" : "text-background";

  return (
    <span
      className={`${rotation} inline-block wobbly border border-[2px] border-border
                 px-3 py-1 mx-1 my-1
                 ${bgColor} ${textColor}
                 shadow-hard hover:shadow-hard-lg hover:-translate-y-1
                 transition-all duration-100`}
    >
      {skill}
    </span>
  );
}