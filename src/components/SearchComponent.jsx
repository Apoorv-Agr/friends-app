import React, { useRef, useEffect } from "react";
import css from "../styles/friendsListStyle.module.css";

const SearchComponent = (props) => {
  const newInputRef = useRef(null);
  const { searchText, onSearchChange } = props;
  useEffect(() => {
    newInputRef.current.focus();
  }, []);
  return (
    <span>
      <input
        ref={newInputRef}
        placeholder="Enter your friend's name"
        value={searchText}
        type="search"
        onChange={onSearchChange}
        className={`${css.searchInput}`}
      />
    </span>
  );
};

export default SearchComponent;
