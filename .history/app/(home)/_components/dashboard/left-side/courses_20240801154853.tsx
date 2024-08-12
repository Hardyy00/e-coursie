import Navbar from "../../navbar";
import CourseList from "./course-list";

const Courses: React.FC = () => {
  return (
    <div className="h-full flex-[0.7]">
      <Navbar />

      <CourseList />
    </div>
  );
};

export default Courses;
