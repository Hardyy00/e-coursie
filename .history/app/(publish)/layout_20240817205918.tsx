import { getSelf } from "@/lib/user-service";
import { useRouter } from "next/navigation";

interface PublishLayoutProps {
  children: React.ReactNode;
}

export default async function PublishLayout({ children }: PublishLayoutProps) {
  const router = useRouter();
  let user;
  try {
    user = await getSelf();
  } catch {}
  return <div className="w-full h-full">{children}</div>;
}
