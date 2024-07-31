import { auth } from "@/auth";
import { getSelf } from "@/lib/user-service";

export default async function HomePage() {
  const user = await getSelf();
  return (
    <div>
      Home Page
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
}
