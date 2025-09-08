interface XtagoLogoProps {
  className?: string;
}

export function XtagoLogo({ className = "" }: XtagoLogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <h1 className="text-4xl font-bold text-xtago-text">
        <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          X
        </span>
        tago
      </h1>
    </div>
  );
}
