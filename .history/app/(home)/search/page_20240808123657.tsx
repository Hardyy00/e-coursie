interface SearchPageProps {
  searchParams: {
    name: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  return <div>{searchParams.name}</div>;
};

export default SearchPage;
