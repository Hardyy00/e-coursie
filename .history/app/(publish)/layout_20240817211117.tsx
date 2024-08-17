import { getSelf } from "@/lib/user-service";
import { useRouter } from "next/navigation";
import { Sidebar } from "./_components/sidebar";

interface PublishLayoutProps {
  children: React.ReactNode;
}

export default async function PublishLayout({ children }: PublishLayoutProps) {
  return (
    <div className="w-full h-full flex">
      <Sidebar />

      <div className="border border-white bg-blue-400 flex-1">hii </div>
    </div>
  );
}
