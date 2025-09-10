import { Link } from "react-router-dom";

interface XtagoLogoProps {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  to?: string;
  clickable?: boolean;
}

export function XtagoLogo({
  className = "",
  width = 115,
  height = 58,
  alt = "Xtago",
  to = "/dashboard",
  clickable = true,
}: XtagoLogoProps) {
  const img = (
    <img
      src="/assets/logo.webp"
      alt={alt}
      width={width}
      height={height}
      className="block h-auto w-auto"
    />
  );

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {clickable ? (
        <Link
          to={to}
          aria-label="Go to Dashboard"
          className="inline-block focus:outline-none focus:ring-2 focus:ring-[#FE8A00] rounded cursor-pointer"
        >
          {img}
        </Link>
      ) : (
        img
      )}
    </div>
  );
}
