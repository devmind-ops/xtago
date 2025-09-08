import { useState, useRef, KeyboardEvent, ChangeEvent } from "react";
import { cn } from "@/lib/utils";

interface OtpInputProps {
  length?: number;
  onComplete?: (value: string) => void;
  className?: string;
}

export function OtpInput({ length = 5, onComplete, className }: OtpInputProps) {
  const [values, setValues] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(new Array(length).fill(null));

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single character
    
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // Move to next input if value is entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all fields are filled
    if (newValues.every(val => val !== "")) {
      onComplete?.(newValues.join(""));
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length);
    const newValues = [...values];
    
    for (let i = 0; i < pastedData.length && i < length; i++) {
      newValues[i] = pastedData[i];
    }
    
    setValues(newValues);
    
    // Focus next empty input or last input
    const nextIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
    
    if (newValues.every(val => val !== "")) {
      onComplete?.(newValues.join(""));
    }
  };

  return (
    <div className={cn("flex gap-4 justify-center", className)}>
      {values.map((value, index) => (
        <input
          key={index}
          ref={el => inputRefs.current[index] = el}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-14 h-14 text-center text-lg font-semibold bg-xtago-input-bg border border-xtago-input-border rounded-xl focus:outline-none focus:ring-2 focus:ring-xtago-primary focus:border-transparent text-xtago-background"
        />
      ))}
    </div>
  );
}
