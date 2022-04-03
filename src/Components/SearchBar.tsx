import React, { FC } from "react";

interface Props {
  setSearchTerm: (term: string) => void;
}

const SearchBar: FC<Props> = ({ setSearchTerm }) => {
  return (
    <input
      id="search-bar"
      type="text"
      placeholder="Search..."
      onChange={(ev) => setSearchTerm(ev.target.value)}
    />
  );
};

export default SearchBar;
