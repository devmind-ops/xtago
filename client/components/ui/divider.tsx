interface DividerProps {
  text: string;
}

export function Divider({ text }: DividerProps) {
  return (
    <div className="flex items-center gap-2 w-full max-w-[267px] mx-auto">
      <div className="h-px bg-gray-300 flex-1"></div>
      <span className="text-sm text-gray-400 px-2 whitespace-nowrap font-normal">
        {text}
      </span>
      <div className="h-px bg-gray-300 flex-1"></div>
    </div>
  );
}
