const SearchBar = ({ onSearch }) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Search by name, grade, or email"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  };
  
  export default SearchBar;
  