import { getSelf } from "@/lib/user-service";
import Courses from "./_components/dashboard/left-side/courses";
import RightSide from "./_components/dashboard/right-side";
import Navbar from "./_components/navbar";

export default async function HomePage() {
  let user = null;
  try {
    user = await getSelf();
  } catch {
    user = null;
  }

  return (
    <div className="h-full flex max-md:flex-col ">
      <Courses />

      <RightSide user={user} isLoggedIn={!!user} />
    </div>
  );
}
