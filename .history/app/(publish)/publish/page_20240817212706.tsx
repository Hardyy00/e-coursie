import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";

export default function publish() {
  return (
    <div className="w-full h-full p-4 space-y-4">
      <h1 className="text-2xl font-extrabold tracking-wider">
        Publish Your Own Course
      </h1>

      <Alert className="text-yellow-400 border-yellow-400">
        <CircleAlert className="h-5 w-5 stroke-yellow-400" />
        <AlertTitle className="">Info</AlertTitle>

        <AlertDescription className="text-lg">
          Your Course is not visible to public.
        </AlertDescription>
      </Alert>
    </div>
  );
}
