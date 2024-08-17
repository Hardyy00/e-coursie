import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";

export default function publish() {
  return (
    <div className="w-full h-full p-4">
      <h1 className="text-2xl font-extrabold tracking-wider">
        Publish Your Own Course
      </h1>

      <Alert>
        <AlertTitle>Info</AlertTitle>

        <CircleAlert className="h-5 w-5" />
        <AlertDescription>
          Your Course is not visible to public.
        </AlertDescription>
      </Alert>
    </div>
  );
}
