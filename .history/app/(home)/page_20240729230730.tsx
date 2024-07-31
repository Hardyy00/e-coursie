import { auth } from "@/auth";

export default async function HomePage() {
  const session = await auth();
  return (
    <div>
      Home Page
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
