import { useState } from "react";

function AIIcon() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
      <span className="text-sm font-bold text-blue-400">AI</span>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 4V16M4 10H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 12C11.1046 12 12 11.1046 12 10V4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4V10C8 11.1046 8.89543 12 10 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10C6 12.2091 7.79086 14 10 14C12.2091 14 14 12.2091 14 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14V18M8 18H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AISearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      alert(`AI Query: ${query}`);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600/20 to-blue-500/10 border border-blue-500/30 px-4 py-3">
        <AIIcon />
        
        <input
          type="text"
          placeholder="Ask me anything"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-xtago-text placeholder:text-xtago-muted outline-none text-base"
        />
        
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-xtago-muted hover:text-xtago-text transition-colors"
            onClick={() => alert("Add attachment")}
          >
            <PlusIcon />
          </button>
          
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-xtago-muted hover:text-xtago-text transition-colors"
            onClick={() => alert("Voice input")}
          >
            <MicIcon />
          </button>
        </div>
      </div>
    </form>
  );
}
