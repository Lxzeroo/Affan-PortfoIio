type DropCapProps = {
  children: React.ReactNode;
};

export default function DropCap({ children }: DropCapProps) {
  // We assume the first character is a letter
  const text = String(children);
  const first = text.slice(0, 1);
  const rest = text.slice(1);

  return (
    <span className="inline-block">
      <span className="font-kalam text-5xl text-accent float-left mr-2 mt-2 leading-none">
        {first}
      </span>
      {rest}
    </span>
  );
}