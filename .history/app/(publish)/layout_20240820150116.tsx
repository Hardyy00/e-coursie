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

      <div className=" flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
