export interface TagProps {
  label: string;
  outlined?: boolean;
  icone: React.ElementType;
}

export default function Tag(props: TagProps) {
  return (
    <div
      className={`
              flex items-center gap-2 self-start py-1 px-4
              rounded-full text-xs uppercase
              ${
                props.outlined
                  ? "border border-violet-500 text-white"
                  : "bg-gradient-to-r from-violet-600 to-violet-700"
              }
              
          `}
    >
      <props.icone size={15} />
      <span>{props.label}</span>
    </div>
  );
}
