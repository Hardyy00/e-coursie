import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import Uploader from "./_components/upload";
import { CldUploadWidget } from "next-cloudinary";
import MuxPlayer from "@mux/mux-player-react";

export default function publish() {
  return (
    <div className="w-full h-full p-4 space-y-4 overflow-y-auto gap-y-8">
      <h1 className="text-2xl font-extrabold tracking-wider">
        Publish Your Own Course
      </h1>

      <Alert className="text-yellow-400 border-yellow-400">
        <CircleAlert className="h-5 w-5 stroke-yellow-400" />
        <AlertTitle className="">Alert</AlertTitle>

        <AlertDescription className="text-lg">
          Your Course is not visible to public.
        </AlertDescription>
      </Alert>

      <MuxPlayer
        streamType="on-demand"
        playbackId="mEuT5UROTFEnIhCyfBEmtUBzImceeSKE8YEXrEW401WI"
      />
    </div>
  );
}
