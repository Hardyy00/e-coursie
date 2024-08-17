import { getSelf } from "@/lib/user-service";
import { useRouter } from "next/navigation";

interface PublishLayoutProps {
  children: React.ReactNode;
}

export default async function PublishLayout({ children }: PublishLayoutProps) {
  return (
    <div className="w-full h-full">
      <Sidebar />
    </div>
  );
}
