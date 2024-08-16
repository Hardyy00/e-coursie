interface SearchPageProps {
  searchParams: {
    name: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  return <div className="p-4">{searchParams.name}</div>;
};

export default SearchPage;
