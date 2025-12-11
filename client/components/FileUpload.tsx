import { useState, useRef, useCallback } from "react";

interface FileUploadProps {
  maxFiles?: number;
  maxSizeMB?: number;
  acceptedTypes?: string[];
  onFilesChange?: (files: File[]) => void;
  existingFiles?: string[];
  className?: string;
}

// Upload icon component
function UploadIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M12 15V22M12 15L8 11M12 15L16 11M7 18H5C3.89543 18 3 17.1046 3 16V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V16C21 17.1046 20.1046 18 19 18H17" 
        stroke="#FE8A00" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

// File icon component
function FileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" 
        stroke="#697B7B" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M14 2V8H20" 
        stroke="#697B7B" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Close icon component
function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M12 4L4 12M4 4L12 12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FileUpload({
  maxFiles = 10,
  maxSizeMB = 4,
  acceptedTypes = ["image/*", "application/pdf"],
  onFilesChange,
  existingFiles = [],
  className = "",
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<{ url: string; file: File }[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  // Validate file
  const validateFile = (file: File): string | null => {
    // Check file size
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return `File size exceeds ${maxSizeMB}MB limit`;
    }

    // Check file type
    const isAccepted = acceptedTypes.some(type => {
      if (type.endsWith("/*")) {
        const baseType = type.split("/")[0];
        return file.type.startsWith(baseType + "/");
      }
      return file.type === type;
    });

    if (!isAccepted) {
      return "File type not supported";
    }

    return null;
  };

  // Handle file selection
  const handleFiles = useCallback((selectedFiles: FileList | null) => {
    if (!selectedFiles || selectedFiles.length === 0) return;

    setError(null);
    const newFiles: File[] = [];
    const newPreviews: { url: string; file: File }[] = [];

    Array.from(selectedFiles).forEach((file) => {
      // Check max files limit
      if (files.length + newFiles.length >= maxFiles) {
        setError(`Maximum ${maxFiles} files allowed`);
        return;
      }

      // Validate file
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }

      newFiles.push(file);

      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            const preview = { url: e.target.result as string, file };
            setPreviews(prev => [...prev, preview]);
          }
        };
        reader.readAsDataURL(file);
      } else {
        // For non-image files, use file icon
        newPreviews.push({ url: "", file });
      }
    });

    if (newFiles.length > 0) {
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      onFilesChange?.(updatedFiles);
    }
  }, [files, maxFiles, maxSizeMB, acceptedTypes, onFilesChange]);

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  // Handle file input change
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    // Reset input so same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Remove file
  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
    onFilesChange?.(updatedFiles);
    setError(null);
  };

  // Get preview URL for a file
  const getPreviewUrl = (index: number): string => {
    const preview = previews[index];
    if (preview?.url) return preview.url;
    return ""; // Return empty for non-image files
  };

  // Check if file is image
  const isImageFile = (index: number): boolean => {
    return files[index]?.type.startsWith("image/") || false;
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`
          flex items-center justify-center h-32 border-2 border-dashed rounded-3xl bg-[#22353E] cursor-pointer
          transition-all duration-200
          ${isDragging ? "border-[#FE8A00] bg-[#22353E]/80" : "border-[#697B7B]"}
          hover:border-[#FE8A00] hover:bg-[#22353E]/80
        `}
      >
        <div className="text-center">
          <div className="mb-2 flex justify-center">
            <UploadIcon />
          </div>
          <div className="text-[#FE8A00] text-xs font-bold font-['Space Grotesk'] mb-1">
            Drag & Drop file here
          </div>
          <div className="text-[#00E074] text-xs font-normal font-['Space Grotesk']">
            Or click to browse ({maxSizeMB} mb max)
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedTypes.join(",")}
          onChange={handleFileInputChange}
          className="hidden"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-[#FF1474] text-xs font-medium px-2">
          {error}
        </div>
      )}

      {/* File Preview Grid */}
      {(files.length > 0 || existingFiles.length > 0) && (
        <div className="flex flex-wrap items-center gap-2">
          {/* Existing Files */}
          {existingFiles.map((fileUrl, index) => (
            <div key={`existing-${index}`} className="relative">
              <div className="w-16 h-16 bg-[#22353E] rounded-2xl flex items-center justify-center overflow-hidden">
                {fileUrl.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                  <img 
                    src={fileUrl} 
                    alt={`Existing file ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FileIcon />
                )}
              </div>
            </div>
          ))}

          {/* New Files */}
          {files.map((file, index) => {
            const previewUrl = getPreviewUrl(index);
            const isImage = isImageFile(index);

            return (
              <div key={`file-${index}`} className="relative group">
                <div className="w-16 h-16 bg-[#22353E] rounded-2xl flex items-center justify-center overflow-hidden">
                  {isImage && previewUrl ? (
                    <img 
                      src={previewUrl} 
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FileIcon />
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFile(index);
                  }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#697B7B] hover:bg-[#FF1474] rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Remove file"
                >
                  <CloseIcon />
                </button>
                {/* File name tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#1C242E] text-[#F6F6F6] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  {file.name} ({formatFileSize(file.size)})
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Files Count */}
      {files.length > 0 && (
        <div className="text-[#697B7B] text-xs font-normal">
          {files.length} file{files.length !== 1 ? "s" : ""} selected
        </div>
      )}
    </div>
  );
}



