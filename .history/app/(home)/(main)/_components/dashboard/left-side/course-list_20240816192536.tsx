const CourseList: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <div> Filters</div>

      <div className="flex-1 border border-red-500">
        {[...Array(100)].map((_, i) => (
          <div key={i}>Hardik</div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
