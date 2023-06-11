import { ChangeEvent, KeyboardEvent, useState } from "react";
import { HiSearch } from "react-icons/hi";
import "./../styles/Search.scss";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter")
      console.log("Search init with value: ", searchValue);
  };

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search the docs"
        value={searchValue}
        onChange={onSearchChange}
        onKeyUp={handleSearchChange}
      />
      <HiSearch className="search__icon" />
    </div>
  );
}

export default Search;
