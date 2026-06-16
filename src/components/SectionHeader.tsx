type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="font-kalam text-3xl text-accent mb-6 wobbly border border-[3px] border-border
                 p-4 shadow-hard inline-block rotate-1 hover:rotate-0 transition-transform duration-100
                 hover:-translate-y-1 hover:shadow-hard-lg">
      {title}
    </h2>
  );
}