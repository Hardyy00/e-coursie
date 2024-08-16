const CourseList: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto gap-y-4">
      <div> Filters</div>

      <div className="flex-1 border border-red-500 overflow-y-scroll">
        {[...Array(100)].map((_, i) => (
          <div key={i}>Hardik</div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
