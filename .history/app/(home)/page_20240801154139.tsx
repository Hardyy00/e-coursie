import Courses from "./_components/dashboard/left-side/courses";
import Navbar from "./_components/navbar";

export default async function HomePage() {
  return (
    <div className="h-full ">
      <Courses />

      <RightSide />
    </div>
  );
}
