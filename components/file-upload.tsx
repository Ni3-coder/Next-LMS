import toast from "react-hot-toast";
import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({
  onChange,
  endpoint
}: FileUploadProps) => {
  const handleClientUploadComplete = (res: any) => {
    if (Array.isArray(res) && res.length > 0 && res[0]?.url) {
      onChange(res[0].url);
    } else {
      toast.error("Invalid response format from server");
    }
  };

  const handleUploadError = (error: Error) => {
    toast.error(`Upload failed: ${error.message}`);
  };

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={handleClientUploadComplete}
      onUploadError={handleUploadError}
    />
  );
};
