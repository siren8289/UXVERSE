import './Search.css';
// import SearchIcon from './Vector-0.svg';

const Search = () => {
  return (
    <div className="search-container">
      <img
        src="/Vector-0.svg"
        alt="Search Icon"
        className="search-icon"
      />
      <input
        type="text"
        placeholder="Search"
        className="search-input"
      />
    </div>
  );
};

export default Search;